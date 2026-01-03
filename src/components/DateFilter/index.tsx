import React, { useState } from "react";
import { Calendar, ChevronDown, TrendingUp, BarChart3 } from "lucide-react";
import {
  format,
  startOfDay,
  endOfDay,
  subDays,
  startOfMonth,
  endOfMonth,
} from "date-fns";

interface DateFilterProps {
  onFilterChange: (range: { start: Date; end: Date }) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("today");
  const [isCustomOpen, setIsCustomOpen] = useState(false);
  const [customStart, setCustomStart] = useState<Date>(new Date());
  const [customEnd, setCustomEnd] = useState<Date>(new Date());

  const filters = [
    { id: "today", label: "Today" },
    { id: "yesterday", label: "Yesterday" },
    { id: "last7", label: "Last 7 Days" },
    { id: "last30", label: "Last 30 Days" },
    { id: "month", label: "This Month" },
    { id: "custom", label: "Custom Range" },
  ];

  const handleFilterSelect = (filterId: string) => {
    setSelectedFilter(filterId);
    let start = new Date();
    let end = new Date();

    switch (filterId) {
      case "today":
        start = startOfDay(new Date());
        end = endOfDay(new Date());
        break;
      case "yesterday":
        start = startOfDay(subDays(new Date(), 1));
        end = endOfDay(subDays(new Date(), 1));
        break;
      case "last7":
        start = subDays(new Date(), 7);
        end = new Date();
        break;
      case "last30":
        start = subDays(new Date(), 30);
        end = new Date();
        break;
      case "month":
        start = startOfMonth(new Date());
        end = endOfMonth(new Date());
        break;
      case "custom":
        setIsCustomOpen(true);
        return;
    }

    onFilterChange({ start, end });
  };

  const handleCustomApply = () => {
    onFilterChange({ start: customStart, end: customEnd });
    setIsCustomOpen(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-bold text-gray-800">Call Analytics</h3>
          </div>
          <div className="flex items-center space-x-2 text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">+12.5% from last month</span>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-gray-500" />
            <div className="flex items-center space-x-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => handleFilterSelect(filter.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedFilter === filter.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {isCustomOpen && (
            <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-10">
              <div className="flex items-center space-x-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={format(customStart, "yyyy-MM-dd")}
                    onChange={(e) => setCustomStart(new Date(e.target.value))}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={format(customEnd, "yyyy-MM-dd")}
                    onChange={(e) => setCustomEnd(new Date(e.target.value))}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setIsCustomOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCustomApply}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-4 text-sm text-gray-600">
        <span>Showing data for: </span>
        <span className="font-medium text-gray-800">
          {selectedFilter === "custom"
            ? `${format(customStart, "MMM d, yyyy")} - ${format(customEnd, "MMM d, yyyy")}`
            : filters.find((f) => f.id === selectedFilter)?.label}
        </span>
      </div>
    </div>
  );
};

export default DateFilter;
