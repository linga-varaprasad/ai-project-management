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

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // For the new_user role check
  if (allowedRoles.includes("new_user") && user.role !== "new_user") {
    return <Navigate to="/dashboard" replace />;
  }

  // For other role checks
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    if (!hasShownToast.current) {
      toast({
        title: "Access denied",
        description: "You don't have permission to access this page",
        variant: "destructive",
      });
      hasShownToast.current = true;
    }
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};