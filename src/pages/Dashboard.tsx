import { AppLayout } from "@/components/layout/AppLayout";
import { ProjectChart } from "@/components/dashboard/ProjectChart";
import { TaskList } from "@/components/dashboard/TaskList";

const Dashboard = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
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