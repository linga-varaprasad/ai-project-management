import { Badge } from "@/components/ui/badge";
import { Trophy, Rocket, Target, Zap, Award } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export interface UserBadge {
  id: string;
  name: string;
  description: string;
  icon: keyof typeof badgeIcons;
  earned: boolean;
}

const badgeIcons = {
  TaskMaster: Trophy,
  QuickStarter: Rocket,
  GoalAchiever: Target,
  TeamPlayer: Award,
  Innovator: Zap,
};

interface BadgeDisplayProps {
  badges: UserBadge[];
}

export const BadgeDisplay = ({ badges }: BadgeDisplayProps) => {
  return (
    <div className="flex gap-2">
      {badges.map((badge) => {
        const Icon = badgeIcons[badge.icon];
        return (
          <TooltipProvider key={badge.id}>
            <Tooltip>
              <TooltipTrigger>
                <Badge
                  variant={badge.earned ? "default" : "outline"}
                  className={`px-2 py-1 ${
                    badge.earned ? "bg-primary" : "bg-gray-100"
                  } cursor-help transition-all duration-300 hover:scale-110`}
                >
                  <Icon className="h-4 w-4 mr-1" />
                  {badge.name}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>{badge.description}</p>
                {!badge.earned && <p className="text-sm text-gray-500">Not earned yet</p>}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};