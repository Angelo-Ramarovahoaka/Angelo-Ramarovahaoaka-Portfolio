
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';

type ModeToggleProps = {
  className?: string;
};

const ModeToggle: React.FC<ModeToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'rounded-full p-2 transition-all duration-300 ease-in-out',
        theme === 'dark' 
          ? 'bg-secondary text-foreground hover:bg-secondary/80' 
          : 'bg-secondary text-foreground hover:bg-secondary/80',
        className
      )}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 transition-all" />
      ) : (
        <Moon className="h-5 w-5 transition-all" />
      )}
    </button>
  );
};

export default ModeToggle;
