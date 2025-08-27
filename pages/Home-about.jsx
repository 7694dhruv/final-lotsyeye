import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, TrendingUp, Users, DollarSign, Target, Award, Zap } from 'lucide-react';

const EnhancedAboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    traffic: 0,
    clients: 0,
    revenue: 0
  });
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counter animations
          animateCounters();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation function
  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = { traffic: 250, clients: 1000, revenue: 2 };
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setAnimatedStats({
        traffic: Math.floor(targets.traffic * easeOut),
        clients: Math.floor(targets.clients * easeOut),
        revenue: (targets.revenue * easeOut).toFixed(1)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats({
          traffic: targets.traffic,
          clients: targets.clients,
          revenue: targets.revenue
        });
      }
    }, stepDuration);
  };

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            
            {/* Main heading with staggered animation */}
            <div className={`transition-all duration-1200 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-8 leading-tight">
                Elevate Your Brand's Online Presence with Expert SEO for Sustainable Growth
              </h2>
            </div>
            
            {/* Feature points with staggered animations */}
            <div className="space-y-6">
              {[
                "We have specialized knowledge and experience in optimizing websites.",
                "As a reputable SEO agency, we can help improve a website's rankings",
                "We have access to professional tools for research, analytics and more."
              ].map((text, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-4 transition-all duration-800 transform ${
                    isVisible 
                      ? 'translate-x-0 opacity-100' 
                      : '-translate-x-6 opacity-0'
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="relative">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5 relative z-10" />
                    <div className="absolute inset-0 bg-green-200 rounded-full animate-ping opacity-20"></div>
                  </div>
                  <p className="text-gray-700 text-lg">{text}</p>
                </div>
              ))}
            </div>

            {/* Benefits grid with hover effects */}
            <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="font-bold text-gray-900">Why Choose Us</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <Zap className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      Specialized knowledge and experience
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      Professional tools for research & analytics
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      Proven track record of improved rankings
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 text-purple-600 mr-3" />
                    <h3 className="font-bold text-gray-900">Benefits for You</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <Zap className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      More targeted traffic through optimization
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      Higher satisfaction & lower bounce rates
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      Enhanced brand credibility & trust
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats Card */}
          <div className={`relative transition-all duration-1200 delay-300 transform ${
            isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-10 opacity-0 scale-95'
          }`}>
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 relative overflow-hidden">
              
              {/* Card background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-8 relative z-10">
                Boost Your Online Visibility
              </h3>
              
              <div className="space-y-8 relative z-10">
                
                {/* Traffic stat */}
                <div className={`flex items-center space-x-6 group cursor-pointer transition-all duration-500 delay-800 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 relative">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                    <div className="absolute inset-0 bg-blue-300 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 tabular-nums">
                      {animatedStats.traffic}%
                    </div>
                    <div className="text-gray-600 font-medium">Average Traffic Increase</div>
                  </div>
                </div>
                
                {/* Clients stat */}
                <div className={`flex items-center space-x-6 group cursor-pointer transition-all duration-500 delay-1000 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 relative">
                    <Users className="w-8 h-8 text-green-600" />
                    <div className="absolute inset-0 bg-green-300 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-green-600 tabular-nums">
                      {animatedStats.clients}+
                    </div>
                    <div className="text-gray-600 font-medium">Happy Clients</div>
                  </div>
                </div>
                
                {/* Revenue stat */}
                <div className={`flex items-center space-x-6 group cursor-pointer transition-all duration-500 delay-1200 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 relative">
                    <DollarSign className="w-8 h-8 text-purple-600" />
                    <div className="absolute inset-0 bg-purple-300 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-600 tabular-nums">
                      ${animatedStats.revenue}M+
                    </div>
                    <div className="text-gray-600 font-medium">Revenue Generated</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-40"></div>
              <div className="absolute top-8 right-8 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-40"></div>
            </div>

            {/* Floating card decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-pink-200 to-red-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EnhancedAboutSection;