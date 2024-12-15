import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Trophy, Medal, Star } from "lucide-react";

interface LeaderboardEntryProps {
  rank: number;
  name: string;
  score: number;
  avatarUrl?: string;
}

export const LeaderboardCard = ({ rank, name, score, avatarUrl }: LeaderboardEntryProps) => {
  const getRankIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Medal className="h-5 w-5 text-amber-600" />;
      default:
        return <Star className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <Card className="p-4 flex items-center justify-between hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100">
          {getRankIcon(rank)}
        </div>
        <Avatar className="h-10 w-10">
          <img src={avatarUrl || `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt={name} />
        </Avatar>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">Score: {score}</p>
        </div>
      </div>
    </Card>
  );
};