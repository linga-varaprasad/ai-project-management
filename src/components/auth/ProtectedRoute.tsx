import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export const ProtectedRoute = ({ children, allowedRoles = [] }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const { toast } = useToast();

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // If user is not authenticated, redirect to login
  if (!user) {
    toast({
      title: "Authentication required",
      description: "Please log in to access this page",
      variant: "destructive",
    });
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If roles are specified and user's role doesn't match, redirect to dashboard
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    toast({
      title: "Access denied",
      description: "You don't have permission to access this page",
      variant: "destructive",
    });
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};