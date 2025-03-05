
import * as React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

type LanguageSwitchProps = {
  className?: string;
};

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ className }) => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      className={cn(
        'rounded-full px-3 py-1 text-sm font-medium transition-all duration-300 ease-in-out ',
        'bg-secondary text-foreground hover:bg-secondary/80 text-[#ff014f] font-bold',
        className
      )}
      aria-label={language === 'en' ? 'Switch to French' : 'Switch to English'}
    >
      {language === 'en' ? 'FR' : 'EN'}
    </button>
  );
};

export default LanguageSwitch;
