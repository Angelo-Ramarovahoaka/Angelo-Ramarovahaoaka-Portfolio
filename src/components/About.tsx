
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
    'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'PyTorch',
    'Data Science', 'Computer Vision', 'Natural Language Processing', 'Neural Networks',
    'System Architecture', 'Docker', 'Linux', 'React', 'NestJs', 'Node.js',
    'Software Engineering', 'Frontend Development', 'Backend Development', 'SEO Optimization', 'C++',
    'Product Strategy', 'Business Development', 'Entrepreneurship', 'Startup Management'
  ];

  const certifications = [
    {
      title: 'PCA Clustering Analysis - Project 1',
      organization: 'Machine Learning Research',
      date: '2024',
      description: 'Principal Component Analysis with K-means clustering visualization showing data dimensionality reduction and pattern recognition techniques.',
      image: '/lovable-uploads/3c6c8b80-14ef-46b4-ae5f-36711d5e82c7.png'
    },
    {
      title: 'PCA Clustering Analysis - Project 2',
      organization: 'Data Science Portfolio',
      date: '2024',
      description: 'Advanced clustering analysis demonstrating proficiency in unsupervised learning algorithms and data visualization techniques.',
      image: '/lovable-uploads/562b3a34-fa94-489f-a49a-dce9e7c3dd91.png'
    },
    {
      title: 'PCA Clustering Analysis - Project 3',
      organization: 'AI Research Project',
      date: '2024',
      description: 'Comprehensive PCA implementation showcasing expertise in statistical learning methods and cluster analysis for pattern discovery.',
      image: '/lovable-uploads/29e5ee32-9af0-4413-a797-46b26f005050.png'
    },
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
              Passionate AI & Machine Learning specialist with a strong entrepreneurial mindset. I focus on developing intelligent systems and innovative solutions that solve real-world problems. My expertise spans from deep learning algorithms to building scalable AI applications and leading tech ventures.
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
                    <h4 className="font-semibold">Founder & CEO</h4>
                    <span className="text-sm text-muted-foreground">2024 – Present</span>
                  </div>
                  <h5 className="text-primary mb-3">RamaroFish</h5>
                  <p className="text-sm text-muted-foreground">
                    Company specializing in fish farming (tilapia, carp). Development of smart solutions (connected sensors, AI for growth monitoring).
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Project Coordinator & Co-founder</h4>
                    <span className="text-sm text-muted-foreground">2023 - 2024</span>
                  </div>
                  <h5 className="text-primary mb-3">SMART KAJY</h5>
                  <p className="text-sm text-muted-foreground">
                    IT club at the Faculty of Science, University of Antananarivo.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Project Leader - Char'Bio</h4>
                    <span className="text-sm text-muted-foreground">2022 - 2023</span>
                  </div>
                  <h5 className="text-primary mb-3">Menafify Ambohipo Tselatra</h5>
                  <p className="text-sm text-muted-foreground">
                    Project focused on converting organic waste into eco-friendly charcoal.
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
