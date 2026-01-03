import { Call } from "../types";

export const callsData: Call[] = [
  {
    id: "1",
    callerName: "John Smith",
    phoneNumber: "+1 (555) 123-4567",
    duration: "5:24",
    status: "completed",
    timestamp: "10:30 AM",
    date: new Date(2024, 0, 15),
  },
  {
    id: "2",
    callerName: "Sarah Johnson",
    phoneNumber: "+1 (555) 987-6543",
    duration: "3:15",
    status: "busy",
    timestamp: "11:15 AM",
    date: new Date(2024, 0, 15),
  },
  {
    id: "3",
    callerName: "Michael Chen",
    phoneNumber: "+1 (555) 456-7890",
    duration: "7:42",
    status: "completed",
    timestamp: "2:45 PM",
    date: new Date(2024, 0, 15),
  },
  {
    id: "4",
    callerName: "Emma Wilson",
    phoneNumber: "+1 (555) 234-5678",
    duration: "2:18",
    status: "missed",
    timestamp: "9:15 AM",
    date: new Date(2024, 0, 14),
  },
  {
    id: "5",
    callerName: "Robert Davis",
    phoneNumber: "+1 (555) 876-5432",
    duration: "6:33",
    status: "in-progress",
    timestamp: "4:20 PM",
    date: new Date(2024, 0, 14),
  },
];

export const statsData = {
  totalCalls: 1256,
  callsToday: 48,
  busyCalls: 12,
  completedCalls: 32,
  avgCallDuration: "4:23",
};
