
import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'fr';

// English and French translations
const translations = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      ventures: 'Ventures',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I am',
      role: 'AI & Machine Learning Enthusiast | Entrepreneur & Innovator',
      cta: 'Discover My Work',
    },
    about: {
      title: 'About Me',
      subtitle: 'AI Enthusiast & Innovator',
      description: 'As a passionate AI practitioner and entrepreneur, I blend cutting-edge technology with innovative business solutions. My journey spans machine learning research, product development, and venture creation, always with a focus on impactful applications that solve real-world problems.',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
    },
    projects: {
      title: 'AI & ML Projects',
      subtitle: 'Exploring the Frontiers of Artificial Intelligence',
      viewProject: 'View Project',
    },
    ventures: {
      title: 'Entrepreneurial Ventures',
      subtitle: 'Building Innovative Solutions',
      founded: 'Founded',
      current: 'Current',
    },
    blog: {
      title: 'Blog & Insights',
      subtitle: 'Thoughts on AI, Innovation & Entrepreneurship',
      readMore: 'Read More',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Let\'s Discuss Your Ideas',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      success: 'Message sent successfully!',
      error: 'Error sending message. Please try again.',
    },
    footer: {
      rights: 'All Rights Reserved',
    },
  },
  fr: {
    nav: {
      about: 'À Propos',
      projects: 'Projets',
      ventures: 'Entreprises',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      role: 'Passionné d\'IA & Machine Learning | Entrepreneur & Innovateur',
      cta: 'Découvrir Mon Travail',
    },
    about: {
      title: 'À Propos de Moi',
      subtitle: 'Passionné d\'IA & Innovateur',
      description: 'En tant que praticien passionné de l\'IA et entrepreneur, je combine la technologie de pointe avec des solutions commerciales innovantes. Mon parcours englobe la recherche en apprentissage automatique, le développement de produits et la création d\'entreprises, toujours avec un accent sur les applications impactantes qui résolvent des problèmes concrets.',
      skills: 'Compétences',
      experience: 'Expérience',
      education: 'Formation',
    },
    projects: {
      title: 'Projets IA & ML',
      subtitle: 'Explorer les Frontières de l\'Intelligence Artificielle',
      viewProject: 'Voir le Projet',
    },
    ventures: {
      title: 'Entreprises',
      subtitle: 'Construire des Solutions Innovantes',
      founded: 'Fondé',
      current: 'Actuel',
    },
    blog: {
      title: 'Blog & Réflexions',
      subtitle: 'Pensées sur l\'IA, l\'Innovation & l\'Entrepreneuriat',
      readMore: 'Lire Plus',
    },
    contact: {
      title: 'Contactez-Moi',
      subtitle: 'Discutons de Vos Idées',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer Message',
      success: 'Message envoyé avec succès!',
      error: 'Erreur d\'envoi du message. Veuillez réessayer.',
    },
    footer: {
      rights: 'Tous Droits Réservés',
    },
  },
};

type TranslationsType = typeof translations.en;

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationsType;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState<TranslationsType>({} as TranslationsType);

  useEffect(() => {
    // Check for stored language preference
    const storedLanguage = localStorage.getItem('language') as Language | null;
    
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'fr')) {
      setLanguage(storedLanguage);
    } else {
      // Use browser language or default to English
      const browserLanguage = navigator.language.split('-')[0] as Language;
      setLanguage(browserLanguage === 'fr' ? 'fr' : 'en');
    }
  }, []);

  useEffect(() => {
    // Update translations when language changes
    setTranslations(language === 'en' ? translations.en : translations.fr);
    localStorage.setItem('language', language);
    
    // Update HTML lang attribute
    document.documentElement.lang = language;
  }, [language]);

  // Use the appropriate translation object based on current language
  const t = language === 'en' ? translations.en : translations.fr;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
