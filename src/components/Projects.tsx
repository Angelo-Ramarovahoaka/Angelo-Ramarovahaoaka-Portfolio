
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedSection from './AnimatedSection';
import { ExternalLink, Github, Code2, Database, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type TagType = string | { name: string; icon: LucideIcon };

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects = [
    {
      title: t.projects.waterQuality.title,
      description: t.projects.waterQuality.description,
      image: '/lovable-uploads/5ca53ea6-4400-4ab9-93ed-1e7098b7470c.png',
      tags: ['AI', 'Machine Learning', 'IoT', 'Water Quality', 'Public Health', 'Environmental Monitoring', 'Smart Sensors', 'Sustainability', 'Edge Computing'],
      link: 'https://github.com/Angelo-Ramarovahoaka/WaterQuality',
      github: 'https://github.com/Angelo-Ramarovahoaka/WaterQuality',
      category: 'Web'
    },
    {
      title: t.projects.ramaroFish.title,
      description: t.projects.ramaroFish.description,
      image: '/lovable-uploads/1942fe3b-0c4c-4e41-92f6-ad0c12bdcad1.png',
      tags: ['Dashboard', 'Analytics', 'Business Intelligence', 'Real-time Data', 'Aquaculture', 'Platform', 'Sustainability', 'Agritech', 'Community'],
      link: 'https://ramaro-fish.vercel.app/',
      github: 'https://github.com/Kimbohy/ramaroFish',
      category: 'Web'
    },
    {
      title: 'ClothStore Mobile',
      description: 'Modern clothing e-commerce mobile app built with React Native and Expo Go. Features include product catalog, user authentication, and intuitive browsing experience.',
      image: '/lovable-uploads/e0e833d3-a04f-447a-a001-899073bcf370.png',
      tags: ['React Native', 'Expo Go', 'E-commerce', 'Mobile App', 'Fashion', 'Authentication'],
      link: 'https://drive.google.com/file/d/1Y7civvWzBp_xq3V7RwskAeEh5aRtuwlt/view?usp=drive_link',
      github: 'https://github.com/Angelo-Ramarovahoaka/ClothingStore',
      category: 'App'
    },
    {
      title: t.projects.charBio.title,
      description: t.projects.charBio.description,
      image: '/lovable-uploads/9128d38b-00b5-4455-b1f5-816119509d5d.png',
      tags: ['Sustainability', 'Biochar', 'Waste Management', 'Environmental'],
      link: 'https://www.facebook.com/profile.php?id=100082030669064',
      github: 'https://www.facebook.com/profile.php?id=100082030669064',
      category: 'Other'
    },
  ];

  const aiMachineLearningProjects = [
    {
      title: t.projects.aiMachine.title,
      description: t.projects.aiMachine.description,
      tags: ['Artificial Intelligence', 'Machine Learning', 'Neural Networks', 'Deep Learning', 'Data Science', 'Prediction', 'Classification', 'Clustering'],
      link: 'https://github.com/Angelo-Ramarovahoaka/ML_Project',
      github: 'https://github.com/Angelo-Ramarovahoaka/ML_Project',
    },
  ];

  const dataAnalysisProjects = [
    {
      title: 'Exploring NYC Public School Test Result Scores',
      description: 'Data analysis project examining NYC public school test results to identify patterns and insights in educational performance.',
      tags: [{ name: 'Python', icon: Code2 }, 'Data Analysis', 'Education', 'Statistics'],
      link: 'https://app.datacamp.com/learn/projects/exploring_nyc_public_school_test_result_scores/guided/Python',
    },
    {
      title: 'Investigating Netflix Movies',
      description: 'Comprehensive analysis of Netflix movie data to uncover trends in content duration, genres, and release patterns over time.',
      tags: [{ name: 'Python', icon: Code2 }, 'Data Analysis', 'Entertainment', 'Visualization'],
      link: 'https://app.datacamp.com/learn/projects/investigating_netflix/guided/Python',
    },
    {
      title: 'Analyzing Crime in Los Angeles',
      description: 'Statistical analysis of crime data in Los Angeles to identify patterns, hotspots, and temporal trends for public safety insights.',
      tags: [{ name: 'Python', icon: Code2 }, 'Data Analysis', 'Public Safety', 'Statistics'],
      link: 'https://app.datacamp.com/learn/projects/1876',
    },
    {
      title: 'Visualizing the History of Nobel Prize Winners',
      description: 'Data visualization project exploring Nobel Prize winners throughout history, analyzing trends by category, gender, and geography.',
      tags: [{ name: 'Python', icon: Code2 }, 'Data Visualization', 'History', 'Analytics'],
      link: 'https://app.datacamp.com/learn/projects/visualizing_the_history_of_nobel_prize_winners/guided/Python',
    },
    {
      title: 'Analyzing Motorcycle Part Sales',
      description: 'SQL-based analysis of motorcycle parts sales data to identify best-selling products, seasonal trends, and business insights.',
      tags: [{ name: 'SQL', icon: Database }, 'Data Analysis', 'Sales', 'Business Intelligence'],
      link: 'https://app.datacamp.com/learn/projects/1574',
    },
    {
      title: 'Analyzing Students\' Mental Health',
      description: 'SQL analysis of student mental health data to understand factors affecting student wellbeing and academic performance.',
      tags: [{ name: 'SQL', icon: Database }, 'Data Analysis', 'Healthcare', 'Education'],
      link: 'https://app.datacamp.com/learn/projects/analyzing_students_mental_health/guided/SQL',
    },
  ];

  const categories = ['All', 'Web', 'App', 'Data Analysis', 'Other'];
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <AnimatedSection id="projects" className="bg-secondary/30 clip-path-slant">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 rounded-full bg-secondary text-sm font-medium mb-4">
          {t.projects.subtitle}
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
          {t.projects.title}
        </h2>
        
        {/* Category Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-12">
        {filteredProjects.map((project, index) => (
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

      {/* Data Analysis Projects Section */}
      <div className="mt-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Data Analysis Projects
          </h3>
          <p className="text-muted-foreground">
            Collection of data analysis and visualization projects using Python and SQL
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataAnalysisProjects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card rounded-xl overflow-hidden hover-scale",
                "transition-all duration-300 h-full flex flex-col",
                "border border-border/50 p-6"
              )}
            >
              <h4 className="text-lg font-bold mb-3">{project.title}</h4>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-2 py-1 rounded-full text-xs bg-secondary/80 text-foreground flex items-center gap-1"
                  >
                    {typeof tag === 'object' && tag !== null ? (
                      <>
                        <tag.icon size={12} />
                        {tag.name}
                      </>
                    ) : (
                      tag as string
                    )}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link}
                className="text-sm font-medium text-primary flex items-center gap-1.5 transition-colors hover:text-primary/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* AI & Machine Learning Projects Section */}
      <div className="mt-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            AI & Machine Learning Projects
          </h3>
          <p className="text-muted-foreground">
            Advanced artificial intelligence and machine learning implementations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiMachineLearningProjects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card rounded-xl overflow-hidden hover-scale",
                "transition-all duration-300 h-full flex flex-col",
                "border border-border/50 p-6"
              )}
            >
              <h4 className="text-lg font-bold mb-3">{project.title}</h4>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-2 py-1 rounded-full text-xs bg-secondary/80 text-foreground"
                  >
                    {tag as string}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <a 
                  href={project.link}
                  className="text-sm font-medium text-primary flex items-center gap-1.5 transition-colors hover:text-primary/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
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
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
