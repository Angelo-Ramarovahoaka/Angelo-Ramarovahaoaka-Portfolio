
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedSection from './AnimatedSection';
import { Briefcase, Code, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  const skills = [
    'Machine Learning', 'Deep Learning', 'Natural Language Processing',
    'Computer Vision', 'Reinforcement Learning', 'Data Science',
    'Python', 'TensorFlow', 'PyTorch', 'Product Strategy',
    'Business Development', 'Entrepreneurship'
  ];
  
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
              <h3 className="text-lg font-semibold mb-4">{t.about.skills}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 rounded-full text-sm bg-secondary text-foreground"
                  >
                    {skill}
                  </span>
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
                    <h4 className="font-semibold">AI Research Lead</h4>
                    <span className="text-sm text-muted-foreground">2020 - Present</span>
                  </div>
                  <h5 className="text-primary mb-3">TechVision AI</h5>
                  <p className="text-sm text-muted-foreground">
                    Leading a team of researchers focusing on developing cutting-edge AI solutions for real-world applications. Specializing in natural language processing and computer vision technologies.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Co-founder & CTO</h4>
                    <span className="text-sm text-muted-foreground">2018 - 2020</span>
                  </div>
                  <h5 className="text-primary mb-3">ML Ventures</h5>
                  <p className="text-sm text-muted-foreground">
                    Co-founded a startup focused on democratizing machine learning tools for small businesses. Oversaw the technical strategy and development of the platform.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Machine Learning Engineer</h4>
                    <span className="text-sm text-muted-foreground">2016 - 2018</span>
                  </div>
                  <h5 className="text-primary mb-3">DataSphere Inc.</h5>
                  <p className="text-sm text-muted-foreground">
                    Developed data-driven solutions utilizing machine learning algorithms for predictive analytics and optimization problems.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold">{t.about.education}</h3>
              </div>
              
              <div className="space-y-8">
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Ph.D. in Computer Science</h4>
                    <span className="text-sm text-muted-foreground">2013 - 2016</span>
                  </div>
                  <h5 className="text-primary mb-3">Stanford University</h5>
                  <p className="text-sm text-muted-foreground">
                    Specialized in artificial intelligence and machine learning. Thesis focused on novel deep learning approaches for computer vision tasks.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">M.S. in Artificial Intelligence</h4>
                    <span className="text-sm text-muted-foreground">2011 - 2013</span>
                  </div>
                  <h5 className="text-primary mb-3">Massachusetts Institute of Technology</h5>
                  <p className="text-sm text-muted-foreground">
                    Focused on machine learning algorithms and their applications in solving complex computational problems.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">B.S. in Computer Science</h4>
                    <span className="text-sm text-muted-foreground">2007 - 2011</span>
                  </div>
                  <h5 className="text-primary mb-3">École Polytechnique</h5>
                  <p className="text-sm text-muted-foreground">
                    Graduated with honors. Double major in Computer Science and Mathematics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
