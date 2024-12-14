import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface Task {
  id: string;
  title: string;
  status: "todo" | "inProgress" | "completed";
  priority: "low" | "medium" | "high";
  assignee: string;
}

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Design new landing page",
    status: "todo",
    priority: "high",
    assignee: "John Doe",
  },
  {
    id: "2",
    title: "Implement authentication",
    status: "inProgress",
    priority: "medium",
    assignee: "Jane Smith",
  },
  {
    id: "3",
    title: "Write documentation",
    status: "completed",
    priority: "low",
    assignee: "Mike Johnson",
  },
];

export const KanbanBoard = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const getTasksByStatus = (status: Task["status"]) =>
    tasks.filter((task) => task.status === status);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Task Board</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Task
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(["todo", "inProgress", "completed"] as const).map((status) => (
          <div
            key={status}
            className="bg-white rounded-xl border p-4"
          >
            <h3 className="text-lg font-semibold mb-4 capitalize">
              {status === "inProgress" ? "In Progress" : status}
            </h3>
            <div className="space-y-4">
              {getTasksByStatus(status).map((task) => (
                <Card key={task.id} className="p-4">
                  <h4 className="font-medium">{task.title}</h4>
                  <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                    <span>{task.assignee}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      task.priority === "high"
                        ? "bg-red-100 text-red-600"
                        : task.priority === "medium"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-green-100 text-green-600"
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};