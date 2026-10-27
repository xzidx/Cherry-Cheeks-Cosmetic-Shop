
import { useEffect, useRef, useState } from "react";
import {
  UserRound, LockKeyhole, Camera, Save, Eye, EyeOff, Loader2,
} from "lucide-react";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

const API = import.meta.env.VITE_API_URL || "/api";
const inputClass =
  "w-full rounded-xl border border-[#DCE5F1] bg-[#F7F9FC] p-3 text-sm outline-none focus:border-pink-400";

const fields = [
  { name: "firstName", label: "First name", type: "text", required: true },
  { name: "lastName", label: "Last name", type: "text", required: true },
  { name: "email", label: "Email address", type: "email", required: true },
  { name: "phone", label: "Phone number", type: "tel" },
];

const emptyProfile = {
  firstName: "", lastName: "", email: "", phone: "",
};
const emptyPasswords = { current: "", newPassword: "", confirm: "" };

async function request(path, options = {}) {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API}${path}`, {
    ...options,
    headers: {
      ...(options.body instanceof FormData
        ? {}
        : { "Content-Type": "application/json" }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  const data = await response.json().catch(() => null);
  if (!response.ok) throw new Error(data?.message || "Request failed");
  return data;
}

function PasswordField({ label, value, onChange, name }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">{label}</label>
      <div className="relative">
        <input
          className={inputClass + " pr-12"}
          name={name}
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={label}
          autoComplete="off"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-3"
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}

function UserSettings() {
  const [profile, setProfile] = useState(emptyProfile);
  const [saved, setSaved] = useState(emptyProfile);
  const [passwords, setPasswords] = useState(emptyPasswords);
  const [photo, setPhoto] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const fileRef = useRef(null);

  async function loadProfile() {
    setLoading(true);
    try {
      const data = await request("/users/me");
      const next = Object.fromEntries(
        fields.map(({ name }) => [name, data?.[name] ?? ""])
      );
      setProfile(next);
      setSaved(next);
      setPhoto(data?.photoUrl || "");
    } catch (error) {
      setFeedback({ error: true, text: error.message });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProfile();
  }, []);

  const changed =
    fields.some(({ name }) => profile[name] !== saved[name]) ||
    Object.values(passwords).some(Boolean) ||
    Boolean(file);

  function updateProfile(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
    setFeedback(null);
  }

  function updatePassword(e) {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
    setFeedback(null);
  }

  function updatePhoto(e) {
    const image = e.target.files?.[0];
    e.target.value = "";
    if (!image) return;

    if (!image.type.startsWith("image/") || image.size > 5 * 1024 * 1024) {
      setFeedback({
        error: true,
        text: "Choose an image smaller than 5 MB.",
      });
      return;
    }

    setFile(image);
    setPhoto(URL.createObjectURL(image));
    setFeedback(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (Object.values(passwords).some(Boolean)) {
      if (!passwords.current || !passwords.newPassword || !passwords.confirm) {
        return setFeedback({ error: true, text: "Complete all password fields." });
      }
      if (passwords.newPassword.length < 8) {
        return setFeedback({ error: true, text: "Password must have 8 characters." });
      }
      if (passwords.newPassword !== passwords.confirm) {
        return setFeedback({ error: true, text: "Passwords do not match." });
      }
    }

    if (!changed) return;

    setSaving(true);
    setFeedback(null);

    try {
      if (fields.some(({ name }) => profile[name] !== saved[name])) {
        await request("/users/me", {
          method: "PUT",
          body: JSON.stringify(profile),
        });
        setSaved({ ...profile });
      }

      if (file) {
        const form = new FormData();
        form.append("photo", file);
        const data = await request("/users/me/photo", {
          method: "POST",
          body: form,
        });
        if (data?.photoUrl) setPhoto(data.photoUrl);
        setFile(null);
      }

      if (Object.values(passwords).some(Boolean)) {
        await request("/users/me/password", {
          method: "PUT",
          body: JSON.stringify({
            currentPassword: passwords.current,
            newPassword: passwords.newPassword,
          }),
        });
        setPasswords(emptyPasswords);
      }

      setFeedback({ text: "Changes saved successfully." });
    } catch (error) {
      setFeedback({ error: true, text: error.message });
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F6F8FB] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-[#101D36]">User Profile</h1>
          <p className="mb-8 mt-2 text-[#7185A4]">
            Manage your account and personal preferences.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <section className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="mb-6 flex items-center gap-3 text-xl font-bold">
                <UserRound /> Profile Information
              </h2>

              <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
                <div className="flex flex-col items-center">
                  {photo ? (
                    <img
                      src={photo}
                      alt="Profile"
                      className="h-36 w-36 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-36 w-36 items-center justify-center rounded-full bg-pink-50 text-pink-500">
                      <UserRound size={50} />
                    </div>
                  )}

                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    onChange={updatePhoto}
                    className="hidden"
                  />

                  <button
                    type="button"
                    onClick={() => fileRef.current.click()}
                    className="mt-4 flex items-center gap-2 rounded-lg bg-pink-50 px-5 py-3 text-pink-600"
                  >
                    <Camera size={18} /> Change photo
                  </button>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {fields.map((field) => (
                    <div key={field.name}>
                      <label className="mb-2 block text-sm font-semibold">
                        {field.label}
                      </label>
                      <input
                        {...field}
                        className={inputClass}
                        value={profile[field.name]}
                        onChange={updateProfile}
                        disabled={loading || saving}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="mb-6 flex items-center gap-3 text-xl font-bold">
                <LockKeyhole /> Change Password
              </h2>

              <div className="grid gap-5 md:grid-cols-3">
                {[
                  ["current", "Current password"],
                  ["newPassword", "New password"],
                  ["confirm", "Confirm password"],
                ].map(([name, label]) => (
                  <PasswordField
                    key={name}
                    name={name}
                    label={label}
                    value={passwords[name]}
                    onChange={updatePassword}
                  />
                ))}
              </div>
            </section>

            {feedback && (
              <p className={feedback.error ? "text-red-600" : "text-pink-600"}>
                {feedback.text}
              </p>
            )}

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={loading || saving || !changed}
                className="flex items-center gap-2 rounded-lg bg-[#FF4081] px-6 py-3 font-semibold text-white disabled:opacity-50"
              >
                {saving ? <Loader2 className="animate-spin" /> : <Save size={18} />}
                {saving ? "Saving..." : "Save changes"}
              </button>

              <button
                type="button"
                disabled={saving}
                onClick={() => {
                  setProfile(saved);
                  setPasswords(emptyPasswords);
                  setFile(null);
                  setFeedback(null);
                  loadProfile();
                }}
                className="rounded-lg bg-pink-50 px-6 py-3 text-pink-600"
              >
                Discard
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default UserSettings;
