import { AppLayout } from "@/components/layout/AppLayout";
import { ProjectChart } from "@/components/dashboard/ProjectChart";
import { TaskList } from "@/components/dashboard/TaskList";
import { StatCard } from "@/components/dashboard/StatCard";
import { ActivityTimeline } from "@/components/dashboard/ActivityTimeline";
import { Users, Target, Clock, Briefcase } from "lucide-react";

const Dashboard = () => {
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ProjectChart />
          </div>
          <div>
            <TaskList />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
              <ActivityTimeline />
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  Create New Project
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  Add Task
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  Schedule Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;