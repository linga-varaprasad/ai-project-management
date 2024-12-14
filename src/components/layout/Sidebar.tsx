import { Home, LayoutDashboard, Users, BarChart, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: Home, label: "Projects", href: "/projects" },
    { icon: Users, label: "Team", href: "/team" },
    { icon: BarChart, label: "Analytics", href: "/analytics" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-white border-r transition-all duration-300",
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
              "flex items-center gap-4 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors",
              !isOpen && "justify-center"
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