import React from "react";
import { Shield, UserCheck, UserX, Edit, Trash2, Plus } from "lucide-react";

const Roles: React.FC = () => {
  const roles = [
    {
      id: 1,
      name: "Administrator",
      description: "Full access to all features and settings",
      permissions: ["All Permissions"],
      users: 3,
      color: "bg-red-100 text-red-800",
    },
    {
      id: 2,
      name: "Manager",
      description: "Can view analytics and manage team members",
      permissions: ["View Analytics", "Manage Team", "Create Reports"],
      users: 12,
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: 3,
      name: "Agent",
      description: "Can make and receive calls",
      permissions: ["Make Calls", "Receive Calls", "View Own Stats"],
      users: 45,
      color: "bg-green-100 text-green-800",
    },
    {
      id: 4,
      name: "Viewer",
      description: "Can only view analytics and reports",
      permissions: ["View Analytics", "View Reports"],
      users: 8,
      color: "bg-purple-100 text-purple-800",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Roles & Permissions
            </h1>
            <p className="text-gray-500">
              Manage user roles and permissions for your team
            </p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90">
            <Plus size={18} />
            <span>Add New Role</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <div className="flex items-center space-x-3 mb-4">
              <UserCheck size={24} />
              <h3 className="text-lg font-bold">Active Users</h3>
            </div>
            <p className="text-3xl font-bold mb-2">68</p>
            <p className="text-blue-100">
              Total team members with active roles
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-center space-x-3 mb-4">
              <UserX size={24} />
              <h3 className="text-lg font-bold">Pending Invites</h3>
            </div>
            <p className="text-3xl font-bold mb-2">5</p>
            <p className="text-purple-100">Users waiting for role assignment</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-gray-700" />
              <h2 className="text-xl font-bold text-gray-800">
                Available Roles
              </h2>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {roles.map((role) => (
              <div key={role.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-800">
                        {role.name}
                      </h3>
                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full ${role.color}`}
                      >
                        {role.users} Users
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{role.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {role.permissions.map((permission, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg"
                        >
                          {permission}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                      <Edit size={18} />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
