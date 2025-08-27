import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, Search, BarChart3, TrendingUp, Users, Crosshair, Globe } from 'lucide-react';

const EnhancedHeroSection = () => {
  const [counters, setCounters] = useState({ traffic: 0, revenue: 0, clients: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      const targets = { traffic: 285, revenue: 150, clients: 2.5 };
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      const timer = setInterval(() => {
        setCounters(prev => ({
          traffic: Math.min(prev.traffic + targets.traffic / steps, targets.traffic),
          revenue: Math.min(prev.revenue + targets.revenue / steps, targets.revenue),
          clients: Math.min(prev.clients + targets.clients / steps, targets.clients)
        }));
      }, increment);

      setTimeout(() => {
        clearInterval(timer);
        setCounters(targets);
      }, duration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Floating particles animation
  const FloatingParticle = ({ delay, size, color }) => (
    <div
      className={`absolute w-${size} h-${size} ${color} rounded-full opacity-20 animate-float`}
      style={{
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(-10px) rotate(240deg); }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInScale {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-slide-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-right { animation: slideInRight 0.8s ease-out forwards; }
        .animate-slide-up { animation: slideInUp 0.6s ease-out forwards; }
        .animate-fade-scale { animation: fadeInScale 0.8s ease-out forwards; }
        .shimmer-bg {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
      `}</style>

      {/* Loading Overlay
      {isLoading && (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-purple-600 z-50 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-white rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
            </div>
            <p className="text-white text-xl font-medium">Optimizing Your Experience...</p>
            <div className="flex space-x-1">
              {[0, 1, 2].map(i => (
                <div key={i} className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
            </div>
          </div>
        </div>
      )} */}

      <section 
        ref={sectionRef}
        className="relative pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden min-h-screen flex items-center"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <FloatingParticle
              key={i}
              delay={i * 0.5}
              size={Math.random() > 0.5 ? '4' : '6'}
              color={Math.random() > 0.5 ? 'bg-blue-300' : 'bg-purple-300'}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4 animate-fade-scale">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  #1 SEO Agency 2024
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="inline-block animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    Boost Visibility,
                  </span>
                  <br />
                  <span className="inline-block animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    Drive Traffic,
                  </span>
                  <br />
                  <span className="text-blue-600 inline-block animate-slide-up" style={{ animationDelay: '0.6s' }}>
                    Increase Conversions
                  </span>
                </h1>
                
                <p className={`text-xl text-gray-600 leading-relaxed ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                  Unlock the power of search with our expert SEO and search marketing solutions. 
                  Elevate your online presence, drive targeted traffic, and maximize your ROI.
                </p>
              </div>
              
              <div className={`flex flex-col sm:flex-row gap-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center justify-center group pulse-glow hover:scale-105 transform">
                  <span className="relative overflow-hidden">
                    Get Free Proposal
                    <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100"></div>
                  </span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 hover:shadow-lg transition-all duration-300 flex items-center justify-center group hover:scale-105 transform">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>

              {/* Stats Row */}
              <div className={`grid grid-cols-3 gap-6 pt-8 ${isVisible ? 'animate-fade-scale' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{Math.round(counters.traffic)}%</div>
                  <div className="text-sm text-gray-500">Avg. Traffic Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{Math.round(counters.revenue)}+</div>
                  <div className="text-sm text-gray-500">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">{counters.clients.toFixed(1)}M</div>
                  <div className="text-sm text-gray-500">Keywords Ranked</div>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard */}
            <div className={`relative ${isVisible ? 'animate-slide-right' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">SEO Performance</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-600 font-medium">Live</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg mx-auto mb-2">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-blue-600">+{Math.round(counters.traffic)}%</div>
                      <div className="text-sm text-gray-600">Organic Growth</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-lg mx-auto mb-2">
                        <Crosshair className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-green-600">{Math.round(counters.revenue)}K</div>
                      <div className="text-sm text-gray-600">Conversions</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center justify-center w-10 h-10 bg-purple-600 rounded-lg mx-auto mb-2">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-purple-600">{counters.clients.toFixed(1)}M</div>
                      <div className="text-sm text-gray-600">Reach</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center justify-center w-10 h-10 bg-orange-600 rounded-lg mx-auto mb-2">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-orange-600">98%</div>
                      <div className="text-sm text-gray-600">Satisfaction</div>
                    </div>
                  </div>

                  {/* Animated Chart */}
                  <div className="h-32 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-xl relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <BarChart3 className="w-6 h-6" />
                        <span className="font-medium">Real-time Analytics</span>
                      </div>
                      <div className="flex justify-center mt-2 space-x-1">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 bg-blue-500 rounded-t animate-bounce"
                            style={{
                              height: `${20 + Math.random() * 30}px`,
                              animationDelay: `${i * 0.1}s`,
                              animationDuration: '1.5s'
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <Search className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center animate-float shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnhancedHeroSection;