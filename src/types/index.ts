export interface Call {
  id: string;
  callerName: string;
  phoneNumber: string;
  duration: string;
  status: "completed" | "busy" | "missed" | "in-progress";
  timestamp: string;
  date: Date;
}

export interface StatsCard {
  title: string;
  value: number;
  change: number;
  icon: React.ReactNode;
  color: string;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

export interface DateRange {
  startDate: Date;
  endDate: Date;
}
