import React, { useState, useEffect, useRef } from 'react';

const EnhancedStatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    projects: 0,
    satisfaction: 0,
    experience: 0,
    support: 0
  });
  const sectionRef = useRef(null);

  const finalValues = {
    projects: 250,
    satisfaction: 98,
    experience: 5,
    support: 24
  };

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic

        setAnimatedValues({
          projects: Math.floor(finalValues.projects * easeProgress),
          satisfaction: Math.floor(finalValues.satisfaction * easeProgress),
          experience: Math.floor(finalValues.experience * easeProgress),
          support: Math.floor(finalValues.support * easeProgress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedValues(finalValues);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const StatCard = ({ value, suffix, label, color, delay, icon }) => (
    <div 
      className={`group cursor-pointer transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 group-hover:border-white/40 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl overflow-hidden">
        {/* Background gradient effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        
        {/* Animated border glow */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-30 blur transition-opacity duration-500 -z-10`}></div>
        
        {/* Icon */}
        <div className={`text-6xl mb-4 transition-transform duration-500 group-hover:scale-110 ${color.replace('from-', 'text-').replace(' to-blue-600', '')}`}>
          {icon}
        </div>
        
        {/* Animated number */}
        <div className="relative">
          <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${color} bg-clip-text text-transparent transition-all duration-500 group-hover:scale-110`}>
            {value}{suffix}
          </div>
          
          {/* Sparkle effect */}
          <div className="absolute -top-2 -right-2 w-6 h-6">
            <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500`}></div>
            <div className={`absolute inset-1 bg-gradient-to-r ${color} rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-700`}></div>
          </div>
        </div>
        
        <div className="text-white/80 group-hover:text-white transition-colors duration-300 text-lg font-medium">
          {label}
        </div>
        
        {/* Progress bar */}
        <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
            style={{ width: isVisible ? '100%' : '0%' }}
          ></div>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={sectionRef} className="relative py-24 px-4 overflow-hidden" style={{ background: 'linear-gradient(135deg, #654DF6 0%, #5a42d4 50%, #4a37b8 100%)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section title */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-4">
            Proven Excellence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            value={animatedValues.projects}
            suffix="+"
            label="Projects Completed"
            color="from-blue-400 to-blue-600"
            delay={0}
            icon="🚀"
          />
          <StatCard
            value={animatedValues.satisfaction}
            suffix="%"
            label="Client Satisfaction"
            color="from-purple-400 to-purple-600"
            delay={200}
            icon="⭐"
          />
          <StatCard
            value={animatedValues.experience}
            suffix="+"
            label="Years Experience"
            color="from-green-400 to-green-600"
            delay={400}
            icon="💼"
          />
          <StatCard
            value={animatedValues.support}
            suffix="/7"
            label="Support Available"
            color="from-yellow-400 to-orange-500"
            delay={600}
            icon="🔧"
          />
        </div>

        {/* Bottom decorative element */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 text-white/60 text-lg">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-white/40"></div>
            <span>Trusted by businesses worldwide</span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-white/40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedStatsSection;