import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Onboarding = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md p-6 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Welcome to SaaSFlow</h1>
          <p className="text-muted-foreground">Let's set up your workspace</p>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Input placeholder="Workspace name" />
            </div>
            <div className="space-y-2">
              <Select>
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
            <Button className="w-full" onClick={() => setStep(2)}>
              Continue
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Select>
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
              <Select>
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
            <Button className="w-full" onClick={() => setStep(3)}>
              Continue
            </Button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">You're all set!</h3>
              <p className="text-muted-foreground mb-4">
                Your workspace is ready to use
              </p>
            </div>
            <Button className="w-full" asChild>
              <a href="/dashboard">Go to Dashboard</a>
            </Button>
          </div>
        )}

        <div className="flex justify-center gap-2">
          {[1, 2, 3].map((i) => (
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