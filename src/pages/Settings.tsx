import { useState } from "react";
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Palette,
  Shield,
  Check,
} from "lucide-react";

import DashboardLayout from "../components/layout/DashboardLayout";

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);
  const [activityAlerts, setActivityAlerts] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-5xl p-6 lg:p-8">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-black">
              <SettingsIcon size={21} />
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Settings
              </h1>

              <p className="mt-1 text-sm text-zinc-500">
                Manage your VANTA preferences.
              </p>
            </div>
          </div>
        </div>

        {/* Account */}
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800">
              <User size={18} />
            </div>

            <div>
              <h2 className="font-semibold">
                Account
              </h2>

              <p className="mt-1 text-xs text-zinc-600">
                Manage your account information.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            <div>
              <label className="text-xs text-zinc-500">
                Full Name
              </label>

              <input
                type="text"
                value="Ashish Gupta"
                readOnly
                className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-300 outline-none"
              />
            </div>

            <div>
              <label className="text-xs text-zinc-500">
                Role
              </label>

              <input
                type="text"
                value="Frontend Developer"
                readOnly
                className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-300 outline-none"
              />
            </div>

          </div>
        </section>

        {/* Notifications */}
        <section className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800">
              <Bell size={18} />
            </div>

            <div>
              <h2 className="font-semibold">
                Notifications
              </h2>

              <p className="mt-1 text-xs text-zinc-600">
                Control how VANTA notifies you.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">

            <SettingToggle
              title="Enable notifications"
              description="Receive notifications inside VANTA."
              enabled={notifications}
              onChange={() => setNotifications(!notifications)}
            />

            <SettingToggle
              title="Email updates"
              description="Receive important updates by email."
              enabled={emailUpdates}
              onChange={() => setEmailUpdates(!emailUpdates)}
            />

            <SettingToggle
              title="Activity alerts"
              description="Get alerts when important development activity occurs."
              enabled={activityAlerts}
              onChange={() => setActivityAlerts(!activityAlerts)}
            />

          </div>
        </section>

        {/* Appearance */}
        <section className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800">
              <Palette size={18} />
            </div>

            <div>
              <h2 className="font-semibold">
                Appearance
              </h2>

              <p className="mt-1 text-xs text-zinc-600">
                Customize how VANTA looks.
              </p>
            </div>
          </div>

          <div className="mt-6">

            <SettingToggle
              title="Dark mode"
              description="Use the dark interface across VANTA."
              enabled={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />

          </div>
        </section>

        {/* Privacy */}
        <section className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800">
              <Shield size={18} />
            </div>

            <div>
              <h2 className="font-semibold">
                Privacy
              </h2>

              <p className="mt-1 text-xs text-zinc-600">
                Control your profile visibility.
              </p>
            </div>
          </div>

          <div className="mt-6">

            <div className="flex items-center justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4">

              <div>
                <p className="text-sm font-medium text-zinc-300">
                  Public developer profile
                </p>

                <p className="mt-1 text-xs text-zinc-600">
                  Allow your developer profile to be visible.
                </p>
              </div>

              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-black">
                <Check size={15} />
              </div>

            </div>

          </div>
        </section>

        {/* Save */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => alert("Settings saved")}
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Save Changes
          </button>
        </div>

      </div>
    </DashboardLayout>
  );
}

interface SettingToggleProps {
  title: string;
  description: string;
  enabled: boolean;
  onChange: () => void;
}

function SettingToggle({
  title,
  description,
  enabled,
  onChange,
}: SettingToggleProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4">

      <div>
        <p className="text-sm font-medium text-zinc-300">
          {title}
        </p>

        <p className="mt-1 text-xs text-zinc-600">
          {description}
        </p>
      </div>

      <button
        onClick={onChange}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-all duration-200 ${
  enabled
    ? "bg-white shadow-lg shadow-white/10"
    : "bg-zinc-700"
}`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full transition ${
            enabled
              ? "left-6 bg-black"
              : "left-1 bg-zinc-400"
          }`}
        />
      </button>

    </div>
  );
}

export default Settings;