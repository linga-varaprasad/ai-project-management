import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', completed: 4, active: 6, delayed: 2 },
  { name: 'Feb', completed: 3, active: 4, delayed: 1 },
  { name: 'Mar', completed: 5, active: 3, delayed: 2 },
  { name: 'Apr', completed: 6, active: 5, delayed: 1 },
];

export const ProjectChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl border h-[400px]">
      <h2 className="text-lg font-semibold mb-4">Project Status Overview</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="completed" fill="#10B981" name="Completed" />
          <Bar dataKey="active" fill="#6366F1" name="Active" />
          <Bar dataKey="delayed" fill="#EF4444" name="Delayed" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};