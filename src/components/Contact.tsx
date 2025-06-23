import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedSection from './AnimatedSection';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t.contact.success,
        description: `Thank you ${formData.name}, I'll get back to you soon!`,
      });
      
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <AnimatedSection id="contact" className="bg-background">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 rounded-full bg-secondary text-sm font-medium mb-4">
          {t.contact.subtitle}
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold">
          {t.contact.title}
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="glass-card p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t.contact.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t.contact.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 hover-scale disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>{t.contact.send}</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className='flex flex-col justify-center'>
            <h3 className="text-xl font-bold mb-6">{t.contact.contactInfo}</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a 
                    href="mailto:angeloramarovahoaka@gmail.com" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    angeloramarovahoaka@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone / WhatsApp</p>
                  <a 
                    href="https://wa.me/261342034496" 
                    className="text-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +261 34 20 344 96
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="text-foreground">{t.contact.location}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">{t.contact.connectWithMe}</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/angelo-ramarovahoaka-058389332/" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              
              <a 
                href="https://wa.me/261342034496" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
              
              <a 
                href="https://github.com/Angelo-Ramarovahoaka" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
