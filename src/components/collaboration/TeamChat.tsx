import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, User } from "lucide-react";

interface Message {
  id: string;
  user: string;
  content: string;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    user: "John Doe",
    content: "Hey team, how's the progress on the new feature?",
    timestamp: "10:30 AM",
  },
  {
    id: "2",
    user: "Jane Smith",
    content: "Almost done with the frontend implementation!",
    timestamp: "10:32 AM",
  },
];

export const TeamChat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const message: Message = {
      id: Date.now().toString(),
      user: "You",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <Card className="h-[600px] flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Team Chat</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-3 ${
              message.user === "You" ? "flex-row-reverse" : ""
            }`}
          >
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
              <User className="h-4 w-4" />
            </div>
            <div className={`flex flex-col ${message.user === "You" ? "items-end" : ""}`}>
              <div className="flex items-center gap-2">
                <span className="font-medium">{message.user}</span>
                <span className="text-xs text-gray-500">{message.timestamp}</span>
              </div>
              <div className={`mt-1 p-3 rounded-lg ${
                message.user === "You"
                  ? "bg-primary text-white"
                  : "bg-gray-100"
              }`}>
                {message.content}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};