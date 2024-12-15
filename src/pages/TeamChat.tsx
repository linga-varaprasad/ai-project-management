import { AppLayout } from "@/components/layout/AppLayout";
import { TeamChat as TeamChatComponent } from "@/components/collaboration/TeamChat";

const TeamChat = () => {
  return (
    <AppLayout>
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-6">Team Communication Hub</h1>
        <TeamChatComponent />
      </div>
    </AppLayout>
  );
};

export default TeamChat;