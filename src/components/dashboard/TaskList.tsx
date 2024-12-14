import { CheckCircle2, Clock } from "lucide-react";

const tasks = [
  { id: 1, title: "Update landing page", status: "completed", date: "Today" },
  { id: 2, title: "Design new features", status: "pending", date: "Tomorrow" },
  { id: 3, title: "Review pull requests", status: "pending", date: "Today" },
];

export const TaskList = () => {
  return (
    <div className="bg-white rounded-xl border p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Tasks</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {task.status === "completed" ? (
                <CheckCircle2 className="h-5 w-5 text-success" />
              ) : (
                <Clock className="h-5 w-5 text-warning" />
              )}
              <span className={task.status === "completed" ? "line-through text-gray-500" : ""}>
                {task.title}
              </span>
            </div>
            <span className="text-sm text-gray-500">{task.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};