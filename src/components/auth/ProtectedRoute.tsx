import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export const ProtectedRoute = ({ children, allowedRoles = [] }: ProtectedRouteProps) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  const { toast } = useToast();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (!isLoading && !user && !hasShownToast.current) {
      toast({
        title: "Authentication required",
        description: "Please log in to access this page",
        variant: "destructive",
      });
      hasShownToast.current = true;
    }
  }, [user, isLoading, toast]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If not logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If logged in and no specific roles are required, allow access
  if (allowedRoles.length === 0) {
    return <>{children}</>;
  }

  // For new users, allow access to onboarding
  if (allowedRoles.includes("new_user")) {
    return <>{children}</>;
  }

  // Default role is team_member if no role is set
  const userRole = user.role || "team_member";

  // Allow access if user has required role
  if (allowedRoles.includes(userRole) || userRole === "admin") {
    return <>{children}</>;
  }

  // If we get here, user doesn't have required role
  if (!hasShownToast.current) {
    toast({
      title: "Access denied",
      description: "You don't have permission to access this page",
      variant: "destructive",
    });
    hasShownToast.current = true;
  }
  
  return <Navigate to="/dashboard" replace />;
};