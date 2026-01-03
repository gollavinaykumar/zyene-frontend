import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Shield,
  Globe,
  Smartphone,
  Camera,
  Upload,
  CheckCircle,
  Award,
  Clock,
  Activity,
  Save,
  Bell,
  Lock,
  CreditCard,
  Database,
  Zap,
  Download,
  Eye,
  EyeOff,
} from "lucide-react";

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  const [showPassword, setShowPassword] = useState(false);

  const [userData, setUserData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@voiceai.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    role: "Senior AI Voice Analyst",
    department: "Customer Success",
    joinDate: "March 15, 2022",
    bio: "AI Voice specialist with 5+ years experience in conversational AI and voice analytics. Passionate about improving customer experience through intelligent voice solutions.",
  });

  const [stats] = useState({
    totalCalls: 2548,
    avgRating: 4.8,
    avgResponseTime: "2.3s",
    satisfactionScore: 94,
    activeProjects: 12,
    teamMembers: 24,
  });

  const [security] = useState({
    twoFactorEnabled: true,
    lastLogin: "2 hours ago",
    devices: ["MacBook Pro", "iPhone 13", "Windows Desktop"],
    sessions: 3,
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Uploading file:", file.name);
      // Handle file upload logic here
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Profile Settings
          </h1>
          <p className="text-gray-600">
            Manage your personal information and account settings
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Profile Card & Tabs */}
          <div className="lg:w-1/3 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <User className="w-16 h-16 text-white" />
                  </div>
                  <label className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-50">
                    <Camera className="w-5 h-5 text-gray-700" />
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>

                <h2 className="text-2xl font-bold text-gray-900">
                  {userData.name}
                </h2>
                <p className="text-purple-600 font-medium">{userData.role}</p>
                <p className="text-gray-500 text-sm mt-1">
                  {userData.department}
                </p>

                <div className="flex items-center space-x-2 mt-3">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    Pro Plan
                  </span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <Activity className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-600">Total Calls</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.totalCalls.toLocaleString()}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Rating</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.avgRating}/5.0
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span className="text-sm text-gray-600">Response Time</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.avgResponseTime}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm text-gray-600">Score</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.satisfactionScore}%
                  </p>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="space-y-2">
                {[
                  { id: "personal", label: "Personal Info", icon: User },
                  { id: "security", label: "Security", icon: Lock },
                  { id: "notifications", label: "Notifications", icon: Bell },
                  { id: "billing", label: "Billing", icon: CreditCard },
                  { id: "data", label: "Data & Privacy", icon: Database },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border border-blue-100"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <span className="font-medium text-gray-700">
                    Download Data
                  </span>
                  <Download className="w-5 h-5 text-gray-500" />
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <span className="font-medium text-gray-700">
                    Export Reports
                  </span>
                  <Upload className="w-5 h-5 text-gray-500" />
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <span className="font-medium text-gray-700">
                    View Activity Log
                  </span>
                  <Activity className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Content Area */}
          <div className="lg:w-2/3">
            {/* Personal Information Tab */}
            {activeTab === "personal" && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Personal Information
                    </h2>
                    <p className="text-gray-600">
                      Update your personal details and preferences
                    </p>
                  </div>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90"
                  >
                    {isEditing ? (
                      <Save className="w-4 h-4" />
                    ) : (
                      <Edit className="w-4 h-4" />
                    )}
                    <span>{isEditing ? "Save Changes" : "Edit Profile"}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={userData.name}
                        onChange={(e) =>
                          setUserData({ ...userData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                        <User className="w-5 h-5 text-gray-500" />
                        <span className="font-medium">{userData.name}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={userData.email}
                        onChange={(e) =>
                          setUserData({ ...userData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                        <Mail className="w-5 h-5 text-gray-500" />
                        <span className="font-medium">{userData.email}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={userData.phone}
                        onChange={(e) =>
                          setUserData({ ...userData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                        <Phone className="w-5 h-5 text-gray-500" />
                        <span className="font-medium">{userData.phone}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={userData.location}
                        onChange={(e) =>
                          setUserData({ ...userData, location: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                        <MapPin className="w-5 h-5 text-gray-500" />
                        <span className="font-medium">{userData.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Role and Department */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Role
                    </label>
                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">{userData.role}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department
                    </label>
                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                      <Globe className="w-5 h-5 text-purple-600" />
                      <span className="font-medium">{userData.department}</span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bio
                  </label>
                  {isEditing ? (
                    <textarea
                      value={userData.bio}
                      onChange={(e) =>
                        setUserData({ ...userData, bio: e.target.value })
                      }
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <p className="text-gray-700">{userData.bio}</p>
                    </div>
                  )}
                </div>

                {/* Member Since */}
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">Member Since</p>
                    <p className="font-medium text-gray-900">
                      {userData.joinDate}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Security Settings
                </h2>

                <div className="space-y-6">
                  {/* Password */}
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                    <h3 className="font-bold text-gray-900 mb-4">Password</h3>
                    <div className="space-y-4">
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                            placeholder="Enter current password"
                          />
                          <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter new password"
                        />
                      </div>
                      <button className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:opacity-90">
                        Update Password
                      </button>
                    </div>
                  </div>

                  {/* Two-Factor Authentication */}
                  <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">
                          Two-Factor Authentication
                        </h3>
                        <p className="text-gray-600">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            security.twoFactorEnabled
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {security.twoFactorEnabled ? "Enabled" : "Disabled"}
                        </span>
                        <button
                          className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                            security.twoFactorEnabled
                              ? "bg-green-500"
                              : "bg-gray-300"
                          }`}
                        >
                          <div
                            className={`bg-white w-4 h-4 rounded-full transform transition-transform ${
                              security.twoFactorEnabled
                                ? "translate-x-6"
                                : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Active Sessions */}
                  <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                    <h3 className="font-bold text-gray-900 mb-4">
                      Active Sessions ({security.sessions})
                    </h3>
                    <div className="space-y-4">
                      {security.devices.map((device, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-white rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <Smartphone className="w-5 h-5 text-gray-500" />
                            <div>
                              <p className="font-medium text-gray-900">
                                {device}
                              </p>
                              <p className="text-sm text-gray-500">
                                Last active: {security.lastLogin}
                              </p>
                            </div>
                          </div>
                          <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                            Revoke
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Notification Preferences
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      title: "Email Notifications",
                      desc: "Receive notifications via email",
                    },
                    {
                      title: "Push Notifications",
                      desc: "Receive push notifications on your devices",
                    },
                    {
                      title: "SMS Alerts",
                      desc: "Get important alerts via SMS",
                    },
                    {
                      title: "Weekly Reports",
                      desc: "Receive weekly analytics reports",
                    },
                    {
                      title: "Team Updates",
                      desc: "Get notified about team activities",
                    },
                    {
                      title: "System Alerts",
                      desc: "Receive system maintenance alerts",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                    >
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                      <button className="w-12 h-6 flex items-center bg-blue-500 rounded-full p-1">
                        <div className="bg-white w-4 h-4 rounded-full transform translate-x-6" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === "billing" && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Billing & Subscription
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                    <h3 className="font-bold text-lg mb-2">Current Plan</h3>
                    <p className="text-3xl font-bold mb-2">Pro Plan</p>
                    <p className="text-blue-100">$49/month</p>
                    <button className="mt-4 px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50">
                      Upgrade Plan
                    </button>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                    <h3 className="font-bold text-lg mb-2">Next Billing</h3>
                    <p className="text-3xl font-bold mb-2">May 15, 2024</p>
                    <p className="text-purple-100">Auto-renew enabled</p>
                    <button className="mt-4 px-4 py-2 bg-white text-purple-600 rounded-lg font-medium hover:bg-purple-50">
                      Manage Billing
                    </button>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Payment Methods
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            Visa •••• 4242
                          </p>
                          <p className="text-sm text-gray-500">Expires 08/25</p>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Data & Privacy Tab */}
            {activeTab === "data" && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Data & Privacy
                </h2>

                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Data Export
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Download a copy of your personal data
                    </p>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      <Download className="w-5 h-5" />
                      <span>Export My Data</span>
                    </button>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-red-50 to-red-100 rounded-xl">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Account Deletion
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Permanently delete your account and all associated data
                    </p>
                    <button className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
