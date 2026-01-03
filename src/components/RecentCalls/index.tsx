import React from "react";
import { Call } from "../../types";
import { Phone, CheckCircle, XCircle, Clock, MoreVertical } from "lucide-react";

interface RecentCallsProps {
  calls: Call[];
}

const RecentCalls: React.FC<RecentCallsProps> = ({ calls }) => {
  const getStatusIcon = (status: Call["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "busy":
        return <XCircle className="w-4 h-4 text-yellow-500" />;
      case "missed":
        return <XCircle className="w-4 h-4 text-red-500" />;
      case "in-progress":
        return <Clock className="w-4 h-4 text-blue-500" />;
    }
  };

  const getStatusColor = (status: Call["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "busy":
        return "bg-yellow-100 text-yellow-800";
      case "missed":
        return "bg-red-100 text-red-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Recent Calls</h2>
          <p className="text-gray-500">Last 5 calls from your AI assistant</p>
        </div>
        <button className="text-blue-600 hover:text-blue-800 font-medium">
          View All →
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-gray-600 font-medium">
                Caller
              </th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">
                Phone Number
              </th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">
                Duration
              </th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">
                Status
              </th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">
                Time
              </th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {calls.map((call) => (
              <tr
                key={call.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        {call.callerName}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-600">{call.phoneNumber}</td>
                <td className="py-4 px-4">
                  <span className="font-medium text-gray-800">
                    {call.duration}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    {getStatusIcon(call.status)}
                    <span
                      className={`ml-2 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(call.status)}`}
                    >
                      {call.status.replace("-", " ").toUpperCase()}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-600">{call.timestamp}</td>
                <td className="py-4 px-4">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical className="w-4 h-4 text-gray-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentCalls;
