import { useState, useEffect } from 'react';
import { ChevronDown, Download, Eye, Sparkles } from 'lucide-react';

export default function EnhancedHeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative pt-16 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/10 to-indigo-100/10 rounded-full blur-3xl"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Greeting */}
              <div 
                className={`transform transition-all duration-1000 delay-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-blue-700 text-sm font-medium">Hello, I'm available for work</p>
                </div>
              </div>

              {/* Name with gradient text */}
              <div 
                className={`transform transition-all duration-1000 delay-400 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent animate-pulse">
                    Mark Henry
                  </span>
                </h1>
              </div>

              {/* Title with typewriter effect */}
              <div 
                className={`transform transition-all duration-1000 delay-600 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <h2 className="text-3xl lg:text-4xl font-light text-gray-600 relative">
                  Product Designer
                  <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded animate-pulse w-full"></div>
                </h2>
              </div>

              {/* Description */}
              <div 
                className={`transform transition-all duration-1000 delay-800 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <p className="text-gray-600 text-xl leading-relaxed max-w-lg">
                  Creating designs that not only reflect who you are and what you stand for, 
                  but experiences that truly resonate with your audience. 
                  <span className="text-blue-600 font-medium"> Let's build something amazing together.</span>
                </p>
              </div>
            </div>
            
            {/* Enhanced Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </div>
                <div className="absolute inset-0 -top-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
              </button>
              
              <button className="group relative px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-lg">
                <div className="flex items-center space-x-2">
                  <Eye className="w-5 h-5" />
                  <span>View Portfolio</span>
                </div>
              </button>
            </div>

            {/* Stats */}
            <div 
              className={`grid grid-cols-3 gap-6 pt-8 transform transition-all duration-1000 delay-1200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              {[
                { number: '50+', label: 'Projects' },
                { number: '3+', label: 'Years Exp' },
                { number: '100%', label: 'Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Enhanced Image */}
          <div 
            className={`relative transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
          >
            <div className="relative">
              {/* Main image container with 3D effect */}
              <div 
                className="relative w-full h-96 lg:h-[550px] bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-200 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 0.1}deg) rotateX(${mousePosition.y * 0.1}deg)`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face" 
                  alt="Mark Henry" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                
                {/* Glowing border */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-blue-200 ring-opacity-50"></div>
              </div>

              {/* Floating status card */}
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/20 animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <span className="text-gray-800 font-semibold block">Available for work</span>
                    <span className="text-gray-500 text-sm">Responds quickly</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
          <span className="text-sm font-medium">Scroll down</span>
          <ChevronDown className="w-5 h-5 animate-pulse" />
        </div>
      </div>
    </section>
  );
}