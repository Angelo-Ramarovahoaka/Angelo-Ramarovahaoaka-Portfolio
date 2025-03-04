
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-background to-background/40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="section-container relative z-10 flex flex-col items-center justify-center text-center py-20">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-secondary/80 text-sm font-medium backdrop-blur-sm animate-fade-in">
          {t.hero.greeting}
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 animate-slide-in">
          <span className="block">Angelo Ramarovahoaka</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '300ms' }}>
          {t.hero.role}
        </p>
        
        <a 
          href="#about"
          className={cn(
            "inline-flex items-center gap-2 px-6 py-3 rounded-full",
            "bg-primary text-primary-foreground font-medium",
            "hover-scale shadow-sm"
          )}
          style={{ animationDelay: '600ms' }}
        >
          {t.hero.cta}
        </a>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-subtle-pulse">
          <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground">
            <span className="mb-2">Scroll</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
