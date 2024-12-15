import { useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Filter,
  Calendar,
  User
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { KanbanBoard } from "@/components/tasks/KanbanBoard";

const TaskManagement = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTask = () => {
    toast({
      title: "Coming Soon",
      description: "Add task functionality will be available soon!",
    });
  };

  const handleDragEnd = (result: any) => {
    // Will implement drag and drop functionality in the next iteration
    console.log(result);
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Task Management</h1>
          <Button onClick={handleAddTask} className="gap-2">
            <Plus className="h-4 w-4" />
            Add Task
          </Button>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <Input
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Due Date
          </Button>
          <Button variant="outline" className="gap-2">
            <User className="h-4 w-4" />
            Assignee
          </Button>
        </div>

        <DragDropContext onDragEnd={handleDragEnd}>
          <KanbanBoard />
        </DragDropContext>
      </div>
    </AppLayout>
  );
};

export default TaskManagement;