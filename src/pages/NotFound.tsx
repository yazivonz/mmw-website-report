import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center glass-dark p-8 md:p-12 rounded-2xl max-w-md mx-4">
        <h1 className="mb-4 text-6xl md:text-8xl font-orbitron font-bold text-primary animate-pulse-glow">404</h1>
        <p className="mb-6 text-xl md:text-2xl text-foreground font-poppins">Oops! Page not found</p>
        <p className="mb-8 text-secondary font-poppins">The page you're looking for doesn't exist or has been moved.</p>
        <a 
          href="/" 
          className="inline-block bg-primary hover:bg-accent text-background font-orbitron font-bold px-8 py-3 rounded-lg transition-all animate-pulse-glow"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
