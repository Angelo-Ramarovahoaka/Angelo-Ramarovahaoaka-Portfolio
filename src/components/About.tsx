
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
  
  const skills = [
    'System Architecture','Docker','linux',
    'Software Engineering', 'Frontend Development','Backend Development','React','NestJs',  'SEO Optimization','c++',
    'Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'sklearn',
    'Product Strategy', 'Business Development', 'Entrepreneurship'
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      organization: 'Sololearn',
      date: '2023',
      description: 'Professional certification for designing distributed systems on AWS.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'TensorFlow Developer Certificate',
      organization: 'Google',
      date: '2022',
      description: 'Certification in building and training neural networks using TensorFlow.',
      image: 'https://images.unsplash.com/photo-1677442135743-d0269590c653?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Professional Data Engineer',
      organization: 'Google Cloud',
      date: '2022',
      description: 'Certification for designing and building data processing systems on Google Cloud.',
      image: 'https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=2062&auto=format&fit=crop'
    },
    {
      title: 'Microsoft Certified: Azure AI Engineer Associate',
      organization: 'Microsoft',
      date: '2021',
      description: 'Professional certification for implementing Azure AI solutions.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop'
    },
    {
      title: 'Deep Learning Specialization',
      organization: 'DeepLearning.AI',
      date: '2020',
      description: 'Advanced specialization in deep learning techniques and applications.',
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop'
    },
    {
      title: 'Machine Learning Engineer Nanodegree',
      organization: 'Udacity',
      date: '2019',
      description: 'Comprehensive program covering the fundamentals of machine learning.',
      image: 'https://images.unsplash.com/photo-1656268164012-119304af0c69?q=80&w=2011&auto=format&fit=crop'
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
                    <h4 className="font-semibold">Senior Software Engineer</h4>
                    <span className="text-sm text-muted-foreground">2021 - Present</span>
                  </div>
                  <h5 className="text-primary mb-3">TechVision AI</h5>
                  <p className="text-sm text-muted-foreground">
                    Leading development of scalable software solutions and AI systems. Architecting cloud-native applications using React, Node.js, and AWS services while implementing machine learning models for real-world applications.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">AI Research Lead</h4>
                    <span className="text-sm text-muted-foreground">2020 - 2021</span>
                  </div>
                  <h5 className="text-primary mb-3">TechVision AI</h5>
                  <p className="text-sm text-muted-foreground">
                    Led a team of researchers focusing on developing cutting-edge AI solutions for real-world applications. Specialized in natural language processing and computer vision technologies.
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
                    <h4 className="font-semibold">Software Engineer</h4>
                    <span className="text-sm text-muted-foreground">2016 - 2018</span>
                  </div>
                  <h5 className="text-primary mb-3">DataSphere Inc.</h5>
                  <p className="text-sm text-muted-foreground">
                    Developed full-stack applications and data-driven solutions utilizing modern frameworks and machine learning algorithms for predictive analytics.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold">{t.about.certifications}</h3>
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
