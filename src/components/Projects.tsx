
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedSection from './AnimatedSection';
import { ExternalLink, Github, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    {
      title: t.projects.aiMachine.title,
      description: t.projects.aiMachine.description,
      image: '/lovable-uploads/701ac476-ac11-47cc-9250-1bad9606e236.png',
      tags: ['Artificial Intelligence', 'Machine Learning', 'Neural Networks', 'Deep Learning', 'Data Science', 'Prediction', 'Classification', 'Clustering'],
      link: 'https://github.com/Angelo-Ramarovahoaka/ML_Project',
      github: 'https://github.com/Angelo-Ramarovahoaka/ML_Project',
      category: 'Other'
    },
    {
      title: 'Data Analysis Projects',
      description: 'Collection of data analysis projects using Python and SQL for exploring datasets, visualizations, and insights.',
      image: '/lovable-uploads/5cfe9e61-36a5-4141-8b76-779d0177b759.png',
      tags: ['Python', 'SQL', 'Data Analysis', 'Visualization', 'Statistics'],
      link: 'https://app.datacamp.com/learn/projects/',
      github: 'https://app.datacamp.com/learn/projects/',
      category: 'Data',
      isDataAnalysis: true,
      dataProjects: [
        {
          name: 'Exploring NYC Public School Test Result Scores',
          link: 'https://app.datacamp.com/learn/projects/exploring_nyc_public_school_test_result_scores/guided/Python',
          tech: 'Python'
        },
        {
          name: 'Investigating Netflix Movies',
          link: 'https://app.datacamp.com/learn/projects/investigating_netflix/guided/Python',
          tech: 'Python'
        },
        {
          name: 'Analyzing Crime in Los Angeles',
          link: 'https://app.datacamp.com/learn/projects/1876',
          tech: 'Python'
        },
        {
          name: 'Visualizing the History of Nobel Prize Winners',
          link: 'https://app.datacamp.com/learn/projects/visualizing_the_history_of_nobel_prize_winners/guided/Python',
          tech: 'Python'
        },
        {
          name: 'Analyzing Motorcycle Part Sales',
          link: 'https://app.datacamp.com/learn/projects/1574',
          tech: 'SQL'
        },
        {
          name: 'Analyzing Students\' Mental Health',
          link: 'https://app.datacamp.com/learn/projects/analyzing_students_mental_health/guided/SQL',
          tech: 'SQL'
        }
      ]
    },
  ];

  const categories = ['All', 'Web', 'App', 'Data', 'Other'];
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
      
      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
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
              
              {project.isDataAnalysis ? (
                <div className="space-y-3 mb-6">
                  {project.dataProjects.map((dataProject, dpIndex) => (
                    <div key={dpIndex} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 border border-border/30">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          {dataProject.tech === 'Python' ? (
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                          ) : (
                            <Database size={12} className="text-blue-500" />
                          )}
                          <span className="text-xs font-medium text-muted-foreground">{dataProject.tech}</span>
                        </div>
                        <span className="text-sm font-medium">{dataProject.name}</span>
                      </div>
                      <a 
                        href={dataProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-full hover:bg-secondary/50 transition-colors"
                      >
                        <ExternalLink size={12} className="text-primary" />
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
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
              )}
              
              {!project.isDataAnalysis && (
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
              )}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;
