import { AppLayout } from "@/components/layout/AppLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { TaskList } from "@/components/dashboard/TaskList";
import { Users, Target, Clock, Briefcase } from "lucide-react";

const Index = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-500 mt-1">Welcome back! Here's what's happening today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Projects"
            value="12"
            icon={Briefcase}
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard
            title="Team Members"
            value="24"
            icon={Users}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Tasks Completed"
            value="64%"
            icon={Target}
            trend={{ value: 5, isPositive: true }}
          />
          <StatCard
            title="Overdue Tasks"
            value="3"
            icon={Clock}
            trend={{ value: 2, isPositive: false }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TaskList />
          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-lg font-semibold mb-4">Activity Timeline</h2>
            <p className="text-gray-500">Coming soon...</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;