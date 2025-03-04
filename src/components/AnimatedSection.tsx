
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-in' | 'slide-in-right' | 'scale-in';
  delay?: number;
  id?: string;
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className, 
  animation = 'fade-in',
  delay = 0,
  id
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        'section-container opacity-0',
        isVisible ? `animate-${animation}` : '',
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
