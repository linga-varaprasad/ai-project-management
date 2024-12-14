import { AppLayout } from "@/components/layout/AppLayout";
import { TeamChat as TeamChatComponent } from "@/components/collaboration/TeamChat";

const TeamChat = () => {
  return (
    <AppLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Team Chat</h1>
        <TeamChatComponent />
      </div>
    </AppLayout>
  );
};

export default TeamChat;