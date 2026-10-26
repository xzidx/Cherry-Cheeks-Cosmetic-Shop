import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  UserRound,
  LockKeyhole,
  Camera,
  Save,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

/* -------------------------------------------------------------------------- */
/* API layer – adjust the base URL / endpoints / token source to your backend */
/* -------------------------------------------------------------------------- */
const API_URL = import.meta.env.VITE_API_URL || "/api";

async function request(path, options = {}) {
  const token = localStorage.getItem("token");
  const isFormData = options.body instanceof FormData;

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    /* empty body */
  }

  if (!response.ok) {
    throw new Error(data?.message || `Request failed (${response.status})`);
  }
  return data;
}

const api = {
  getProfile: () => request("/users/me"),
  updateProfile: (body) =>
    request("/users/me", { method: "PUT", body: JSON.stringify(body) }),
  uploadPhoto: (file) => {
    const form = new FormData();
    form.append("photo", file);
    return request("/users/me/photo", { method: "POST", body: form });
  },
  changePassword: (body) =>
    request("/users/me/password", { method: "PUT", body: JSON.stringify(body) }),
};

/* -------------------------------------------------------------------------- */
/* Page configuration – every field/label on the page is driven from here     */
/* -------------------------------------------------------------------------- */
const PROFILE_FIELDS = [
  { name: "firstName", label: "First name", type: "text", required: true },
  { name: "lastName", label: "Last name", type: "text", required: true },
  { name: "email", label: "Email address", type: "email", required: true },
  { name: "phone", label: "Phone number", type: "tel" },
];

const PASSWORD_FIELDS = [
  { name: "current", label: "Current password", placeholder: "Enter current password" },
  { name: "newPassword", label: "New password", placeholder: "Enter new password" },
  { name: "confirm", label: "Confirm new password", placeholder: "Confirm new password" },
];

const EMPTY_PROFILE = Object.fromEntries(PROFILE_FIELDS.map((f) => [f.name, ""]));
const EMPTY_PASSWORDS = Object.fromEntries(PASSWORD_FIELDS.map((f) => [f.name, ""]));

const MAX_PHOTO_SIZE = 5 * 1024 * 1024;
const MIN_PASSWORD_LENGTH = 8;

const inputClass =
  "h-[49px] w-full rounded-xl border border-[#DCE5F1] bg-[#F7F9FC] px-4 text-sm text-[#344968] outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-100 disabled:cursor-not-allowed disabled:opacity-70 read-only:cursor-not-allowed read-only:bg-[#EEF2F8]";

