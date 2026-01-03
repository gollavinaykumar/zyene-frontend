import React from "react";
import { NavLink } from "react-router-dom";
import { MenuItem } from "../../types";
import {
  LayoutDashboard,
  Users,
  User,
  Settings,
  Shield,
  LogOut,
} from "lucide-react";

const menuItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    path: "/",
  },
  {
    id: "invite",
    label: "Invite Members",
    icon: <Users size={20} />,
    path: "/invite",
  },
  {
    id: "profile",
    label: "Profile",
    icon: <User size={20} />,
    path: "/profile",
  },
  {
    id: "settings",
    label: "Settings",
    icon: <Settings size={20} />,
    path: "/settings",
  },
  { id: "roles", label: "Roles", icon: <Shield size={20} />, path: "/roles" },
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <i className="fas fa-robot text-white text-lg"></i>
          </div>
          <div>
            <h1 className="text-xl font-bold">VoiceAI</h1>
            <p className="text-gray-400 text-sm">Call Assistant</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-300 hover:bg-gray-800"
              }`
            }
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
            <span className="font-bold">AD</span>
          </div>
          <div className="flex-1">
            <p className="font-medium">Admin User</p>
            <p className="text-gray-400 text-sm">admin@voiceai.com</p>
          </div>
          <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
