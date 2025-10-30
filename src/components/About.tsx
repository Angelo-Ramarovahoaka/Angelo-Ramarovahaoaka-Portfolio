import * as React from 'react';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedSection from './AnimatedSection';
import { Briefcase, Code, Award, ChevronDown, ChevronUp, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const About: React.FC = () => {
  const { t } = useLanguage();
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [expandedCertificate, setExpandedCertificate] = useState<number | null>(null);
  
  const skillCategories = [
    {
      title: 'Data Science & Analytics',
      skills: ['Data Science', 'Statistical Analysis', 'Machine Learning', 'Deep Learning', 'Data Visualization', 'Python', 'SQL', 'Pandas', 'Seaborn', 'Predictive Analytics', 'sklearn']
    },
    {
      title: 'Programming & Development',
      skills: ['Python', 'C++', 'TypeScript', 'React', 'React Native']
    },
    {
      title: 'Mobile Development',
      skills: ['React Native', 'Expo Go', 'Mobile Apps']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['Docker', 'Linux', 'System Architecture', 'Supabase', 'Netlify', 'Vercel', 'Cloud Deployment']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Lovable', 'SEO Optimization', 'Git', 'Software Engineering']
    },
    {
      title: 'Business & Strategy',
      skills: ['Product Strategy', 'Business Development', 'Entrepreneurship', 'Startup Management']
    }
  ];

  const certifications = [
    {
      title: 'Data Analyst Associate',
      organization: 'DataCamp',
      date: 'Aug 2025',
      description: 'Professional certification demonstrating comprehensive data analysis skills, including data manipulation, statistical analysis, and visualization techniques for business insights.',
      image: '/lovable-uploads/fd2a15e0-b4b1-4557-85b4-a83be51b31d2.png'
    },
    {
      title: 'Understanding Data Visualization',
      organization: 'DataCamp',
      date: 'Aug 2025',
      description: 'Comprehensive certification covering fundamental concepts of data visualization, exploring effective techniques for creating compelling visual representations of data.',
      image: '/lovable-uploads/44e3b9dc-b463-4d91-aac0-009372b7fda3.png'
    },
    {
      title: 'Exploratory Data Analysis in SQL',
      organization: 'DataCamp',
      date: 'Aug 2025',
      description: 'Advanced SQL certification focusing on exploratory data analysis techniques, covering complex queries and data investigation methodologies.',
      image: '/lovable-uploads/556592f5-e2bd-41a2-9094-8f4fe8a5e8e2.png'
    },
    {
      title: 'Data-Driven Decision Making in SQL',
      organization: 'DataCamp',
      date: 'Aug 2025',
      description: 'Strategic certification covering data-driven decision making processes using SQL, focusing on analytical thinking and business intelligence.',
      image: '/lovable-uploads/878d94a1-4bf1-46f3-be06-de7d5de0bda9.png'
    },
    {
      title: 'Data Communication Concepts',
      organization: 'DataCamp',
      date: 'Aug 2025',
      description: 'Specialized certification in data communication strategies, covering effective presentation of insights and storytelling with data.',
      image: '/lovable-uploads/58022062-024a-4579-a3d5-a1163c9d15f5.png'
    },
    {
      title: 'Understanding ChatGPT',
      organization: 'DataCamp',
      date: 'May 2025',
      description: 'Comprehensive course covering the fundamentals of ChatGPT and Large Language Models, exploring their capabilities and applications in AI-driven solutions.',
      image: '/lovable-uploads/907906e8-9a9a-4956-86a7-453b0edd34bf.png'
    },
    {
      title: 'SQL Intermediate',
      organization: 'Sololearn',
      date: 'February 2025',
      description: 'Advanced SQL certification demonstrating proficiency in complex database queries, joins, and data manipulation techniques for effective data management.',
      image: '/lovable-uploads/5eb2749d-0bbf-4830-92f3-460776eb2ea0.png'
    },
    {
      title: 'SEO with AI',
      organization: 'Sololearn',
      date: 'March 2025',
      description: 'Certification in modern SEO techniques enhanced with Artificial Intelligence tools, covering optimization strategies and AI-driven content analysis.',
      image: '/lovable-uploads/b12d1f43-d739-40dc-8a82-73a5a059dcb6.png'
    },
    {
      title: 'Prompt Engineering',
      organization: 'Sololearn',
      date: 'May 2025',
      description: 'Specialized certification in prompt engineering techniques for AI systems, focusing on effective communication with language models and optimization strategies.',
      image: '/lovable-uploads/f51bd0b9-3be9-4a89-810a-1d8f923a6ad4.png'
    },
    {
      title: 'Joining Data with pandas',
      organization: 'DataCamp',
      date: 'June 2025',
      description: 'Advanced data science certification focusing on data manipulation and joining techniques using pandas library for comprehensive data analysis workflows.',
      image: '/lovable-uploads/b95bddc3-464a-45be-8a8b-65bab6190ea1.png'
    },
    {
      title: 'Introduction to Statistics in Python',
      organization: 'DataCamp',
      date: 'June 2025',
      description: 'Statistical analysis certification covering fundamental statistical concepts and their implementation in Python for data science applications.',
      image: '/lovable-uploads/6d6a6107-aa8f-4ede-b9f8-1ee3d79e0dbc.png'
    },
    {
      title: 'Introduction to Data Visualization with Seaborn',
      organization: 'DataCamp',
      date: 'June 2025',
      description: 'Data visualization certification focusing on creating compelling visual representations of data using Seaborn library for effective data storytelling.',
      image: '/lovable-uploads/f35075f4-650c-4a21-ad87-fdcda30ae74f.png'
    },
    {
      title: 'Intermediate Python',
      organization: 'DataCamp',
      date: 'May 2025',
      description: 'Advanced Python programming certification covering intermediate concepts, data structures, and programming techniques for professional development.',
      image: '/lovable-uploads/ddfdbb05-ebab-49fc-b4b5-0b27035a71e9.png'
    },
    {
      title: 'Data Manipulation with pandas',
      organization: 'DataCamp',
      date: 'June 2025',
      description: 'Comprehensive certification in data manipulation techniques using pandas, covering data cleaning, transformation, and analysis for data science projects.',
      image: '/lovable-uploads/5281ec1c-ff06-499e-afcd-99a77e4ff727.png'
    }
  ];
  
  const displayedCertifications = showAllCertifications ? certifications : certifications.slice(0, 3);
  
  return (
    <AnimatedSection id="about" className="relative">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">
        <div className="md:w-1/3">
          <div className="sticky top-24">
            <div className="inline-block px-4 py-1 rounded-full bg-secondary text-sm font-medium mb-4">
              {t.about.subtitle}
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              {t.about.title}
            </h2>
            <p className="text-muted-foreground text-balance leading-relaxed mb-8">
              {t.about.description}
            </p>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-6">{t.about.skills}</h3>
              <div className="space-y-6">
                {skillCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h4 className="text-sm font-medium text-primary mb-3">{category.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="px-3 py-1 rounded-full text-xs bg-secondary text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold">{t.about.experience}</h3>
              </div>
              
              <div className="space-y-8">
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{t.about.experienceItems.ramaroFish.title}</h4>
                    <span className="text-sm text-muted-foreground">{t.about.experienceItems.ramaroFish.period}</span>
                  </div>
                  <h5 className="text-primary mb-3">{t.about.experienceItems.ramaroFish.company}</h5>
                  <p className="text-sm text-muted-foreground">
                    {t.about.experienceItems.ramaroFish.description}
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{t.about.experienceItems.smartKajy.title}</h4>
                    <span className="text-sm text-muted-foreground">{t.about.experienceItems.smartKajy.period}</span>
                  </div>
                  <h5 className="text-primary mb-3">{t.about.experienceItems.smartKajy.company}</h5>
                  <p className="text-sm text-muted-foreground">
                    {t.about.experienceItems.smartKajy.description}
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{t.about.experienceItems.charBio.title}</h4>
                    <span className="text-sm text-muted-foreground">{t.about.experienceItems.charBio.period}</span>
                  </div>
                  <h5 className="text-primary mb-3">{t.about.experienceItems.charBio.company}</h5>
                  <p className="text-sm text-muted-foreground">
                    {t.about.experienceItems.charBio.description}
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold">{t.about.certifications}</h3>
                  <p className="text-muted-foreground mt-1">
                    {t.about.certificationsSubtitle}
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                {displayedCertifications.map((cert, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div 
                        className="w-full md:w-1/4 h-32 overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => setExpandedCertificate(index)}
                      >
                        <img 
                          src={cert.image} 
                          alt={cert.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full md:w-3/4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{cert.title}</h4>
                          <span className="text-sm text-muted-foreground">{cert.date}</span>
                        </div>
                        <h5 className="text-primary mb-3">{cert.organization}</h5>
                        <p className="text-sm text-muted-foreground">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {certifications.length > 3 && (
                  <button
                    onClick={() => setShowAllCertifications(!showAllCertifications)}
                    className="w-full py-3 flex items-center justify-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    <span>{showAllCertifications ? t.about.showLess : t.about.showMore}</span>
                    {showAllCertifications ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full certificate view modal */}
      {expandedCertificate !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setExpandedCertificate(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setExpandedCertificate(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="bg-background rounded-xl overflow-hidden">
              <img 
                src={certifications[expandedCertificate].image} 
                alt={certifications[expandedCertificate].title}
                className="w-full h-auto object-contain"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{certifications[expandedCertificate].title}</h3>
                <h4 className="text-primary mb-3">{certifications[expandedCertificate].organization}</h4>
                <p className="text-muted-foreground">{certifications[expandedCertificate].description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </AnimatedSection>
  );
};

export default About;
