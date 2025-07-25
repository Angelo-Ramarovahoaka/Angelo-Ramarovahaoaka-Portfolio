
import * as React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUp } from 'lucide-react';
import bgImg from '../../public/image/bg.png';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/20 py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className='flex flex-row space-x-4'>
            <div className="relative z-10 w-8 h-8 md:w-14 md:h-14 rounded-full overflow-hidden mb-6 animate-fade-in bg-[#ff014f]">
              <img 
                src={bgImg}
                alt="Angelo Ramarovahoaka" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mb-6 md:mb-0">
              <a href="#" className="text-2xl font-display font-bold tracking-tight text-gradient">
                Angelo R.
              </a>
              <p className="mt-2 text-sm text-muted-foreground max-w-md">
                AI & Machine Learning Specialist | Entrepreneur & Innovator
              </p>
            </div>
          </div>
          
          <a 
            href="#"
            className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-sm"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 m-10 pb-10 place-items-start justify-center">
          <div>
            <h4 className="text-sm font-semibold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-[#ff014f] transition-colors">{t.nav.about}</a></li>
              <li><a href="#projects" className="text-sm text-muted-foreground hover:text-[#ff014f] transition-colors">{t.nav.projects}</a></li>
              <li><a href="#ventures" className="text-sm text-muted-foreground hover:text-[#ff014f] transition-colors">{t.nav.ventures}</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-[#ff014f] transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">{t.nav.projects}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-[#ff014f] transition-colors">RamaroFish</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-[#ff014f] transition-colors">Water Quality Test</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-[#ff014f] transition-colors">NeuralTalk</a></li>
            </ul>
          </div>
          
          <div> 
            <h4 className="text-sm font-semibold mb-4">{t.footer.specialties}</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-muted-foreground">Artificial Intelligence</span></li>
              <li><span className="text-sm text-muted-foreground">Machine Learning</span></li>
              <li><span className="text-sm text-muted-foreground">Entrepreneurship</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">{t.footer.connect}</h4>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/in/angelo-ramarovahoaka-058389332/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-[#ff014f] transition-colors">LinkedIn</a></li>
              <li><a href="https://wa.me/261342034496" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-[#ff014f] transition-colors">WhatsApp</a></li>
              <li><a href="https://github.com/Angelo-Ramarovahoaka" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-[#ff014f] transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Angelo Ramarovahoaka. {t.footer.rights}.
          </p>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-[#ff014f] transition-colors">{t.footer.privacyPolicy}</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-[#ff014f] transition-colors">{t.footer.termsOfService}</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-[#ff014f] transition-colors">{t.footer.sitemap}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
