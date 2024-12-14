import { AppLayout } from "@/components/layout/AppLayout";
import { KanbanBoard } from "@/components/tasks/KanbanBoard";

const ProjectManagement = () => {
  return (
    <AppLayout>
      <KanbanBoard />
    </AppLayout>
  );
};

export default ProjectManagement;