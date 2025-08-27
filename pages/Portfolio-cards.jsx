import { useState, useEffect, useRef } from 'react';
import { Eye, ExternalLink, Github } from 'lucide-react';

// Mock project data - replace with your actual data
const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    description: "Modern e-commerce solution with React and Node.js",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
    description: "Secure mobile banking application with biometric auth",
    tags: ["React Native", "Firebase", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "AI Dashboard",
    category: "Data Visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    description: "Interactive dashboard for AI model performance tracking",
    tags: ["Vue.js", "D3.js", "Python"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Brand Identity System",
    category: "Design",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop",
    description: "Complete brand identity for tech startup",
    tags: ["Figma", "Illustrator", "Branding"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Crypto Trading Bot",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
    description: "Automated trading bot with advanced algorithms",
    tags: ["Python", "TensorFlow", "API"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "VR Experience",
    category: "Immersive Tech",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&h=300&fit=crop",
    description: "Virtual reality experience for education",
    tags: ["Unity", "C#", "Oculus SDK"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

const ProjectCard = ({ project, index }) => {
  const [cardRef, isCardVisible] = useScrollAnimation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
        isCardVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,1) 100%)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px] rounded-2xl">
        <div className="w-full h-full bg-white rounded-2xl"></div>
      </div>
      
      {/* Image container with enhanced effects */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={project.image} 
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110 brightness-110' : 'scale-100'
          }`}
        />
        
        {/* Overlay with glassmorphism effect */}
        <div className={`absolute inset-0 backdrop-blur-sm transition-all duration-500 flex items-center justify-center ${
          isHovered 
            ? 'bg-gradient-to-br from-blue-600/90 via-purple-600/80 to-pink-600/90 opacity-100' 
            : 'bg-black/0 opacity-0'
        }`}>
          <div className={`transform transition-all duration-500 ${
            isHovered ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}>
            <div className="flex gap-4">
              <button className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 hover:bg-white/30 hover:scale-110 transition-all duration-300">
                <Eye className="w-5 h-5 text-white" />
              </button>
              <button className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 hover:bg-white/30 hover:scale-110 transition-all duration-300">
                <ExternalLink className="w-5 h-5 text-white" />
              </button>
              <button className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 hover:bg-white/30 hover:scale-110 transition-all duration-300">
                <Github className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating category tag */}
        <div className={`absolute top-4 left-4 transform transition-all duration-500 ${
          isHovered ? '-translate-y-1' : 'translate-y-0'
        }`}>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content section with enhanced typography */}
      <div className="relative p-6 bg-gradient-to-br from-white via-gray-50 to-white">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex} 
              className={`text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700 transform transition-all duration-300 hover:scale-105 ${
                isHovered ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700' : ''
              }`}
              style={{ transitionDelay: `${tagIndex * 50}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform transition-all duration-700 group-hover:w-full w-0"></div>
      </div>
    </div>
  );
};

export default function EnhancedPortfolio() {
  const [headerRef, isHeaderVisible] = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced header with scroll animation */}
        <div 
          ref={headerRef}
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isHeaderVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio Showcase
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Featured Work
          </h2>
          
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            A curated collection of projects that demonstrate innovation, technical excellence, 
            and creative problem-solving across various domains
          </p>

          {/* Animated underline */}
          <div className={`mx-auto mt-8 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transform transition-all duration-1000 ${
            isHeaderVisible ? 'w-24' : 'w-0'
          }`}></div>
        </div>

        {/* Enhanced project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${
          isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}