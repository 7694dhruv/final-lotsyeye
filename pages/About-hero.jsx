import { Users } from "lucide-react";
import { useState, useEffect } from "react";

export default function EnhancedAboutHeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure proper animation trigger
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-sky-500 via-blue-200 to-indigo-400 py-32 px-4 min-h-screen flex items-center">
      {/* Custom CSS for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg); 
              opacity: 0.4;
            }
            50% { 
              transform: translateY(-20px) rotate(180deg); 
              opacity: 0.6;
            }
          }
          
          @keyframes customPulse {
            0%, 100% { 
              opacity: 0.1;
              transform: scale(1);
            }
            50% { 
              opacity: 0.3;
              transform: scale(1.05);
            }
          }
          
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .floating-particle {
            animation: float 3s ease-in-out infinite;
          }
          
          .custom-pulse {
            animation: customPulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          
          .gradient-text {
            background: linear-gradient(-45deg, #2563eb, #0ea5e9, #06b6d4, #3b82f6);
            background-size: 400% 400%;
            animation: gradientShift 3s ease infinite;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        `
      }} />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-sky-500 rounded-full blur-3xl custom-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-sky-300 to-cyan-400 rounded-full blur-3xl custom-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full blur-3xl custom-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            animationDelay: '2s'
          }}
        ></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center z-10">
        <div className={`mb-8 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-white to-sky-100 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 hover:rotate-12 group">
            <Users className="w-12 h-12 text-blue-600 group-hover:text-sky-500 transition-colors duration-300" />
          </div>
        </div>
        
        <h1 className={`text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight transform transition-all duration-1000 delay-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="inline-block hover:scale-105 transition-transform duration-300">
            Grow Traffic &
          </span>
          <br />
          <span className="gradient-text inline-block hover:scale-105 transition-transform duration-300">
            Increase Revenue
          </span>
        </h1>
        
        <p className={`text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-10 transform transition-all duration-1000 delay-500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          We're a team of SEO experts dedicated to helping businesses achieve sustainable growth through strategic optimization and data-driven results.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-sky-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-sky-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
          <button className="px-8 py-4 border-2 border-blue-600 text-blue-700 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
            View Our Work
          </button>
        </div>

        {/* Stats */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "250%", label: "Average ROI Increase" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 hover:-translate-y-2 transition-transform duration-300 p-6 rounded-lg hover:bg-white/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}