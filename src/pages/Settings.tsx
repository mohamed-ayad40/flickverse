import React, { useState } from "react";
import {
  FaUser,
  FaBell,
  FaLock,
  FaPalette,
  FaGlobe,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Settings: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Settings</h1>

      {/* Account Settings */}
      <div className="bg-white rounded-lg p-6 mb-6 border-4 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
        <div className="flex items-center mb-4">
          <FaUser className="text-indigo-500 mr-3" />
          <h2 className="text-lg font-semibold text-gray-900">
            Account Settings
          </h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Username</h3>
              <p className="text-sm text-gray-500">Change your display name</p>
            </div>
            <button className="bg-white text-indigo-500 hover:text-indigo-600 text-sm font-medium border border-indigo-500 px-4 py-2 rounded-md hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md active:scale-95">
              Edit
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Email</h3>
              <p className="text-sm text-gray-500">Update your email address</p>
            </div>
            <button className="bg-white text-indigo-500 hover:text-indigo-600 text-sm font-medium border border-indigo-500 px-4 py-2 rounded-md hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md active:scale-95">
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-lg p-6 mb-6 border-4 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
        <div className="flex items-center mb-4">
          <FaBell className="text-indigo-500 mr-3" />
          <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Push Notifications
              </h3>
              <p className="text-sm text-gray-500">
                Receive notifications for new messages
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all duration-300 peer-checked:bg-indigo-500"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Email Notifications
              </h3>
              <p className="text-sm text-gray-500">Receive email updates</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all duration-300 peer-checked:bg-indigo-500"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Privacy */}
      <div className="bg-white rounded-lg p-6 mb-6 border-4 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
        <div className="flex items-center mb-4">
          <FaLock className="text-indigo-500 mr-3" />
          <h2 className="text-lg font-semibold text-gray-900">Privacy</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Profile Visibility
              </h3>
              <p className="text-sm text-gray-500">
                Control who can see your profile
              </p>
            </div>
            <select className="bg-white text-sm border border-gray-200 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:border-indigo-300 hover:shadow-sm">
              <option>Public</option>
              <option>Friends Only</option>
              <option>Private</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Message Requests
              </h3>
              <p className="text-sm text-gray-500">Who can send you messages</p>
            </div>
            <select className="bg-white text-sm border border-gray-200 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:border-indigo-300 hover:shadow-sm">
              <option>Everyone</option>
              <option>Friends Only</option>
              <option>No One</option>
            </select>
          </div>
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-white rounded-lg p-6 mb-6 border-4 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
        <div className="flex items-center mb-4">
          <FaPalette className="text-indigo-500 mr-3" />
          <h2 className="text-lg font-semibold text-gray-900">Appearance</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Theme</h3>
              <p className="text-sm text-gray-500">
                Choose your preferred theme
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setDarkMode(false)}
                className={`p-2 rounded-md bg-white transition-all duration-300 transform hover:scale-110 active:scale-95 ${
                  !darkMode
                    ? "border-2 border-indigo-500 shadow-md"
                    : "border border-gray-200 hover:border-indigo-300"
                }`}
              >
                <FaSun
                  className={`text-lg transition-colors duration-300 ${
                    !darkMode ? "text-indigo-500" : "text-gray-500"
                  }`}
                />
              </button>
              <button
                onClick={() => setDarkMode(true)}
                className={`p-2 rounded-md bg-white transition-all duration-300 transform hover:scale-110 active:scale-95 ${
                  darkMode
                    ? "border-2 border-indigo-500 shadow-md"
                    : "border border-gray-200 hover:border-indigo-300"
                }`}
              >
                <FaMoon
                  className={`text-lg transition-colors duration-300 ${
                    darkMode ? "text-indigo-500" : "text-gray-500"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Language & Region */}
      <div className="bg-white rounded-lg p-6 border-4 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
        <div className="flex items-center mb-4">
          <FaGlobe className="text-indigo-500 mr-3" />
          <h2 className="text-lg font-semibold text-gray-900">
            Language & Region
          </h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Language</h3>
              <p className="text-sm text-gray-500">
                Choose your preferred language
              </p>
            </div>
            <select className="bg-white text-sm border border-gray-200 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:border-indigo-300 hover:shadow-sm">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Time Zone</h3>
              <p className="text-sm text-gray-500">Set your local time zone</p>
            </div>
            <select className="bg-white text-sm border border-gray-200 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:border-indigo-300 hover:shadow-sm">
              <option>UTC+0</option>
              <option>UTC+1</option>
              <option>UTC+2</option>
              <option>UTC+3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
