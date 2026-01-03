import React, { useState } from "react";
import {
  Phone,
  MessageSquare,
  Video,
  MoreVertical,
  Clock,
  User,
} from "lucide-react";
import CallInterface from "../CallInterface";

interface CallInterfaceCardProps {
  call: {
    id: string;
    callerName: string;
    phoneNumber: string;
    duration: string;
    status: "completed" | "busy" | "missed" | "in-progress";
    timestamp: string;
  };
}

const CallInterfaceCard: React.FC<CallInterfaceCardProps> = ({ call }) => {
  const [showCallInterface, setShowCallInterface] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "busy":
        return "bg-yellow-100 text-yellow-800";
      case "missed":
        return "bg-red-100 text-red-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (showCallInterface) {
    return (
      <CallInterface
        callId={call.id}
        onClose={() => setShowCallInterface(false)}
      />
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">{call.callerName}</h3>
            <p className="text-gray-500 text-sm">{call.phoneNumber}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
              call.status
            )}`}
          >
            {call.status.replace("-", " ").toUpperCase()}
          </span>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <MoreVertical className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{call.duration}</span>
          </div>
          <span>{call.timestamp}</span>
        </div>
      </div>

      <div className="flex space-x-3">
        <button
          onClick={() => setShowCallInterface(true)}
          className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg hover:opacity-90"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="font-medium">View Chat</span>
        </button>

        <button className="flex-1 flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50">
          <Phone className="w-4 h-4" />
          <span className="font-medium">Call Back</span>
        </button>

        <button className="p-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
          <Video className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center">
            <p className="text-sm text-gray-500">Sentiment</p>
            <p className="font-medium text-green-600">Positive</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Resolved</p>
            <p className="font-medium text-blue-600">Yes</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Follow-up</p>
            <p className="font-medium text-purple-600">Needed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallInterfaceCard;
