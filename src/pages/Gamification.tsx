import { AppLayout } from "@/components/layout/AppLayout";
import { LeaderboardCard } from "@/components/gamification/LeaderboardCard";
import { Card } from "@/components/ui/card";

const leaderboardData = [
  { rank: 1, name: "Sarah Johnson", score: 2500, avatarUrl: "" },
  { rank: 2, name: "Mike Chen", score: 2350, avatarUrl: "" },
  { rank: 3, name: "Alex Turner", score: 2200, avatarUrl: "" },
  { rank: 4, name: "Emma Davis", score: 2100, avatarUrl: "" },
  { rank: 5, name: "James Wilson", score: 2000, avatarUrl: "" },
];

const Gamification = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Leaderboard</h1>
          <p className="text-gray-500 mt-1">Top performers this month</p>
        </div>

        <div className="grid gap-4">
          {leaderboardData.map((entry) => (
            <LeaderboardCard key={entry.name} {...entry} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Achievements</h2>
            <div className="space-y-4">
              <p className="text-gray-500">Coming soon...</p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Available Challenges</h2>
            <div className="space-y-4">
              <p className="text-gray-500">Coming soon...</p>
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Gamification;