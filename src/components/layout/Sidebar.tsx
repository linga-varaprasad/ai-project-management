import { 
  LayoutDashboard, 
  Users, 
  BarChart, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  MessageSquare,
  Bot,
  Video,
  FileUp,
  Trophy,
  Search,
  ListTodo
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: ListTodo, label: "Task Management", href: "/tasks" },
    { icon: MessageSquare, label: "Team Chat", href: "/chat" },
    { icon: Video, label: "Video Calls", href: "/video" },
    { icon: FileUp, label: "File Sharing", href: "/files" },
    { icon: Bot, label: "AI Assistant", href: "/ai-assistant" },
    { icon: BarChart, label: "Analytics", href: "/analytics" },
    { icon: Trophy, label: "Leaderboard", href: "/leaderboard" },
    { icon: Search, label: "Search", href: "/search" },
    { icon: Users, label: "Team", href: "/team" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-sidebar-background border-r transition-all duration-300",
        isOpen ? "w-64" : "w-20"
      )}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b">
        {isOpen && <span className="text-xl font-bold text-primary">SaaSFlow</span>}
        <Button variant="ghost" size="icon" onClick={onToggle} className="ml-auto">
          {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>
      <nav className="p-4">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center gap-4 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors",
              !isOpen && "justify-center",
              item.href === window.location.pathname && "bg-sidebar-accent text-sidebar-accent-foreground"
            )}
          >
            <item.icon className="h-5 w-5" />
            {isOpen && <span>{item.label}</span>}
          </a>
        ))}
      </nav>
    </aside>
  );
};