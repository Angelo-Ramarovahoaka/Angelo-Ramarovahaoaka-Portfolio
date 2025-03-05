
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedSection from './AnimatedSection';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const Ventures: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <AnimatedSection id="ventures" className="bg-background clip-path-slant-reverse">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 rounded-full bg-secondary text-sm font-medium mb-4">
          {t.ventures.subtitle}
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold">
          {t.ventures.title}
        </h2>
      </div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-0 bottom-0 left-[30px] md:left-1/2 w-0.5 bg-border z-0" />
        
        {t.ventures.each_venture.map((venture, index) => (
          <div 
            key={index} 
            className="relative z-10 flex flex-col md:flex-row mb-16 md:even:flex-row-reverse"
          >
            {/* Timeline dot */}
            <div className="absolute left-[28px] md:left-1/2 top-8 w-4 h-4 rounded-full bg-primary transform md:-translate-x-1/2 z-20" />
            
            {/* Date */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-secondary/30 md:mr-auto md:ml-auto mb-6 md:mb-0">
              <span className="text-sm font-semibold">{venture.year}</span>
            </div>
            
            {/* Content */}
            <div className="md:w-[calc(50%-3rem)] ml-10 md:ml-0 md:mr-0">
              <div className="glass-card rounded-xl p-6 hover-scale">
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={venture.image}
                    alt={venture.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 m-4">
                    <span className={`
                      inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                      ${venture.status === 'current' ? 'bg-green-500/10 text-green-500' : 
                      venture.status === 'acquired' ? 'bg-blue-500/10 text-blue-500' : 
                      'bg-secondary text-foreground'}
                    `}>
                      {venture.status === 'current' ? t.ventures.current : 
                       venture.status === 'acquired' ? 'Acquired' : 'Advisor'}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{venture.role}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{venture.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{venture.description}</p>
                
                <a 
                  href={venture.link}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Visit Website
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Ventures;