/* -------------------------------------------------------------------------- */
/* Small components                                                           */
/* -------------------------------------------------------------------------- */
function PasswordField({ id, label, value, onChange, placeholder, disabled }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-semibold text-[#506789]"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          name={id}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete="new-password"
          className="h-[51px] w-full rounded-xl border border-[#DCE5F1] bg-[#F7F9FC] px-4 pr-12 text-sm text-[#344968] outline-none transition placeholder:text-[#91A2BB] focus:border-pink-400 focus:ring-2 focus:ring-pink-100 disabled:opacity-70"
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#506789] hover:text-pink-500"
        >
          {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
        </button>
      </div>
    </div>
  );
}

function SectionHeader({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-7 flex items-center gap-3.5">
      <div className="flex h-[51px] w-[51px] shrink-0 items-center justify-center rounded-full bg-[#F1F5FA] text-[#50698D]">
        <Icon size={25} strokeWidth={1.8} />
      </div>
      <div>
        <h2 className="text-[19px] font-bold text-[#101D36]">{title}</h2>
        <p className="mt-1 text-sm text-[#7185A4]">{subtitle}</p>
      </div>
    </div>
  );
}

function Skeleton({ className = "" }) {
  return <div className={`animate-pulse rounded-xl bg-[#E8EEF6] ${className}`} />;
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */
function UserSettings() {
  const [profile, setProfile] = useState(EMPTY_PROFILE);
  const [savedProfile, setSavedProfile] = useState(EMPTY_PROFILE);
  const [passwords, setPasswords] = useState(EMPTY_PASSWORDS);

  const [photoUrl, setPhotoUrl] = useState("");
  const [photoFile, setPhotoFile] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState(null); // { type: "success" | "error", text }

  const fileInputRef = useRef(null);
  const previewUrlRef = useRef(null);

  /* ---------- load profile from the backend ---------- */
  const loadProfile = useCallback(async (signal) => {
    setLoading(true);
    try {
      const data = await api.getProfile();
      if (signal?.aborted) return;

      const next = Object.fromEntries(
        PROFILE_FIELDS.map((f) => [f.name, data?.[f.name] ?? ""])
      );
      setProfile(next);
      setSavedProfile(next);
      setPhotoUrl(data?.photoUrl || "");
    } catch (error) {
      if (!signal?.aborted) {
        setFeedback({ type: "error", text: error.message });
      }
    } finally {
      if (!signal?.aborted) setLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    loadProfile(controller.signal);
    return () => controller.abort();
  }, [loadProfile]);

  /* clean up temporary preview URL */
  useEffect(
    () => () => {
      if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
    },
    []
  );

  /* ---------- derived state ---------- */
  const profileChanged = useMemo(
    () => PROFILE_FIELDS.some((f) => profile[f.name] !== savedProfile[f.name]),
    [profile, savedProfile]
  );
  const passwordTouched = Object.values(passwords).some(Boolean);
  const hasChanges = profileChanged || passwordTouched || Boolean(photoFile);

  const initials = `${profile.firstName?.[0] ?? ""}${profile.lastName?.[0] ?? ""}`.toUpperCase();

  /* ---------- handlers ---------- */
  const handleProfileChange = (event) => {
    const { name, value } = event.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
    setFeedback(null);
  };

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
    setFeedback(null);
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setFeedback({ type: "error", text: "Please select a valid image file." });
      return;
    }
    if (file.size > MAX_PHOTO_SIZE) {
      setFeedback({ type: "error", text: "Please select an image smaller than 5 MB." });
      return;
    }

    if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
    const preview = URL.createObjectURL(file);
    previewUrlRef.current = preview;

    setPhotoFile(file);
    setPhotoUrl(preview);
    setFeedback(null);
  };

  const validatePasswords = () => {
    if (!passwordTouched) return null;

    if (!passwords.current || !passwords.newPassword || !passwords.confirm) {
      return "Please complete all password fields.";
    }
    if (passwords.newPassword.length < MIN_PASSWORD_LENGTH) {
      return `Your new password must have at least ${MIN_PASSWORD_LENGTH} characters.`;
    }
    if (passwords.newPassword !== passwords.confirm) {
      return "Your new passwords do not match.";
    }
    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const passwordError = validatePasswords();
    if (passwordError) {
      setFeedback({ type: "error", text: passwordError });
      return;
    }
    if (!hasChanges) {
      setFeedback({ type: "success", text: "There are no changes to save." });
      return;
    }

    setSaving(true);
    setFeedback(null);

    try {
      // Profile details (skip read-only fields)
      if (profileChanged) {
        const payload = Object.fromEntries(
          PROFILE_FIELDS.filter((f) => !f.readOnly).map((f) => [f.name, profile[f.name]])
        );
        const updated = await api.updateProfile(payload);
        const next = Object.fromEntries(
          PROFILE_FIELDS.map((f) => [f.name, updated?.[f.name] ?? profile[f.name]])
        );
        setProfile(next);
        setSavedProfile(next);
      }

      // Profile photo
      if (photoFile) {
        const result = await api.uploadPhoto(photoFile);
        if (result?.photoUrl) setPhotoUrl(result.photoUrl);
        setPhotoFile(null);
        if (previewUrlRef.current) {
          URL.revokeObjectURL(previewUrlRef.current);
          previewUrlRef.current = null;
        }
      }

      // Password
      if (passwordTouched) {
        await api.changePassword({
          currentPassword: passwords.current,
          newPassword: passwords.newPassword,
        });
        setPasswords(EMPTY_PASSWORDS);
      }

      setFeedback({ type: "success", text: "Your changes have been saved." });
    } catch (error) {
      setFeedback({ type: "error", text: error.message });
    } finally {
      setSaving(false);
    }
  };

  const feedbackClass =
    feedback?.type === "error"
      ? "border-red-100 bg-red-50 text-red-700"
      : "border-pink-100 bg-pink-50 text-pink-700";

  /* ---------- render ---------- */
  return (
    <>
    
      <Navbar />
      
      
      <main className="min-h-screen bg-[#F6F8FB] px-4 py-8 sm:px-6 lg:px-[29px] lg:py-[43px]">
        <div className="mx-auto max-w-[1600px]">
          <header className="mb-8">
            <h1 className="text-[30px] font-bold leading-tight tracking-tight text-[#101D36] sm:text-[34px]">
              User Profile
            </h1>
            <p className="mt-1 text-base text-[#7185A4]">
              Manage your account and personal preferences.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-[22px]" noValidate={false}>
            {/* Profile information */}
            <section className="rounded-[13px] border border-[#DCE5F1] bg-white p-5 shadow-sm shadow-slate-200/20 sm:p-6">
              <SectionHeader
                icon={UserRound}
                title="Profile Information"
                subtitle="Update your personal details."
              />

              <div className="grid grid-cols-1 gap-7 lg:grid-cols-[290px_minmax(0,1fr)] lg:gap-10">
                {/* Photo */}
                <div className="flex flex-col items-center justify-center py-1">
                  {loading ? (
                    <Skeleton className="h-[150px] w-[150px] !rounded-full" />
                  ) : (
                    <div className="relative">
                      {photoUrl ? (
                        <img
                          src={photoUrl}
                          alt={`${profile.firstName} ${profile.lastName}`.trim() || "Profile"}
                          className="h-[150px] w-[150px] rounded-full border-4 border-white object-cover shadow-sm"
                        />
                      ) : (
                        <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full border-4 border-white bg-[#F1F5FA] text-4xl font-bold text-[#50698D] shadow-sm">
                          {initials || <UserRound size={56} strokeWidth={1.5} />}
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={saving}
                        aria-label="Upload profile photo"
                        className="absolute bottom-2 right-0 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-white bg-[#FF4081] text-white transition hover:bg-pink-600 disabled:opacity-60"
                      >
                        <Camera size={19} />
                      </button>
                    </div>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="hidden"
                  />

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={loading || saving}
                    className="mt-4 flex h-[43px] w-[180px] items-center justify-center gap-2 rounded-lg bg-[#F1F5FA] text-sm font-medium text-[#506789] transition hover:bg-pink-50 hover:text-pink-600 disabled:opacity-60"
                  >
                    <Camera size={18} />
                    Change photo
                  </button>
                </div>

                {/* Fields (rendered from config) */}
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                  {PROFILE_FIELDS.map((field) => (
                    <div
                      key={field.name}
                      className={`min-w-0 ${field.fullWidth ? "sm:col-span-2" : ""}`}
                    >
                      <label
                        htmlFor={field.name}
                        className="mb-1.5 block text-sm font-semibold text-[#506789]"
                      >
                        {field.label}
                      </label>

                      {loading ? (
                        <Skeleton className="h-[49px] w-full" />
                      ) : (
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          value={profile[field.name]}
                          onChange={handleProfileChange}
                          required={field.required}
                          readOnly={field.readOnly}
                          disabled={saving}
                          className={inputClass}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Change password (rendered from config) */}
            <section className="rounded-[13px] border border-[#DCE5F1] bg-white p-5 shadow-sm shadow-slate-200/20 sm:p-6">
              <SectionHeader
                icon={LockKeyhole}
                title="Change Password"
                subtitle="Keep your account secure with a strong password."
              />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {PASSWORD_FIELDS.map((field) => (
                  <PasswordField
                    key={field.name}
                    id={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                    value={passwords[field.name]}
                    onChange={handlePasswordChange}
                    disabled={loading || saving}
                  />
                ))}
              </div>
            </section>

            {/* Feedback */}
            {feedback && (
              <p
                role={feedback.type === "error" ? "alert" : "status"}
                className={`rounded-lg border px-4 py-3 text-sm ${feedbackClass}`}
              >
                {feedback.text}
              </p>
            )}

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="submit"
                disabled={loading || saving || !hasChanges}
                className="flex h-[45px] items-center justify-center gap-3 rounded-lg bg-[#FF4081] px-7 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? (
                  <Loader2 size={19} className="animate-spin" />
                ) : (
                  <Save size={19} />
                )}
                {saving ? "Saving..." : "Save changes"}
              </button>

              {hasChanges && !saving && (
                <button
                  type="button"
                  onClick={() => {
                    setProfile(savedProfile);
                    setPasswords(EMPTY_PASSWORDS);
                    setPhotoFile(null);
                    setFeedback(null);
                    loadProfile();
                  }}
                  className="h-[45px] rounded-lg bg-[#F1F5FA] px-6 text-sm font-medium text-[#506789] transition hover:bg-pink-50 hover:text-pink-600"
                >
                  Discard
                </button>
              )}
            </div>
          </form>
        </div>
      </main>

      <Footer />
      
    </>
  );
}

export default UserSettings;