
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/20 py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-display font-bold tracking-tight text-gradient">
              Angelo R.
            </a>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              AI & Machine Learning Enthusiast | Entrepreneur & Innovator
            </p>
          </div>
          
          <a 
            href="#"
            className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-sm"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
          <div>
            <h4 className="text-sm font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a></li>
              <li><a href="#ventures" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Ventures</a></li>
              <li><a href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Projects</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">NeuralTalk</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">VisionQuest</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">PredictFlow</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AutoML Platform</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Ventures</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">TechVision AI</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">ML Ventures</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">DataSphere Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Medium</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Angelo Ramarovahoaka. {t.footer.rights}.
          </p>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
