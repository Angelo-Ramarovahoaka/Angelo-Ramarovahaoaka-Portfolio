
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import ModeToggle from './ModeToggle';
import LanguageSwitch from './LanguageSwitch';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.ventures, href: '#ventures' },
    { label: t.nav.contact, href: '#contact' },
  ];
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold tracking-tight text-gradient text-red-500">
          Angelo R.
        </a>
        
        {isMobile ? (
          <>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {isMobileMenuOpen && (
              <div className="fixed inset-x-0 top-0 top-[60px] z-50 glass animate-fade-in p-6 h-screen">
                <nav className="flex flex-col space-y-6 text-center text-lg mt-10">
                  {navItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="py-2 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="flex justify-center space-x-4 mt-6">
                    <ModeToggle />
                    <LanguageSwitch />
                  </div>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-16">
            <nav className="flex space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={cn(
                    'relative py-1 font-medium text-sm transition-colors',
                    'after:absolute after:w-full after:h-0.5 after:bg-primary',
                    'after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right',
                    'after:transition-transform after:duration-300 hover:after:scale-x-100',
                    'hover:after:origin-bottom-left hover:text-primary'
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-3">
              <ModeToggle />
              <LanguageSwitch />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
