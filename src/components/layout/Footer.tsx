import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t bg-white py-6 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">
          © 2024 SaaSFlow. All rights reserved.
        </div>
        <nav className="flex items-center gap-6">
          <Link to="/support" className="text-sm text-muted-foreground hover:text-primary">
            Support
          </Link>
          <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
};