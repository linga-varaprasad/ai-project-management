import { CheckCircle2, Clock } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Database } from "@/integrations/supabase/types";

type Task = Database["public"]["Tables"]["tasks"]["Row"];

export const TaskList = () => {
  const { toast } = useToast();

  const { data: tasks, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(5);

      if (error) {
        toast({
          title: "Error fetching tasks",
          description: error.message,
          variant: "destructive",
        });
        return [];
      }

      return data as Task[];
    },
  });

  if (isLoading) {
    return <div>Loading tasks...</div>;
  }

  return (
    <div className="bg-white rounded-xl border p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Tasks</h2>
      <div className="space-y-4">
        {tasks?.map((task) => (
          <div key={task.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {task.status === "completed" ? (
                <CheckCircle2 className="h-5 w-5 text-success" />
              ) : (
                <Clock className="h-5 w-5 text-warning" />
              )}
              <div>
                <span className={task.status === "completed" ? "line-through text-gray-500" : ""}>
                  {task.title}
                </span>
                <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                  task.priority === "high"
                    ? "bg-red-100 text-red-600"
                    : task.priority === "medium"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600"
                }`}>
                  {task.priority}
                </span>
              </div>
            </div>
            <span className="text-sm text-gray-500">
              {new Date(task.due_date).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};