import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [workspaceName, setWorkspaceName] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [role, setRole] = useState("");
  const [industry, setIndustry] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCreateWorkspace = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error("No user found");
      }

      // Update user profile with workspace info
      const { error } = await supabase
        .from('profiles')
        .update({
          workspace_name: workspaceName,
          team_size: teamSize,
          role: role,
          industry: industry
        })
        .eq('user_id', user.id);

      if (error) throw error;

      toast({
        title: "Workspace created!",
        description: "You can now access your dashboard.",
      });
      
      navigate("/dashboard");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md p-6 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Welcome to Your Workspace</h1>
          <p className="text-muted-foreground">Let's set up your workspace</p>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Input
                placeholder="Workspace name"
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Select value={teamSize} onValueChange={setTeamSize}>
                <SelectTrigger>
                  <SelectValue placeholder="Team size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201+">201+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button 
              className="w-full" 
              onClick={() => setStep(2)}
              disabled={!workspaceName || !teamSize}
            >
              Continue
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="member">Team Member</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Select value={industry} onValueChange={setIndustry}>
                <SelectTrigger>
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button 
              className="w-full" 
              onClick={handleCreateWorkspace}
              disabled={!role || !industry}
            >
              Create Workspace
            </Button>
          </div>
        )}

        <div className="flex justify-center gap-2">
          {[1, 2].map((i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                step === i ? "bg-primary" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Onboarding;