
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedSection from './AnimatedSection';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: 'NeuralTalk',
      description: 'A conversational AI platform that utilizes advanced natural language processing to provide human-like interactions for customer support and personal assistants.',
      image: 'https://images.unsplash.com/photo-1677442135146-8b623de639c1?q=80&w=2070&auto=format&fit=crop',
      tags: ['Natural Language Processing', 'Deep Learning', 'Transformer Models'],
      link: '#',
      github: '#',
    },
    {
      title: 'VisionQuest',
      description: 'Computer vision system that can identify and track objects in real-time video streams with high accuracy, designed for security and retail analytics applications.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop',
      tags: ['Computer Vision', 'Object Detection', 'Edge Computing'],
      link: '#',
      github: '#',
    },
    {
      title: 'PredictFlow',
      description: 'Predictive analytics framework that combines multiple machine learning models to forecast business metrics and provide actionable insights.',
      image: 'https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?q=80&w=2070&auto=format&fit=crop',
      tags: ['Predictive Analytics', 'Time Series', 'Ensemble Models'],
      link: '#',
      github: '#',
    },
    {
      title: 'AutoML Platform',
      description: 'Automated machine learning platform that enables non-technical users to build and deploy ML models without coding experience.',
      image: 'https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=2070&auto=format&fit=crop',
      tags: ['AutoML', 'UI/UX', 'Model Deployment'],
      link: '#',
      github: '#',
    },
  ];
  
  return (
    <AnimatedSection id="projects" className="bg-secondary/30 clip-path-slant">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 rounded-full bg-secondary text-sm font-medium mb-4">
          {t.projects.subtitle}
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold">
          {t.projects.title}
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={cn(
              "glass-card rounded-2xl overflow-hidden hover-scale",
              "transition-all duration-300 h-full flex flex-col",
              "border border-border/50"
            )}
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-2 py-1 rounded-full text-xs bg-secondary/80 text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <a 
                  href={project.link}
                  className="text-sm font-medium text-primary flex items-center gap-1.5 transition-colors hover:text-primary/80"
                >
                  {t.projects.viewProject}
                  <ExternalLink size={14} />
                </a>
                
                <a 
                  href={project.github}
                  className="p-2 rounded-full bg-secondary/80 text-foreground hover:bg-secondary transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;
