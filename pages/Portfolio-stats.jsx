import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Globe, TrendingUp, Star, CheckCircle, Zap, Heart } from 'lucide-react';

const EnhancedStatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({});
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: Users,
      value: 50000,
      suffix: '+',
      label: 'Happy Customers',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Award,
      value: 150,
      suffix: '+',
      label: 'Awards Won',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Globe,
      value: 95,
      suffix: '%',
      label: 'Global Reach',
      color: 'from-pink-500 to-red-600'
    },
    {
      icon: TrendingUp,
      value: 200,
      suffix: '%',
      label: 'Growth Rate',
      color: 'from-green-500 to-blue-600'
    }
  ];

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
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

  // Counter animation effect
  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let startValue = 0;
        const endValue = stat.value;
        const duration = 2000; // 2 seconds
        const increment = endValue / (duration / 16); // 60fps

        const timer = setInterval(() => {
          startValue += increment;
          if (startValue >= endValue) {
            startValue = endValue;
            clearInterval(timer);
          }
          
          setAnimatedValues(prev => ({
            ...prev,
            [index]: Math.floor(startValue)
          }));
        }, 16);

        return () => clearInterval(timer);
      });
    }
  }, [isVisible]);

  const FloatingShape = ({ delay, duration = "20s", size = "w-4 h-4" }) => (
    <div
      className={`absolute ${size} bg-gradient-to-r from-blue-600 to-purple-400 rounded-full blur-sm animate-pulse`}
      style={{
        animation: `float ${duration} ease-in-out infinite`,
        animationDelay: delay,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    />
  );

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-300  via-blue-300 to-indigo-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        
        {/* Floating shapes */}
        <FloatingShape delay="0s" />
        <FloatingShape delay="2s" size="w-6 h-6" />
        <FloatingShape delay="4s" size="w-3 h-3" />
        <FloatingShape delay="6s" size="w-5 h-5" />
        <FloatingShape delay="8s" size="w-2 h-2" />
      </div>

      <section ref={sectionRef} className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Star size={16} className="text-yellow-400" />
              <span>Trusted by thousands worldwide</span>
            </div>
            <h2 className={`text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Numbers That 
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Speak</span>
            </h2>
            <p className={`text-xl text-white/80 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Our achievements reflect the trust and success of our community
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  {/* Card Background with Glassmorphism */}
                  <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                    
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                    
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={28} className="text-white" />
                      </div>
                      
                      {/* Floating particles around icon */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{ animationDelay: '0.1s' }} />
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{ animationDelay: '0.3s' }} />
                    </div>

                    {/* Value */}
                    <div className="space-y-2">
                      <div className="text-4xl lg:text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                        {isVisible ? (
                          <span className="tabular-nums">
                            {(animatedValues[index] || 0).toLocaleString()}
                            <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                              {stat.suffix}
                            </span>
                          </span>
                        ) : (
                          <span>0{stat.suffix}</span>
                        )}
                      </div>
                      
                      {/* Label */}
                      <div className="text-white/80 font-medium text-lg group-hover:text-white transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>

                    {/* Progress indicator */}
                    <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-2000 ease-out ${isVisible ? 'w-full' : 'w-0'}`}
                        style={{ transitionDelay: `${600 + index * 200}ms` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span>Join Our Success Story</span>
              <Zap size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(90deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
          75% { transform: translateY(-30px) rotate(270deg); }
        }
      `}</style>
    </div>
  );
};

export default EnhancedStatsSection;