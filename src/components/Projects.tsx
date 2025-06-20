
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedSection from './AnimatedSection';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: 'RamaroFish',
      description: 'Smart aquaculture solution specializing in fish farming (tilapia, carp) with IoT sensors for water quality monitoring and AI-powered growth tracking systems.',
      image: '/lovable-uploads/5ca53ea6-4400-4ab9-93ed-1e7098b7470c.png',
      tags: ['IoT', 'AI Monitoring', 'Aquaculture', 'Sensors'],
      link: '#',
      github: 'https://github.com/Kimbohy/ramaroFish',
    },
    {
      title: 'RamaroFish Dashboard',
      description: 'Advanced dashboard for RamaroFish platform featuring real-time analytics, revenue tracking, and comprehensive business intelligence for aquaculture operations.',
      image: '/lovable-uploads/1942fe3b-0c4c-4e41-92f6-ad0c12bdcad1.png',
      tags: ['Dashboard', 'Analytics', 'Business Intelligence', 'Real-time Data'],
      link: '#',
      github: 'https://github.com/Kimbohy/ramaroFish',
    },
    {
      title: 'Char\'Bio Eco-Charcoal',
      description: 'Sustainable project converting organic waste into eco-friendly charcoal using innovative biochar production techniques for environmental conservation.',
      image: '/lovable-uploads/9128d38b-00b5-4455-b1f5-816119509d5d.png',
      tags: ['Sustainability', 'Biochar', 'Waste Management', 'Environmental'],
      link: '#',
      github: '#',
    },
    {
      title: 'AI & Machine Learning Platform',
      description: 'Comprehensive AI/ML platform combining advanced algorithms, neural networks, and deep learning techniques for intelligent data processing and predictive analytics.',
      image: '/lovable-uploads/701ac476-ac11-47cc-9250-1bad9606e236.png',
      tags: ['Artificial Intelligence', 'Machine Learning', 'Neural Networks', 'Deep Learning'],
      link: '#',
      github: '#',
    },
    {
      title: 'Water Quality Test',
      description: 'Advanced water quality analysis system using machine learning algorithms to predict and monitor water parameters for environmental and industrial applications.',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=2070&auto=format&fit=crop',
      tags: ['Machine Learning', 'Environmental Monitoring', 'Data Analysis', 'Python'],
      link: '#',
      github: 'https://github.com/Angelo-Ramarovahoaka/WaterQuality',
    },
    {
      title: 'NeuralTalk',
      description: 'A conversational AI platform that utilizes advanced natural language processing to provide human-like interactions for customer support and personal assistants.',
      image: 'https://images.unsplash.com/photo-1677442135146-8b623de639c1?q=80&w=2070&auto=format&fit=crop',
      tags: ['Natural Language Processing', 'Deep Learning', 'Transformer Models'],
      link: '#',
      github: '#',
    },
    {
      title: 'Smart Predictive Analytics',
      description: 'Machine learning platform that combines multiple algorithms to forecast business metrics, market trends, and provide actionable AI-driven insights for decision making.',
      image: 'https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?q=80&w=2070&auto=format&fit=crop',
      tags: ['Predictive Analytics', 'Machine Learning', 'Time Series', 'Business Intelligence'],
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
                  target="_blank"
                  rel="noopener noreferrer"
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
