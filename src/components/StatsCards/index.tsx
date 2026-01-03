import React from "react";
import { Phone, PhoneCall, PhoneOff, PhoneIncoming, Clock } from "lucide-react";
import { StatsCard } from "../../types";

const StatsCards: React.FC = () => {
  const cards: StatsCard[] = [
    {
      title: "Total Calls",
      value: 1256,
      change: +12.5,
      icon: <Phone className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Calls Today",
      value: 48,
      change: +8.2,
      icon: <PhoneIncoming className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Currently Busy",
      value: 12,
      change: -3.1,
      icon: <PhoneOff className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Completed",
      value: 32,
      change: +15.7,
      icon: <PhoneCall className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Avg Duration",
      value: 4.23,
      change: -1.2,
      icon: <Clock className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg bg-gradient-to-br ${card.color}`}>
              <div className="text-white">{card.icon}</div>
            </div>
            <span
              className={`text-sm font-medium px-2 py-1 rounded-full ${
                card.change >= 0
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {card.change >= 0 ? "+" : ""}
              {card.change}%
            </span>
          </div>

          <h3 className="text-3xl font-bold text-gray-800 mb-1">
            {card.title === "Avg Duration"
              ? `${card.value}m`
              : card.value.toLocaleString()}
          </h3>
          <p className="text-gray-500">{card.title}</p>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center text-sm text-gray-500">
              <span
                className={card.change >= 0 ? "text-green-600" : "text-red-600"}
              >
                {card.change >= 0 ? "↑" : "↓"} {Math.abs(card.change)}% from
                yesterday
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
