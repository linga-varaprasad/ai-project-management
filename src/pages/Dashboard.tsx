import { AppLayout } from "@/components/layout/AppLayout";
import { ProjectList } from "@/components/projects/ProjectList";
import { ProjectChart } from "@/components/dashboard/ProjectChart";
import { TaskList } from "@/components/dashboard/TaskList";
import { StatCard } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Plus, FileText, BarChart3 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const { toast } = useToast();

  const handleQuickAction = (action: string) => {
    toast({
      title: "Coming Soon",
      description: `${action} feature will be available soon!`,
    });
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex gap-3">
            <Button
              onClick={() => handleQuickAction("Create Task")}
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              Create Task
            </Button>
            <Button
              onClick={() => handleQuickAction("Generate Report")}
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
            value="12"
            trend={{ value: 8, isPositive: true }}
            icon={BarChart3}
            className="bg-blue-50"
          />
          <StatCard
            title="Completed Projects"
            value="45"
            trend={{ value: 12, isPositive: true }}
            icon={FileText}
            className="bg-green-50"
          />
          <StatCard
            title="Delayed Projects"
            value="3"
            trend={{ value: 2, isPositive: false }}
            icon={BarChart3}
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
    </AppLayout>
  );
};

export default Dashboard;