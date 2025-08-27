import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Search, TrendingUp, Target, Zap, BarChart3 } from 'lucide-react';

const EnhancedKeywordSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate items one by one
          setTimeout(() => setAnimatedItems(prev => new Set([...prev, 0])), 100);
          setTimeout(() => setAnimatedItems(prev => new Set([...prev, 1])), 300);
          setTimeout(() => setAnimatedItems(prev => new Set([...prev, 2])), 500);
          setTimeout(() => setAnimatedItems(prev => new Set([...prev, 3])), 700);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: TrendingUp, text: "Boosts organic traffic growth", color: "text-emerald-600" },
    { icon: Target, text: "Improves content relevancy and engagement", color: "text-blue-600" },
    { icon: Zap, text: "Reveals new content opportunities", color: "text-purple-600" },
    { icon: BarChart3, text: "Outranks competitors on high-value search terms", color: "text-orange-600" }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-300"></div>
      <div className="absolute top-40 left-10 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-700"></div>
      <div className="absolute bottom-20 right-20 w-5 h-5 bg-pink-400 rounded-full animate-bounce delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="relative">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-8 leading-tight">
                  Why Keyword Research Matters
                </h2>
                
                {/* Animated underline */}
                <div className={`h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8 transition-all duration-1000 ${isVisible ? 'w-24' : 'w-0'}`}></div>
                
                <p className="text-xl text-gray-700 mb-12 leading-relaxed font-light">
                  Without keyword research, you're guessing. With it, you're creating intentional, targeted content that speaks 
                  directly to what people are already searching for—
                  <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    maximizing your visibility and ROI.
                  </span>
                </p>
                
                <div className="space-y-6">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div 
                        key={index}
                        className={`flex items-center p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-xl hover:bg-white/80 group ${
                          animatedItems.has(index) 
                            ? 'translate-x-0 opacity-100' 
                            : 'translate-x-10 opacity-0'
                        }`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                      >
                        <div className={`${benefit.color} w-8 h-8 mr-4 flex-shrink-0 transform transition-transform group-hover:rotate-12 group-hover:scale-110`}>
                          <Icon className="w-full h-full" />
                        </div>
                        <span className="text-gray-800 font-medium text-lg group-hover:text-gray-900 transition-colors">
                          {benefit.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className={`relative transform transition-all duration-1200 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* Main Card */}
              <div className="relative bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 group">
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white rounded-3xl w-full h-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="text-center">
                    {/* Animated Icon Container */}
                    <div className="relative w-32 h-32 mx-auto mb-8">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin opacity-20"></div>
                      <div className="absolute inset-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Search className="text-blue-600 w-16 h-16 animate-pulse" />
                      </div>
                      
                      {/* Orbiting Elements */}
                      <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full transform -translate-x-1/2 animate-ping"></div>
                      <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2 animate-ping delay-500"></div>
                      <div className="absolute left-0 top-1/2 w-2 h-2 bg-pink-400 rounded-full transform -translate-y-1/2 animate-ping delay-1000"></div>
                      <div className="absolute right-0 top-1/2 w-3 h-3 bg-indigo-400 rounded-full transform -translate-y-1/2 animate-ping delay-1500"></div>
                    </div>
                    
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent mb-6">
                      Strategic Research
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Every keyword we target is backed by 
                      <span className="font-semibold text-blue-600"> data-driven insights </span>
                      and aligned with your 
                      <span className="font-semibold text-purple-600"> business goals</span>.
                    </p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-200">
                      <div className="text-center group/stat">
                        <div className="text-2xl font-bold text-blue-600 group-hover/stat:scale-110 transition-transform">95%</div>
                        <div className="text-sm text-gray-600">Accuracy</div>
                      </div>
                      <div className="text-center group/stat">
                        <div className="text-2xl font-bold text-purple-600 group-hover/stat:scale-110 transition-transform">3x</div>
                        <div className="text-sm text-gray-600">ROI Boost</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 w-24 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg shadow-lg flex items-center justify-center transform rotate-12 hover:rotate-6 transition-transform duration-300">
                <TrendingUp className="text-white w-8 h-8" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg shadow-lg flex items-center justify-center transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                <Target className="text-white w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700">
              Start Your Keyword Research Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedKeywordSection;