import React, { useState } from "react";
import StatsCards from "../../components/StatsCards";
import RecentCalls from "../../components/RecentCalls";
import DateFilter from "../../components/DateFilter";
import { callsData } from "../../data";

const Dashboard: React.FC = () => {
  const [filteredCalls, setFilteredCalls] = useState(callsData.slice(0, 3));

  const handleFilterChange = (range: { start: Date; end: Date }) => {
    // Filter calls based on date range
    const filtered = callsData
      .filter((call) => call.date >= range.start && call.date <= range.end)
      .slice(0, 3);
    setFilteredCalls(filtered);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Date Filter */}
      <DateFilter onFilterChange={handleFilterChange} />

      {/* Stats Cards */}
      <StatsCards />

      {/* Charts and Recent Calls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Call Analytics Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-6">
            Call Volume Trend
          </h3>
          <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <p className="text-gray-600 mb-2">Call analytics chart</p>
              <p className="text-sm text-gray-500">
                Showing daily call volume for selected period
              </p>
            </div>
          </div>
        </div>

        {/* Call Status Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-6">
            Call Status Distribution
          </h3>
          <div className="space-y-4">
            {[
              { label: "Completed", value: 65, color: "bg-green-500" },
              { label: "Busy", value: 15, color: "bg-yellow-500" },
              { label: "Missed", value: 12, color: "bg-red-500" },
              { label: "In Progress", value: 8, color: "bg-blue-500" },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700">{item.label}</span>
                  <span className="font-medium">{item.value}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Calls Table */}
      <div className="mt-6">
        <RecentCalls calls={filteredCalls} />
      </div>

      {/* Quick Actions */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <h4 className="font-bold text-lg mb-2">Start New Call Campaign</h4>
          <p className="text-blue-100 mb-4">
            Schedule automated calls to your contacts
          </p>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50">
            Create Campaign
          </button>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <h4 className="font-bold text-lg mb-2">Generate Call Reports</h4>
          <p className="text-purple-100 mb-4">
            Download detailed analytics and insights
          </p>
          <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50">
            Export Report
          </button>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <h4 className="font-bold text-lg mb-2">AI Voice Settings</h4>
          <p className="text-green-100 mb-4">
            Customize your AI assistant's voice and responses
          </p>
          <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50">
            Configure AI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
