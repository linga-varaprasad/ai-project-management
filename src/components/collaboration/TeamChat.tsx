import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, User, Video, Upload, Paperclip, Smile } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  id: string;
  user: string;
  content: string;
  timestamp: string;
  type: 'text' | 'file';
  fileUrl?: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    user: "John Doe",
    content: "Hey team, how's the progress on the new feature?",
    timestamp: "10:30 AM",
    type: 'text'
  },
  {
    id: "2",
    user: "Jane Smith",
    content: "Almost done with the frontend implementation!",
    timestamp: "10:32 AM",
    type: 'text'
  },
];

export const TeamChat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const message: Message = {
      id: Date.now().toString(),
      user: "You",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'text'
    };
    
    setMessages([...messages, message]);
    setNewMessage("");
  };

  const handleFileUpload = () => {
    toast({
      title: "Coming Soon",
      description: "File upload functionality will be available soon!",
    });
  };

  const handleVideoCall = () => {
    toast({
      title: "Coming Soon",
      description: "Video call functionality will be available soon!",
    });
  };

  return (
    <Card className="h-[calc(100vh-12rem)] flex flex-col bg-white shadow-lg">
      <div className="p-4 border-b flex items-center justify-between bg-primary/5">
        <div>
          <h2 className="text-lg font-semibold text-primary">Team Chat</h2>
          <p className="text-sm text-muted-foreground">5 team members online</p>
        </div>
        <Button variant="outline" onClick={handleVideoCall} className="gap-2">
          <Video className="h-4 w-4" />
          Start Video Call
        </Button>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.user === "You" ? "flex-row-reverse" : ""
              }`}
            >
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <User className="h-4 w-4" />
              </div>
              <div className={`flex flex-col ${message.user === "You" ? "items-end" : ""}`}>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{message.user}</span>
                  <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                </div>
                <div className={`mt-1 p-3 rounded-lg max-w-[80%] ${
                  message.user === "You"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}>
                  {message.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t bg-white">
        <div className="flex gap-2 items-center">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleFileUpload}
            className="text-muted-foreground hover:text-primary"
          >
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleFileUpload}
            className="text-muted-foreground hover:text-primary"
          >
            <Upload className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-muted-foreground hover:text-primary"
          >
            <Smile className="h-4 w-4" />
          </Button>
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button onClick={handleSendMessage} className="gap-2">
            <Send className="h-4 w-4" />
            Send
          </Button>
        </div>
      </div>
    </Card>
  );
};