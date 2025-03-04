
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="glass-card p-10 md:p-16 rounded-2xl text-center max-w-xl mx-6">
            <p className="text-6xl md:text-8xl font-display font-bold mb-6">404</p>
            <h1 className="text-2xl md:text-3xl font-display font-medium mb-6">
              Page not found
            </h1>
            <p className="text-muted-foreground mb-10">
              The page you are looking for doesn't exist or has been moved.
            </p>
            
            <a 
              href="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft size={18} />
              Return to Home
            </a>
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default NotFound;
