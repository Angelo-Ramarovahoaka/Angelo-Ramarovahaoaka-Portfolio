
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
      role: 'AI & Machine Learning Specialist | Entrepreneur & Innovator',
      cta: 'Discover My Work',
    },
    about: {
      title: 'About Me',
      subtitle: 'Software Engineer & AI Enthusiast',
      description: 'Passionate AI & Machine Learning specialist with a strong entrepreneurial mindset. I focus on developing intelligent systems and innovative solutions that solve real-world problems. My expertise spans from deep learning algorithms to building scalable AI applications and leading tech ventures.',
      skills: 'Skills',
      experience: 'Experience',
      certifications: 'Certifications',
      certificationsSubtitle: 'Professional certifications in AI, Machine Learning, Data Science, and Programming',
      showMore: 'Show More',
      showLess: 'Show Less',
    },
    projects: {
      title: 'AI & ML | WEB Projects',
      subtitle: 'Exploring the Frontiers of Artificial Intelligence',
      viewProject: 'View Project',
      waterQuality: {
        title: 'Water Quality',
        description: 'AI-powered system for testing water potability based on real-time sensor data. This project uses machine learning algorithms to evaluate water quality indicators such as pH, turbidity, temperature, and conductivity, classifying water as potable or non-potable. Designed for environmental monitoring and public health applications.'
      },
      ramaroFish: {
        title: 'RamaroFish',
        description: 'RamaroFish is a digital platform designed to connect all stakeholders in the aquaculture sector — from fish farmers and input suppliers to buyers and experts. The platform offers a centralized dashboard with real-time analytics and business intelligence tools to enhance decision-making, monitor production, and foster collaboration across the aquaculture value chain. It aims to modernize and streamline the aquaculture ecosystem for greater productivity and sustainability.'
      },
      charBio: {
        title: 'Char\'Bio Eco-Charcoal',
        description: 'Sustainable project converting organic waste into eco-friendly charcoal using innovative biochar production techniques for environmental conservation.'
      },
      aiMachine: {
        title: 'AI & Machine',
        description: 'A collection of applied machine learning projects addressing real-world challenges. This includes a book recommendation system, customer segmentation analysis, life expectancy prediction, loan approval prediction, sales forecasting, and spam detection. Each project demonstrates the use of supervised and unsupervised learning, as well as deep learning techniques.'
      }
    },
    ventures: {
      title: 'Entrepreneurial Ventures',
      subtitle: 'Building Innovative Solutions',
      founded: 'Founded',
      current: 'Current',
      ramaroFish: {
        title: 'RamaroFish',
        role: 'Founder & CEO',
        description: 'Innovative aquaculture company specializing in the farming of tilapia and carp. We design and implement smart technologies, including connected sensors and AI-driven solutions, to monitor and optimize fish growth and overall farm performance'
      }
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
      contactInfo: 'Contact Information',
      connectWithMe: 'Connect With Me',
      location: 'Antananarivo, Madagascar'
    },
    footer: {
      rights: 'All Rights Reserved',
      navigation: 'Navigation',
      specialties: 'Specialties',
      connect: 'Connect',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      sitemap: 'Sitemap'
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
      role: 'Spécialiste IA & Machine Learning | Entrepreneur & Innovateur',
      cta: 'Découvrir Mon Travail',
    },
    about: {
      title: 'À Propos de Moi',
      subtitle: 'Ingénieur Logiciel & Passionné d\'IA',
      description: 'Spécialiste passionné en IA et Machine Learning avec un fort esprit entrepreneurial. Je me concentre sur le développement de systèmes intelligents et de solutions innovantes qui résolvent des problèmes concrets. Mon expertise s\'étend des algorithmes d\'apprentissage profond à la création d\'applications IA évolutives et à la direction d\'entreprises technologiques.',
      skills: 'Compétences',
      experience: 'Expérience',
      certifications: 'Certifications',
      certificationsSubtitle: 'Certifications professionnelles en IA, Machine Learning, Science des Données et Programmation',
      showMore: 'Voir Plus',
      showLess: 'Voir Moins',
    },
    projects: {
      title: 'Projets IA & ML | WEB',
      subtitle: 'Explorer les Frontières de l\'Intelligence Artificielle',
      viewProject: 'Voir le Projet',
      waterQuality: {
        title: 'Qualité de l\'Eau',
        description: 'Système alimenté par l\'IA pour tester la potabilité de l\'eau basé sur des données de capteurs en temps réel. Ce projet utilise des algorithmes d\'apprentissage automatique pour évaluer les indicateurs de qualité de l\'eau tels que le pH, la turbidité, la température et la conductivité, classifiant l\'eau comme potable ou non-potable. Conçu pour la surveillance environnementale et les applications de santé publique.'
      },
      ramaroFish: {
        title: 'RamaroFish',
        description: 'RamaroFish est une plateforme numérique conçue pour connecter tous les acteurs du secteur aquacole — des pisciculteurs et fournisseurs d\'intrants aux acheteurs et experts. La plateforme offre un tableau de bord centralisé avec des outils d\'analyse en temps réel et d\'intelligence d\'affaires pour améliorer la prise de décision, surveiller la production et favoriser la collaboration dans toute la chaîne de valeur aquacole. Elle vise à moderniser et rationaliser l\'écosystème aquacole pour une plus grande productivité et durabilité.'
      },
      charBio: {
        title: 'Char\'Bio Éco-Charbon',
        description: 'Projet durable convertissant les déchets organiques en charbon écologique en utilisant des techniques innovantes de production de biochar pour la conservation environnementale.'
      },
      aiMachine: {
        title: 'IA & Machine',
        description: 'Une collection de projets d\'apprentissage automatique appliqués abordant des défis du monde réel. Cela inclut un système de recommandation de livres, une analyse de segmentation client, une prédiction d\'espérance de vie, une prédiction d\'approbation de prêt, une prévision des ventes et une détection de spam. Chaque projet démontre l\'utilisation de l\'apprentissage supervisé et non supervisé, ainsi que des techniques d\'apprentissage profond.'
      }
    },
    ventures: {
      title: 'Entreprises',
      subtitle: 'Construire des Solutions Innovantes',
      founded: 'Fondé',
      current: 'Actuel',
      ramaroFish: {
        title: 'RamaroFish',
        role: 'Fondateur & PDG',
        description: 'Entreprise aquacole innovante spécialisée dans l\'élevage de tilapia et de carpe. Nous concevons et mettons en œuvre des technologies intelligentes, incluant des capteurs connectés et des solutions basées sur l\'IA, pour surveiller et optimiser la croissance des poissons et la performance globale de la ferme'
      }
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
      contactInfo: 'Informations de Contact',
      connectWithMe: 'Connectez-vous avec Moi',
      location: 'Antananarivo, Madagascar'
    },
    footer: {
      rights: 'Tous Droits Réservés',
      navigation: 'Navigation',
      specialties: 'Spécialités',
      connect: 'Connexion',
      privacyPolicy: 'Politique de Confidentialité',
      termsOfService: 'Conditions d\'Utilisation',
      sitemap: 'Plan du Site'
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
