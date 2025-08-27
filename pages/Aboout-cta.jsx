import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Zap, Star } from 'lucide-react';

const EnhancedCTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('cta-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      id="cta-section"
      className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className={`absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl transition-all duration-1000 ${isVisible ? 'animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-20 right-20 w-40 h-40 bg-pink-400/10 rounded-full blur-xl transition-all duration-1000 delay-300 ${isVisible ? 'animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400/10 rounded-full blur-xl transition-all duration-1000 delay-500 ${isVisible ? 'animate-pulse' : 'opacity-0'}`}></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transition: 'background-image 0.3s ease'
          }}></div>
        </div>

        {/* Floating Icons */}
        <div className={`absolute top-16 right-1/4 text-white/20 transition-all duration-1000 delay-700 ${isVisible ? 'animate-bounce' : 'opacity-0 translate-y-10'}`}>
          <Sparkles size={24} />
        </div>
        <div className={`absolute bottom-32 left-1/3 text-white/20 transition-all duration-1000 delay-900 ${isVisible ? 'animate-bounce' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '2s' }}>
          <Zap size={28} />
        </div>
        <div className={`absolute top-1/3 right-16 text-white/20 transition-all duration-1000 delay-1100 ${isVisible ? 'animate-bounce' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '4s' }}>
          <Star size={20} />
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Get In Touch With Us
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Today
            </span>
          </h2>
        </div>

        {/* Subtitle */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Have a question, suggestion, or just want to say hi? 
            <span className="text-white font-semibold"> We're here and happy to hear from you!</span>
          </p>
        </div>

        {/* Stats or Features */}
        <div className={`flex flex-wrap justify-center gap-8 mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">24/7</div>
            <div className="text-blue-200 text-sm">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400">1000+</div>
            <div className="text-blue-200 text-sm">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">99%</div>
            <div className="text-blue-200 text-sm">Satisfaction</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button 
            className="group relative bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden"
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(255, 255, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              Start Your Project
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>

          <button className="group relative border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-3">
              Schedule Consultation
              <Sparkles className="group-hover:rotate-180 transition-transform duration-500" size={20} />
            </span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>

        {/* Additional Trust Indicators */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-blue-200 text-sm mb-4">Trusted by industry leaders</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="w-24 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold text-xs">COMPANY</span>
            </div>
            <div className="w-24 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold text-xs">BRAND</span>
            </div>
            <div className="w-24 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold text-xs">CORP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-white/10"></path>
        </svg>
      </div>
    </div>
  );
};

export default EnhancedCTASection;