import { Bell, Search, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BadgeDisplay } from "@/components/gamification/BadgeDisplay";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

// Sample badges data - in a real app, this would come from your backend
const userBadges = [
  {
    id: "1",
    name: "Task Master",
    description: "Completed 100 tasks",
    icon: "TaskMaster" as const,
    earned: true,
  },
  {
    id: "2",
    name: "Quick Starter",
    description: "Completed 10 tasks in one day",
    icon: "QuickStarter" as const,
    earned: true,
  },
  {
    id: "3",
    name: "Team Player",
    description: "Collaborated on 50 projects",
    icon: "TeamPlayer" as const,
    earned: false,
  },
];

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="h-16 border-b bg-white px-6 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>
        <span className="text-xl font-bold text-primary hidden md:block">SaaSFlow</span>
      </div>

      <div className="flex-1 max-w-xl hidden md:block">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="w-full pl-8"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <BadgeDisplay badges={userBadges} />
        
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                JD
              </div>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};