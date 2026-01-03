import React, { useState } from "react";
import { Settings as SettingsIcon, Bell, Moon, Save } from "lucide-react";

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    weeklyReport: true,
  });

  const [theme, setTheme] = useState("light");

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

        <div className="space-y-6">
          {/* General Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <SettingsIcon className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-800">
                General Settings
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">Language</p>
                  <p className="text-sm text-gray-500">
                    Select your preferred language
                  </p>
                </div>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500">
                  <option>English (US)</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">Timezone</p>
                  <p className="text-sm text-gray-500">
                    Set your local timezone
                  </p>
                </div>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500">
                  <option>UTC-08:00 (Pacific Time)</option>
                  <option>UTC-05:00 (Eastern Time)</option>
                  <option>UTC+00:00 (GMT)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Bell className="w-6 h-6 text-green-600" />
              <h2 className="text-xl font-bold text-gray-800">Notifications</h2>
            </div>

            <div className="space-y-4">
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </p>
                    <p className="text-sm text-gray-500">
                      Receive {key.replace(/([A-Z])/g, " $1").toLowerCase()}{" "}
                      notifications
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setNotifications((prev) => ({ ...prev, [key]: !value }))
                    }
                    className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                      value ? "bg-green-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full transform transition-transform ${
                        value ? "translate-x-6" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Theme Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Moon className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-bold text-gray-800">Theme</h2>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {["light", "dark", "auto"].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setTheme(mode)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    theme === mode
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full mx-auto mb-2 ${
                      mode === "light"
                        ? "bg-yellow-300"
                        : mode === "dark"
                          ? "bg-gray-800"
                          : "bg-gradient-to-r from-gray-800 to-yellow-300"
                    }`}
                  />
                  <p className="font-medium capitalize">{mode}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90">
              <Save size={18} />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
