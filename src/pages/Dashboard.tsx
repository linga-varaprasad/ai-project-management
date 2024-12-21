import { AppLayout } from "@/components/layout/AppLayout";
import { ProjectList } from "@/components/projects/ProjectList";
import { ProjectChart } from "@/components/dashboard/ProjectChart";
import { TaskList } from "@/components/dashboard/TaskList";
import { StatCard } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Plus, FileText, BarChart3, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { CreateTaskModal } from "@/components/tasks/CreateTaskModal";
import { useState } from "react";

const Dashboard = () => {
  const { toast } = useToast();
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);

  // Fetch projects data
  const { data: projects, isLoading: isLoadingProjects } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        toast({
          title: "Error fetching projects",
          description: error.message,
          variant: "destructive",
        });
        return [];
      }
      return data;
    },
  });

  // Calculate project statistics
  const projectStats = {
    active: projects?.filter(p => p.status === "in_progress").length || 0,
    completed: projects?.filter(p => p.status === "completed").length || 0,
    delayed: projects?.filter(p => 
      p.status !== "completed" && 
      new Date(p.end_date) < new Date()
    ).length || 0,
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex gap-3">
            <Button
              onClick={() => setIsCreateTaskModalOpen(true)}
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              Create Task
            </Button>
            <Button
              onClick={() => {
                toast({
                  title: "Generating Report",
                  description: "Your report will be ready soon.",
                });
              }}
              variant="outline"
              className="gap-2"
            >
              <BarChart3 className="h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </div>

        {/* Project Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            title="Active Projects"
            value={projectStats.active}
            trend={{ value: 8, isPositive: true }}
            icon={BarChart3}
            className="bg-blue-50"
          />
          <StatCard
            title="Completed Projects"
            value={projectStats.completed}
            trend={{ value: 12, isPositive: true }}
            icon={FileText}
            className="bg-green-50"
          />
          <StatCard
            title="Delayed Projects"
            value={projectStats.delayed}
            trend={{ value: 2, isPositive: false }}
            icon={Clock}
            className="bg-red-50"
          />
        </div>

        {/* Project List */}
        <ProjectList />

        {/* Analytics and Task Management */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ProjectChart />
          </div>
          <div>
            <TaskList />
          </div>
        </div>
      </div>

      <CreateTaskModal 
        isOpen={isCreateTaskModalOpen}
        onClose={() => setIsCreateTaskModalOpen(false)}
      />
    </AppLayout>
  );
};

export default Dashboard;