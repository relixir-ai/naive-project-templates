"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

/* PLACEHOLDER — Update tab labels and content for your app's settings */
const TABS = [
  { key: "profile", label: "Profile" },
  { key: "security", label: "Security" },
  { key: "notifications", label: "Notifications" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

/* PLACEHOLDER — Notification preferences for your app */
const NOTIFICATION_OPTIONS = [
  {
    id: "email_updates",
    label: "Product updates",
    description: "News about features and improvements.",
    defaultChecked: true,
  },
  {
    id: "email_security",
    label: "Security alerts",
    description: "Alerts about account activity and security.",
    defaultChecked: true,
  },
  {
    id: "email_marketing",
    label: "Marketing emails",
    description: "Tips, offers, and product recommendations.",
    defaultChecked: false,
  },
];

export default function SettingsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabKey>("profile");

  /* Profile state */
  const [displayName, setDisplayName] = useState("");
  const [profileSaving, setProfileSaving] = useState(false);
  const [profileMessage, setProfileMessage] = useState<string | null>(null);

  /* Security state */
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [securitySaving, setSecuritySaving] = useState(false);
  const [securityMessage, setSecurityMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  /* Notifications state */
  const [notificationPrefs, setNotificationPrefs] = useState<
    Record<string, boolean>
  >(
    Object.fromEntries(
      NOTIFICATION_OPTIONS.map((opt) => [opt.id, opt.defaultChecked])
    )
  );
  const [notifSaving, setNotifSaving] = useState(false);
  const [notifMessage, setNotifMessage] = useState<string | null>(null);

  /* ─── Profile Handlers ─── */

  async function handleProfileSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setProfileSaving(true);
    setProfileMessage(null);

    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({
      data: { display_name: displayName },
    });

    if (error) {
      setProfileMessage(error.message);
    } else {
      setProfileMessage("Profile updated successfully.");
      router.refresh();
    }
    setProfileSaving(false);
  }

  /* ─── Security Handlers ─── */

  async function handlePasswordChange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSecurityMessage(null);

    if (newPassword !== confirmNewPassword) {
      setSecurityMessage({ type: "error", text: "Passwords do not match." });
      return;
    }

    if (newPassword.length < 8) {
      setSecurityMessage({
        type: "error",
        text: "Password must be at least 8 characters.",
      });
      return;
    }

    if (!currentPassword) {
      setSecurityMessage({
        type: "error",
        text: "Please enter your current password.",
      });
      return;
    }

    setSecuritySaving(true);

    const supabase = createClient();

    // Re-authenticate with current password before allowing change
    const { data: { user } } = await supabase.auth.getUser();
    if (!user?.email) {
      setSecurityMessage({ type: "error", text: "Unable to verify identity." });
      setSecuritySaving(false);
      return;
    }

    const { error: reAuthError } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: currentPassword,
    });

    if (reAuthError) {
      setSecurityMessage({ type: "error", text: "Current password is incorrect." });
      setSecuritySaving(false);
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      setSecurityMessage({ type: "error", text: "Failed to update password. Please try again." });
    } else {
      setSecurityMessage({
        type: "success",
        text: "Password updated successfully.",
      });
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
    }
    setSecuritySaving(false);
  }

  /* ─── Notification Handlers ─── */

  async function handleNotifSave() {
    setNotifSaving(true);
    setNotifMessage(null);

    /* PLACEHOLDER — Save notification prefs to your database */
    await new Promise((resolve) => setTimeout(resolve, 500));

    setNotifMessage("Preferences saved.");
    setNotifSaving(false);
  }

  /* ─── Input class helper ─── */

  const inputClass =
    "w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-primary placeholder:text-muted focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-gradient">
          Settings
        </h1>
        <p className="mt-1 text-sm text-secondary">
          Manage your account preferences and security.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-border">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
              activeTab === tab.key
                ? "border-accent text-primary"
                : "border-transparent text-muted hover:text-secondary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="glass-card rounded-xl p-6 max-w-xl">
        {/* ─── Profile Tab ─── */}
        {activeTab === "profile" && (
          <form onSubmit={handleProfileSave} className="space-y-5">
            <div>
              <h2 className="font-heading text-base font-semibold text-primary mb-1">
                Profile Information
              </h2>
              <p className="text-xs text-muted">
                Update your display name and public information.
              </p>
            </div>

            <div>
              <label
                htmlFor="displayName"
                className="block text-xs font-medium text-secondary mb-1.5"
              >
                Display name
              </label>
              <input
                id="displayName"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className={inputClass}
                placeholder="Your name"
              />
            </div>

            {profileMessage && (
              <p className="text-xs text-accent">{profileMessage}</p>
            )}

            <button
              type="submit"
              disabled={profileSaving}
              className="accent-gradient btn-shine text-background text-sm font-medium px-5 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {profileSaving ? "Saving..." : "Save changes"}
            </button>
          </form>
        )}

        {/* ─── Security Tab ─── */}
        {activeTab === "security" && (
          <form onSubmit={handlePasswordChange} className="space-y-5">
            <div>
              <h2 className="font-heading text-base font-semibold text-primary mb-1">
                Change Password
              </h2>
              <p className="text-xs text-muted">
                Update your password to keep your account secure.
              </p>
            </div>

            <div>
              <label
                htmlFor="currentPassword"
                className="block text-xs font-medium text-secondary mb-1.5"
              >
                Current password
              </label>
              <input
                id="currentPassword"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className={inputClass}
                placeholder="Enter current password"
              />
            </div>

            <div>
              <label
                htmlFor="newPassword"
                className="block text-xs font-medium text-secondary mb-1.5"
              >
                New password
              </label>
              <input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className={inputClass}
                placeholder="At least 8 characters"
              />
            </div>

            <div>
              <label
                htmlFor="confirmNewPassword"
                className="block text-xs font-medium text-secondary mb-1.5"
              >
                Confirm new password
              </label>
              <input
                id="confirmNewPassword"
                type="password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                className={inputClass}
                placeholder="Re-enter new password"
              />
            </div>

            {securityMessage && (
              <div
                className={`rounded-lg border px-4 py-2.5 text-sm ${
                  securityMessage.type === "error"
                    ? "border-danger/20 bg-danger/5 text-danger"
                    : "border-success/20 bg-success/5 text-success"
                }`}
              >
                {securityMessage.text}
              </div>
            )}

            <button
              type="submit"
              disabled={securitySaving}
              className="accent-gradient btn-shine text-background text-sm font-medium px-5 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {securitySaving ? "Updating..." : "Update password"}
            </button>
          </form>
        )}

        {/* ─── Notifications Tab ─── */}
        {activeTab === "notifications" && (
          <div className="space-y-5">
            <div>
              <h2 className="font-heading text-base font-semibold text-primary mb-1">
                Email Notifications
              </h2>
              <p className="text-xs text-muted">
                Choose which emails you would like to receive.
              </p>
            </div>

            <div className="space-y-4">
              {NOTIFICATION_OPTIONS.map((option) => {
                const checked = notificationPrefs[option.id] ?? false;
                return (
                  <label
                    key={option.id}
                    className="flex items-start gap-3 cursor-pointer group"
                  >
                    <div className="relative mt-0.5">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) =>
                          setNotificationPrefs((prev) => ({
                            ...prev,
                            [option.id]: e.target.checked,
                          }))
                        }
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded border transition-colors flex items-center justify-center ${
                          checked
                            ? "bg-accent border-accent"
                            : "bg-surface border-border"
                        }`}
                      >
                        <svg
                          className={`w-2.5 h-2.5 text-background transition-opacity ${
                            checked ? "opacity-100" : "opacity-0"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-primary font-medium group-hover:text-accent transition-colors">
                        {option.label}
                      </p>
                      <p className="text-xs text-muted mt-0.5">
                        {option.description}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>

            {notifMessage && (
              <p className="text-xs text-accent">{notifMessage}</p>
            )}

            <button
              onClick={handleNotifSave}
              disabled={notifSaving}
              className="accent-gradient btn-shine text-background text-sm font-medium px-5 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {notifSaving ? "Saving..." : "Save preferences"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
