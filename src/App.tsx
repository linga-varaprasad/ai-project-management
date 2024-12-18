import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";

// Page imports
import LandingPage from "./pages/LandingPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Onboarding from "./pages/auth/Onboarding";
import Dashboard from "./pages/Dashboard";
import ProjectManagement from "./pages/ProjectManagement";
import TaskManagement from "./pages/TaskManagement";
import TeamChat from "./pages/TeamChat";
import VideoCall from "./pages/VideoCall";
import FileSharing from "./pages/FileSharing";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Gamification from "./pages/Gamification";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* New user route */}
            <Route 
              path="/onboarding" 
              element={
                <ProtectedRoute allowedRoles={["new_user"]}>
                  <Onboarding />
                </ProtectedRoute>
              } 
            />

            {/* Protected routes for authenticated users */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute allowedRoles={["admin", "team_member"]}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/projects"
              element={
                <ProtectedRoute allowedRoles={["admin", "team_member"]}>
                  <ProjectManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tasks"
              element={
                <ProtectedRoute allowedRoles={["admin", "team_member"]}>
                  <TaskManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chat"
              element={
                <ProtectedRoute allowedRoles={["admin", "team_member"]}>
                  <TeamChat />
                </ProtectedRoute>
              }
            />
            <Route
              path="/video"
              element={
                <ProtectedRoute allowedRoles={["admin", "team_member"]}>
                  <VideoCall />
                </ProtectedRoute>
              }
            />
            <Route
              path="/files"
              element={
                <ProtectedRoute allowedRoles={["admin", "team_member"]}>
                  <FileSharing />
                </ProtectedRoute>
              }
            />
            <Route
              path="/analytics"
              element={
                <ProtectedRoute allowedRoles={["admin", "team_member"]}>
                  <Analytics />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute allowedRoles={["admin", "team_member"]}>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/gamification"
              element={
                <ProtectedRoute allowedRoles={["admin", "team_member"]}>
                  <Gamification />
                </ProtectedRoute>
              }
            />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;