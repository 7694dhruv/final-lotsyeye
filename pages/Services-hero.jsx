import { useState, useEffect } from 'react';

const KeywordResearchHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`
      }}
    />
  ));

  const keywords = [
    "SEO Strategy", "Search Volume", "Competition Analysis", "Long-tail Keywords", 
    "SERP Analysis", "Content Optimization", "Organic Traffic", "Keyword Difficulty"
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - Light Theme */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-100 text-gray-900 overflow-hidden">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`
            }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-300/30 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translateY(${scrollY * -0.15}px) rotate(${-scrollY * 0.03}deg)`,
              animationDelay: '1s'
            }}
          />
          
          {/* Floating Particles */}
          {particles}
          
          {/* Geometric Patterns */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgb(156, 163, 175)" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        {/* Floating Keywords */}
        <div className="absolute inset-0 pointer-events-none">
          {keywords.map((keyword, index) => (
            <div
              key={keyword}
              className="absolute text-xs font-medium text-gray-400/60 animate-bounce"
              style={{
                left: `${10 + (index * 10)}%`,
                top: `${20 + (index * 8)}%`,
                animationDelay: `${index * 0.3}s`,
                animationDuration: '3s'
              }}
            >
              {keyword}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Animated Title */}
            <div className="mb-8 overflow-hidden">
              <h1 
                className={`text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-700 to-indigo-700 bg-clip-text text-transparent transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
              >
                Keyword Research
              </h1>
            </div>

            {/* Animated Subtitle */}
            <div className="mb-12 overflow-hidden">
              <p 
                className={`text-xl md:text-2xl leading-relaxed text-gray-700 max-w-4xl mx-auto transform transition-all duration-1000 delay-300 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
              >
                We help you uncover the exact search terms your potential customers are using—revealing powerful insights 
                that serve as your roadmap to{' '}
                <span className="text-blue-600 font-semibold animate-pulse">higher rankings</span>,{' '}
                <span className="text-green-600 font-semibold animate-pulse" style={{animationDelay: '0.5s'}}>better conversions</span>, and{' '}
                <span className="text-indigo-600 font-semibold animate-pulse" style={{animationDelay: '1s'}}>long-term organic growth</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1000 delay-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                <span className="relative z-10">Start Your Research</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </button>
              
              <button className="group px-8 py-4 border-2 border-gray-400 text-gray-700 rounded-full font-bold text-lg transition-all duration-300 hover:border-gray-700 hover:bg-gray-100 hover:scale-105">
                <span className="flex items-center gap-2">
                  View Case Studies
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Stats Counter */}
            <div 
              className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-900 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              {[
                { number: '10K+', label: 'Keywords Analyzed' },
                { number: '500+', label: 'Successful Campaigns' },
                { number: '95%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl font-black text-blue-600 mb-2 transition-all duration-300 group-hover:scale-110">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-gray-500">
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Bottom Gradient Bar with Animation */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700">
          <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* Demo Content Below
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Scroll back up to see the parallax effects!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This demo section shows how the hero section responds to scroll interactions. 
            The background elements move at different speeds creating a dynamic parallax effect.
          </p>
        </div>
      </section> */}
    </div>
  );
};

export default KeywordResearchHero;