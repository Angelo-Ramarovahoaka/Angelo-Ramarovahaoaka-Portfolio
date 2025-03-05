
import * as React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'fr';

// English and French translations
const translationsData = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      ventures: 'Ventures',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I am',
      role: 'Software Engineer | AI & Machine Learning Enthusiast | Entrepreneur & Innovator',
      cta: 'Discover My Work',
    },
    about: {
      title: 'About Me',
      subtitle: 'Software Engineer & AI Enthusiast',
      description: 'As a passionate Software Engineer and AI practitioner, I blend cutting-edge technology with innovative business solutions. My journey spans software development, machine learning research, product development, and venture creation, always with a focus on impactful applications that solve real-world problems.',
      skills: 'Skills',
      experience: 'Experience',
      certifications: 'Certifications',
      showMore: 'Show More',
      showLess: 'Show Less',
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
      each_venture:[{
        title: 'RamaroFish',
        role: 'Founder & CEO',
        description: 'RamaroFish is a platform for managing and marketing fish products, directly connecting fish farmers and buyers. It allows producers to efficiently manage their business, optimize the sale and distribution of their products, while ensuring better visibility on the market. Thanks to dedicated tools, RamaroFish facilitates promotion, inventory monitoring and transactions, ensuring access to quality products in quantity.',
        year: '2024',
        status: 'current',
        link: 'https://ramaro-fish.vercel.app/',
        image: 'public/image/venture/ramarofish.png',
      },],
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
      contact: 'Contact',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      role: 'Ingénieur Logiciel | Passionné d\'IA & Machine Learning | Entrepreneur & Innovateur',
      cta: 'Découvrir Mon Travail',
    },
    about: {
      title: 'À Propos de Moi',
      subtitle: 'Ingénieur Logiciel & Passionné d\'IA',
      description: 'En tant qu\'ingénieur logiciel et praticien passionné de l\'IA, je combine la technologie de pointe avec des solutions commerciales innovantes. Mon parcours englobe le développement logiciel, la recherche en apprentissage automatique, le développement de produits et la création d\'entreprises, toujours avec un accent sur les applications impactantes qui résolvent des problèmes concrets.',
      skills: 'Compétences',
      experience: 'Expérience',
      certifications: 'Certifications',
      showMore: 'Voir Plus',
      showLess: 'Voir Moins',
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
      each_venture:[{
        title: 'RamaroFish',
        role: 'Fondateur & CEO',
        description: 'RamaroFish est une plateforme de gestion et de commercialisation des produits piscicoles, mettant en relation directe les pisciculteurs et les acheteurs. Elle permet aux producteurs de gérer efficacement leur activité, d’optimiser la vente et la distribution de leurs produits, tout en assurant une meilleure visibilité sur le marché. Grâce à des outils dédiés, RamaroFish facilite la promotion, le suivi des stocks et les transactions, garantissant un accès aux produits de qualité en quantité.',
        year: '2024',
        status: 'actuel',
        link: 'https://ramaro-fish.vercel.app/',
        image: 'public/image/venture/ramarofish.png',
      },],
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

type TranslationsType = typeof translationsData.en;

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationsType;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState<TranslationsType>(translationsData.en);

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
    setTranslations(language === 'en' ? translationsData.en : translationsData.fr);
    localStorage.setItem('language', language);
    
    // Update HTML lang attribute
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations }}>
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
