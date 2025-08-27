import React, { useState, useEffect, useRef } from 'react';
import { Eye, Target, ArrowRight, Sparkles, Zap } from 'lucide-react';

const EnhancedVisionMission = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const headerRef = useRef();
  const visionRef = useRef();
  const missionRef = useRef();
  const footerRef = useRef();

  useEffect(() => {
    const observers = new Map();
    
    const createObserver = (element, name, threshold = 0.1) => {
      if (!element) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleElements(prev => new Set([...prev, name]));
            } else {
              setVisibleElements(prev => {
                const newSet = new Set(prev);
                newSet.delete(name);
                return newSet;
              });
            }
          });
        },
        { 
          threshold,
          rootMargin: '50px 0px -50px 0px'
        }
      );
      
      observer.observe(element);
      return observer;
    };

    // Create observers for each element
    const headerObserver = createObserver(headerRef.current, 'header', 0.3);
    const visionObserver = createObserver(visionRef.current, 'vision', 0.2);
    const missionObserver = createObserver(missionRef.current, 'mission', 0.2);
    const footerObserver = createObserver(footerRef.current, 'footer', 0.5);

    // Store observers
    if (headerObserver) observers.set('header', headerObserver);
    if (visionObserver) observers.set('vision', visionObserver);
    if (missionObserver) observers.set('mission', missionObserver);
    if (footerObserver) observers.set('footer', footerObserver);

    // Cleanup function
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="relative py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 transition-opacity duration-1000 ${
              visibleElements.has('header') ? 'opacity-30 animate-bounce' : ''
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '4s'
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
            visibleElements.has('header') 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-16 opacity-0 scale-95'
          }`}
        >
          <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 shadow-lg transition-all duration-700 ${
            visibleElements.has('header') ? 'rotate-0 scale-100' : 'rotate-180 scale-50'
          }`}>
            <Sparkles className={`w-8 h-8 text-white transition-all duration-500 ${
              visibleElements.has('header') ? 'animate-pulse' : ''
            }`} />
          </div>
          
          <h1 className={`text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 transition-all duration-800 ${
            visibleElements.has('header') ? 'tracking-normal' : 'tracking-wider'
          }`}>
            Vision & Mission
          </h1>
          
          <div className={`h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full transition-all duration-1000 ease-out ${
            visibleElements.has('header') ? 'w-24' : 'w-0'
          }`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Our Vision */}
          <div 
            ref={visionRef}
            className={`group transform transition-all duration-800 ease-out ${
              visibleElements.has('vision') 
                ? 'translate-y-0 translate-x-0 opacity-100 rotate-0' 
                : 'translate-y-20 -translate-x-8 opacity-0 rotate-1'
            }`}
            onMouseEnter={() => setHoveredCard('vision')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 h-full border border-white/20 overflow-hidden">
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-0.5">
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>

              {/* Glowing Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${
                      visibleElements.has('vision') ? 'animate-pulse' : ''
                    }`}>
                      <Eye className="w-10 h-10 text-white" />
                    </div>
                    {hoveredCard === 'vision' && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-ping">
                        <Zap className="w-3 h-3 text-yellow-800" />
                      </div>
                    )}
                  </div>
                  <h2 className={`text-4xl font-bold text-gray-900 ml-6 group-hover:text-blue-600 transition-all duration-500 ${
                    visibleElements.has('vision') ? 'translate-x-0' : 'translate-x-4'
                  }`}>
                    Our Vision
                  </h2>
                </div>

                <div className="space-y-4">
                  <p className={`text-gray-700 leading-relaxed text-lg group-hover:text-gray-800 transition-all duration-700 ${
                    visibleElements.has('vision') ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`} style={{ transitionDelay: '200ms' }}>
                    We envision a digital landscape where every business can achieve measurable growth through strategic SEO implementation and innovative marketing solutions.
                  </p>
                  <p className={`text-gray-600 leading-relaxed transition-all duration-700 ${
                    visibleElements.has('vision') ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`} style={{ transitionDelay: '400ms' }}>
                    Our vision extends beyond traditional SEO to encompass a holistic approach to digital transformation, empowering businesses to thrive in an ever-evolving online ecosystem.
                  </p>
                </div>

                <div className={`mt-8 pt-6 border-t border-gray-200 transition-all duration-700 ${
                  visibleElements.has('vision') ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`} style={{ transitionDelay: '600ms' }}>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300 cursor-pointer">
                    <span className="relative">
                      Explore Our Vision
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full group-hover:opacity-20 transition-all duration-500 animate-pulse ${
                visibleElements.has('vision') ? 'opacity-10 scale-100' : 'opacity-0 scale-0'
              }`}></div>
            </div>
          </div>

          {/* Our Mission */}
          <div 
            ref={missionRef}
            className={`group transform transition-all duration-800 ease-out ${
              visibleElements.has('mission') 
                ? 'translate-y-0 translate-x-0 opacity-100 rotate-0' 
                : 'translate-y-20 translate-x-8 opacity-0 -rotate-1'
            }`}
            style={{ transitionDelay: '200ms' }}
            onMouseEnter={() => setHoveredCard('mission')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 h-full border border-white/20 overflow-hidden">
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-0.5">
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>

              {/* Glowing Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${
                      visibleElements.has('mission') ? 'animate-pulse' : ''
                    }`}>
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    {hoveredCard === 'mission' && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-ping">
                        <Zap className="w-3 h-3 text-yellow-800" />
                      </div>
                    )}
                  </div>
                  <h2 className={`text-4xl font-bold text-gray-900 ml-6 group-hover:text-purple-600 transition-all duration-500 ${
                    visibleElements.has('mission') ? 'translate-x-0' : '-translate-x-4'
                  }`}>
                    Our Mission
                  </h2>
                </div>

                <div className="space-y-4">
                  <p className={`text-gray-700 leading-relaxed text-lg group-hover:text-gray-800 transition-all duration-700 ${
                    visibleElements.has('mission') ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`} style={{ transitionDelay: '200ms' }}>
                    Our mission is to deliver exceptional SEO results that drive sustainable business growth and long-term success for our clients across all industries.
                  </p>
                  <p className={`text-gray-600 leading-relaxed transition-all duration-700 ${
                    visibleElements.has('mission') ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`} style={{ transitionDelay: '400ms' }}>
                    We are committed to staying at the forefront of digital marketing innovation, providing cutting-edge strategies that adapt to the dynamic nature of search engine algorithms.
                  </p>
                </div>

                <div className={`mt-8 pt-6 border-t border-gray-200 transition-all duration-700 ${
                  visibleElements.has('mission') ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`} style={{ transitionDelay: '600ms' }}>
                  <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors duration-300 cursor-pointer">
                    <span className="relative">
                      Discover Our Mission
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full group-hover:opacity-20 transition-all duration-500 animate-pulse ${
                visibleElements.has('mission') ? 'opacity-10 scale-100' : 'opacity-0 scale-0'
              }`}></div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div 
          ref={footerRef}
          className={`text-center mt-16 transform transition-all duration-1000 ease-out ${
            visibleElements.has('footer') 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-10 opacity-0 scale-95'
          }`}
        >
          <div className="inline-flex items-center space-x-2 text-gray-500 text-sm">
            <div className={`h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-1000 ease-out ${
              visibleElements.has('footer') ? 'w-8' : 'w-0'
            }`}></div>
            <span className="font-medium">Driving Growth Through Innovation</span>
            <div className={`h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-1000 ease-out ${
              visibleElements.has('footer') ? 'w-8' : 'w-0'
            }`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedVisionMission;