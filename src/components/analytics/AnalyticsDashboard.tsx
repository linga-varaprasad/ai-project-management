import { Card } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const performanceData = [
  { month: "Jan", completed: 45, efficiency: 85 },
  { month: "Feb", completed: 52, efficiency: 88 },
  { month: "Mar", completed: 48, efficiency: 82 },
  { month: "Apr", completed: 61, efficiency: 90 },
  { month: "May", completed: 55, efficiency: 85 },
];

const taskDistribution = [
  { name: "Development", value: 40 },
  { name: "Design", value: 25 },
  { name: "Marketing", value: 20 },
  { name: "Research", value: 15 },
];

export const AnalyticsDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Performance Trends</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="completed" stroke="#6366F1" name="Tasks Completed" />
                <Line type="monotone" dataKey="efficiency" stroke="#10B981" name="Efficiency %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Task Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={taskDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#6366F1"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};