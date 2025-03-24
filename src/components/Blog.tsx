
// import React from 'react';
// import { useLanguage } from '@/context/LanguageContext';
// import AnimatedSection from './AnimatedSection';
// import { Calendar, ArrowRight } from 'lucide-react';

// const Blog: React.FC = () => {
//   const { t } = useLanguage();
  
//   const blogPosts = [
//     {
//       title: 'The Future of Generative AI in Creative Industries',
//       excerpt: 'Exploring how generative AI models are transforming design, content creation, and artistic expression across various industries.',
//       date: '2023-10-15',
//       image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop',
//       category: 'AI Trends',
//       link: '#',
//     },
//     {
//       title: 'Building Responsible AI Systems: Ethics and Governance',
//       excerpt: 'A discussion on the ethical considerations and governance frameworks necessary for developing AI systems that are fair, transparent, and accountable.',
//       date: '2023-09-02',
//       image: 'https://images.unsplash.com/photo-1679404539912-8121c74c8bf4?q=80&w=2070&auto=format&fit=crop',
//       category: 'AI Ethics',
//       link: '#',
//     },
//     {
//       title: 'From Idea to Startup: Lessons Learned as a Tech Entrepreneur',
//       excerpt: 'Personal insights and practical advice from my journey of taking innovative ideas from concept to successful tech startups.',
//       date: '2023-07-18',
//       image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop',
//       category: 'Entrepreneurship',
//       link: '#',
//     },
//   ];
  
//   const formatDate = (dateString: string) => {
//     const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };
  
//   return (
//     <AnimatedSection id="blog" className="bg-secondary/30">
//       <div className="text-center mb-16">
//         <div className="inline-block px-4 py-1 rounded-full bg-secondary text-sm font-medium mb-4">
//           {t.blog.subtitle}
//         </div>
//         <h2 className="text-3xl md:text-4xl font-display font-bold">
//           {t.blog.title}
//         </h2>
//       </div>
      
//       <div className="grid md:grid-cols-3 gap-8">
//         {blogPosts.map((post, index) => (
//           <a 
//             key={index} 
//             href={post.link}
//             className="glass-card rounded-xl overflow-hidden hover-scale flex flex-col h-full"
//           >
//             <div className="h-48 overflow-hidden">
//               <img 
//                 src={post.image} 
//                 alt={post.title}
//                 className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//               />
//             </div>
            
//             <div className="p-6 flex flex-col flex-grow">
//               <div className="flex items-center gap-4 mb-4">
//                 <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
//                   {post.category}
//                 </span>
//                 <div className="flex items-center gap-1 text-xs text-muted-foreground">
//                   <Calendar size={12} />
//                   <span>{formatDate(post.date)}</span>
//                 </div>
//               </div>
              
//               <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
//               <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
//                 {post.excerpt}
//               </p>
              
//               <div className="flex items-center text-sm font-medium text-primary group">
//                 <span>{t.blog.readMore}</span>
//                 <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
//               </div>
//             </div>
//           </a>
//         ))}
//       </div>
      
//       <div className="text-center mt-10">
//         <a 
//           href="#"
//           className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
//         >
//           View All Posts
//           <ArrowRight size={16} />
//         </a>
//       </div>
//     </AnimatedSection>
//   );
// };

// export default Blog;
