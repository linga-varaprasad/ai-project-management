import { Clock, CheckCircle2, AlertCircle } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "completion",
    title: "Website Redesign",
    time: "2 hours ago",
    icon: CheckCircle2,
    iconColor: "text-success",
  },
  {
    id: 2,
    type: "deadline",
    title: "Client Meeting",
    time: "4 hours ago",
    icon: Clock,
    iconColor: "text-warning",
  },
  {
    id: 3,
    type: "alert",
    title: "Server Maintenance",
    time: "6 hours ago",
    icon: AlertCircle,
    iconColor: "text-destructive",
  },
];

export const ActivityTimeline = () => {
  return (
    <div className="bg-white rounded-xl border p-6">
      <h2 className="text-lg font-semibold mb-4">Activity Timeline</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <activity.icon className={`h-5 w-5 mt-0.5 ${activity.iconColor}`} />
            <div>
              <p className="font-medium">{activity.title}</p>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};