import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Filter } from "lucide-react";

// Mock data for projects
const mockProjects = [
  {
    id: 1,
    name: "Website Redesign",
    team: "Design",
    status: "In Progress",
    priority: "High",
    members: ["John D.", "Sarah M."],
    deadline: "2024-03-30",
  },
  {
    id: 2,
    name: "Mobile App Development",
    team: "Development",
    status: "Planning",
    priority: "Medium",
    members: ["Mike R.", "Lisa K."],
    deadline: "2024-04-15",
  },
];

const ProjectManagement = () => {
  const [projects, setProjects] = useState(mockProjects);
  const [filterTeam, setFilterTeam] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterPriority, setFilterPriority] = useState("");

  const filteredProjects = projects.filter((project) => {
    return (
      (!filterTeam || project.team === filterTeam) &&
      (!filterStatus || project.status === filterStatus) &&
      (!filterPriority || project.priority === filterPriority)
    );
  });

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="text-muted-foreground">Manage and track your projects</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Project</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Project Name</Label>
                  <Input id="name" placeholder="Enter project name" />
                </div>
                <div>
                  <Label htmlFor="team">Team</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select team" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="priority">Priority</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="deadline">Deadline</Label>
                  <Input id="deadline" type="date" />
                </div>
                <Button className="w-full">Create Project</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex gap-4 mb-6">
          <Select value={filterTeam} onValueChange={setFilterTeam}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by Team" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Teams</SelectItem>
              <SelectItem value="Design">Design</SelectItem>
              <SelectItem value="Development">Development</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Statuses</SelectItem>
              <SelectItem value="Planning">Planning</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterPriority} onValueChange={setFilterPriority}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Priorities</SelectItem>
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Team: {project.team}</p>
                <p>Status: {project.status}</p>
                <p>Priority: {project.priority}</p>
                <p>Deadline: {project.deadline}</p>
              </div>
              <div className="mt-4 flex -space-x-2">
                {project.members.map((member, index) => (
                  <div
                    key={index}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium"
                  >
                    {member.split(" ")[0][0]}
                    {member.split(" ")[1][0]}
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View Details
              </Button>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default ProjectManagement;