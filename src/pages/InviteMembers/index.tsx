import React from "react";
import { Users, Mail, Share2, Copy } from "lucide-react";

const InviteMembers: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Invite Members</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Invite Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Invite Team Members
              </h3>
              <p className="text-gray-500">
                Add members to collaborate on call campaigns
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Addresses
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
                placeholder="Enter email addresses separated by commas"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Role
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Agent (Make & Receive Calls)</option>
                <option>Manager (View Analytics & Reports)</option>
                <option>Admin (Full Access)</option>
              </select>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              <Mail className="w-5 h-5 inline mr-2" />
              Send Invitations
            </button>
          </div>
        </div>

        {/* Invite Link */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-green-100 rounded-lg">
              <Share2 className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Shareable Link
              </h3>
              <p className="text-gray-500">
                Anyone with this link can join your workspace
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-600 text-sm break-all">
                https://voiceai.app/invite/abc123xyz456
              </p>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                <Copy className="w-5 h-5 inline mr-2" />
                Copy Link
              </button>
              <button className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Generate New Link
              </button>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Link Settings</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded text-blue-600 mr-2"
                  />
                  <span className="text-gray-700">Allow unlimited invites</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded text-blue-600 mr-2"
                  />
                  <span className="text-gray-700">Expires in 7 days</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteMembers;
