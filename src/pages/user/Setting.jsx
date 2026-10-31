import { useEffect, useRef, useState } from "react";
import {
  UserRound,
  LockKeyhole,
  Camera,
  Save,
  Eye,
  EyeOff,
  Loader2,
  Settings,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

const API = import.meta.env.VITE_API_URL || "/api";

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#F66B87] focus:bg-white focus:ring-2 focus:ring-pink-100 disabled:cursor-not-allowed disabled:opacity-60";

const fields = [
  { name: "firstName", label: "First name", type: "text", required: true },
  { name: "lastName", label: "Last name", type: "text", required: true },
  { name: "email", label: "Email address", type: "email", required: true },
  { name: "phone", label: "Phone number", type: "tel" },
];

const emptyProfile = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const emptyPasswords = {
  current: "",
  newPassword: "",
  confirm: "",
};

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

  if (!response.ok) {
    throw new Error(data?.message || "Request failed");
  }

  return data;
}

// Password input component
function PasswordField({ label, value, onChange, name, disabled }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        <input
          className={`${inputClass} pr-12`}
          name={name}
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={`Enter ${label.toLowerCase()}`}
          autoComplete="off"
          disabled={disabled}
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#F66B87]"
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}

// Section heading component
function SectionHeading({ icon: Icon, title, description }) {
  return (
    <div className="mb-6 flex items-start gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-[#F66B87]">
        <Icon size={21} />
      </div>

      <div>
        <h2 className="text-lg font-bold text-gray-800 sm:text-xl">
          {title}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {description}
        </p>
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

  // Load user profile
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
      setFeedback({
        error: true,
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProfile();
  }, []);

  // Check if anything has changed
  const changed =
    fields.some(({ name }) => profile[name] !== saved[name]) ||
    Object.values(passwords).some(Boolean) ||
    Boolean(file);

  // Update profile inputs
  function updateProfile(e) {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });

    setFeedback(null);
  }

  // Update password inputs
  function updatePassword(e) {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });

    setFeedback(null);
  }

  // Update profile photo
  function updatePhoto(e) {
    const image = e.target.files?.[0];

    e.target.value = "";

    if (!image) return;

    if (
      !image.type.startsWith("image/") ||
      image.size > 5 * 1024 * 1024
    ) {
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

  // Save all changes
  async function handleSubmit(e) {
    e.preventDefault();

    if (Object.values(passwords).some(Boolean)) {
      if (
        !passwords.current ||
        !passwords.newPassword ||
        !passwords.confirm
      ) {
        return setFeedback({
          error: true,
          text: "Complete all password fields.",
        });
      }

      if (passwords.newPassword.length < 8) {
        return setFeedback({
          error: true,
          text: "Password must have 8 characters.",
        });
      }

      if (passwords.newPassword !== passwords.confirm) {
        return setFeedback({
          error: true,
          text: "Passwords do not match.",
        });
      }
    }

    if (!changed) return;

    setSaving(true);
    setFeedback(null);

    try {
      // Update profile information
      if (fields.some(({ name }) => profile[name] !== saved[name])) {
        await request("/users/me", {
          method: "PUT",
          body: JSON.stringify(profile),
        });

        setSaved({ ...profile });
      }

      // Upload profile photo
      if (file) {
        const form = new FormData();

        form.append("photo", file);

        const data = await request("/users/me/photo", {
          method: "POST",
          body: form,
        });

        if (data?.photoUrl) {
          setPhoto(data.photoUrl);
        }

        setFile(null);
      }

      // Update password
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

      setFeedback({
        text: "Changes saved successfully.",
      });
    } catch (error) {
      setFeedback({
        error: true,
        text: error.message,
      });
    } finally {
      setSaving(false);
    }
  }

  // Discard changes
  function handleDiscard() {
    setProfile(saved);
    setPasswords(emptyPasswords);
    setFile(null);
    setFeedback(null);

    loadProfile();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto min-h-screen w-full max-w-[1350px] px-4 py-8 sm:px-6 lg:px-8">

        {/* Page Heading */}
        <div className="mb-8">
          <p className="mb-2 flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[#F66B87]">
            <Settings size={16} />
            Account Settings
          </p>

          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            My Profile
          </h1>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Manage your personal information and keep your account secure.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Profile Information */}
          <section className="rounded-2xl border border-gray-100 bg-white p-5 sm:p-8">

            <SectionHeading
              icon={UserRound}
              title="Personal Information"
              description="Update your personal details and profile photo."
            />

            <div className="grid gap-8 lg:grid-cols-[230px_1fr]">

              {/* Profile Photo */}
              <div className="flex flex-col items-center rounded-xl bg-slate-50 p-6">

                <div className="relative">
                  {photo ? (
                    <img
                      src={photo}
                      alt="Profile"
                      className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-sm"
                    />
                  ) : (
                    <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-pink-50 text-[#F66B87] shadow-sm">
                      <UserRound size={48} />
                    </div>
                  )}

                  <div className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#F66B87] text-white">
                    <Camera size={17} />
                  </div>
                </div>

                <h3 className="mt-4 text-base font-bold text-gray-800">
                  Profile Photo
                </h3>

                <p className="mt-1 text-center text-xs text-gray-500">
                  JPG, PNG or other image formats
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Maximum size: 5 MB
                </p>

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
                  disabled={saving}
                  className="mt-5 flex items-center gap-2 rounded-lg bg-[#F66B87] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#e05571] disabled:opacity-50"
                >
                  <Camera size={16} />
                  Change Photo
                </button>
              </div>

              {/* Profile Fields */}
              <div>
                <div className="mb-5">
                  <h3 className="text-base font-semibold text-gray-800">
                    Basic Details
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Your information helps us provide a better shopping experience.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {fields.map((field) => (
                    <div key={field.name}>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        {field.label}

                        {field.required && (
                          <span className="ml-1 text-[#F66B87]">*</span>
                        )}
                      </label>

                      <input
                        {...field}
                        className={inputClass}
                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                        value={profile[field.name]}
                        onChange={updateProfile}
                        disabled={loading || saving}
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* Password Section */}
          <section className="rounded-2xl border border-gray-100 bg-white p-5 sm:p-8">

            <SectionHeading
              icon={LockKeyhole}
              title="Change Password"
              description="Update your password to keep your account safe."
            />

            <div className="mb-6 flex items-start gap-3 rounded-xl border border-pink-100 bg-pink-50 p-4">
              <ShieldCheck
                size={21}
                className="mt-0.5 shrink-0 text-[#F66B87]"
              />

              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  Keep your account secure
                </h3>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Use a strong password with at least 8 characters.
                  Leave these fields empty if you do not want to change your password.
                </p>
              </div>
            </div>

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
                  disabled={saving}
                />
              ))}
            </div>
          </section>

          {/* Feedback Message */}
          {feedback && (
            <div
              className={`flex items-center gap-3 rounded-xl border p-4 ${
                feedback.error
                  ? "border-red-100 bg-red-50 text-red-600"
                  : "border-green-100 bg-green-50 text-green-600"
              }`}
            >
              {feedback.error ? (
                <LockKeyhole size={19} />
              ) : (
                <CheckCircle2 size={19} />
              )}

              <p className="text-sm font-medium">
                {feedback.text}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:justify-end">

            <button
              type="button"
              disabled={saving}
              onClick={handleDiscard}
              className="rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-600 transition hover:border-[#F66B87] hover:text-[#F66B87] disabled:opacity-50"
            >
              Discard Changes
            </button>

            <button
              type="submit"
              disabled={loading || saving || !changed}
              className="flex items-center justify-center gap-2 rounded-lg bg-[#F66B87] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#e05571] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Save size={18} />
              )}

              {saving ? "Saving..." : "Save Changes"}
            </button>

          </div>
        </form>

      </main>

      <Footer />
    </div>
  );
}

export default UserSettings;