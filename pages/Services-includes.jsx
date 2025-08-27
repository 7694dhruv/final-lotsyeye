import React, { useState, useEffect, useRef } from 'react';
import { Search, BarChart3, Target, TrendingUp, Users, FileText } from 'lucide-react';

const WhatsIncludedSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const features = [
    {
      icon: Search,
      title: "Niche Keyword Discovery",
      description: "Tailored keyword research focused on your specific audience and industry to drive relevant traffic.",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500",
      detailedServices: [
        "Industry-specific keyword research",
        "Local SEO keyword identification",
        "Voice search optimization keywords",
        "Seasonal trend analysis",
        "Buyer intent keyword mapping"
      ],
      metrics: "500+ Keywords",
      deliverable: "Excel Report + Recommendations"
    },
    {
      icon: BarChart3,
      title: "In-Depth Keyword Metrics",
      description: "Comprehensive analysis of keyword difficulty, CPC, and search volume to guide smart targeting.",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500",
      detailedServices: [
        "Search volume analysis",
        "Keyword difficulty scoring",
        "Cost-per-click data",
        "SERP feature tracking",
        "Competition analysis"
      ],
      metrics: "15+ Data Points",
      deliverable: "Detailed Analytics Dashboard"
    },
    {
      icon: Target,
      title: "Keyword Grouping & Clustering",
      description: "Organize keywords into strategic groups to streamline content planning and SEO structure.",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500",
      detailedServices: [
        "Semantic keyword clustering",
        "Content pillar identification",
        "Topic authority mapping",
        "Internal linking opportunities",
        "Site architecture planning"
      ],
      metrics: "10-20 Clusters",
      deliverable: "Content Strategy Blueprint"
    },
    {
      icon: Search,
      title: "Niche Keyword Discovery",
      description: "Tailored keyword research focused on your specific audience and industry to drive relevant traffic.",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500",
      detailedServices: [
        "Industry-specific keyword research",
        "Local SEO keyword identification",
        "Voice search optimization keywords",
        "Seasonal trend analysis",
        "Buyer intent keyword mapping"
      ],
      metrics: "500+ Keywords",
      deliverable: "Excel Report + Recommendations"
    },
    {
      icon: BarChart3,
      title: "In-Depth Keyword Metrics",
      description: "Comprehensive analysis of keyword difficulty, CPC, and search volume to guide smart targeting.",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500",
      detailedServices: [
        "Search volume analysis",
        "Keyword difficulty scoring",
        "Cost-per-click data",
        "SERP feature tracking",
        "Competition analysis"
      ],
      metrics: "15+ Data Points",
      deliverable: "Detailed Analytics Dashboard"
    },
    {
      icon: Target,
      title: "Keyword Grouping & Clustering",
      description: "Organize keywords into strategic groups to streamline content planning and SEO structure.",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500",
      detailedServices: [
        "Semantic keyword clustering",
        "Content pillar identification",
        "Topic authority mapping",
        "Internal linking opportunities",
        "Site architecture planning"
      ],
      metrics: "10-20 Clusters",
      deliverable: "Content Strategy Blueprint"
    }
    
  ];

  // ✅ New observer: watch the whole section, not each card
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCards(new Set(features.map((_, i) => i))); // make ALL cards visible
          observer.disconnect(); // trigger only once
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [features.length]);

  const FeatureCard = ({ feature, index, delay }) => {
    const IconComponent = feature.icon;
    const isVisible = visibleCards.has(index);
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div
        ref={el => {
          cardRefs.current[index] = el;
        }}
        className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 border-l-4 ${feature.borderColor} overflow-hidden transform ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-12 opacity-0'
        } h-80`}
        style={{ 
          transitionDelay: isVisible ? `${delay}ms` : '0ms',
          transformStyle: 'preserve-3d'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
        
        {/* Front Card */}
        <div className={`absolute inset-0 p-8 transition-all duration-500 ${isHovered ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
          <div className="flex items-center mb-6 group-hover:scale-105 transition-transform duration-300">
            <div className={`relative p-3 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
              <IconComponent className="text-white w-8 h-8" />
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300`}></div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 ml-4 group-hover:text-gray-900 transition-colors duration-300">
              {feature.title}
            </h3>
          </div>
          
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {feature.description}
          </p>

          <div className="absolute bottom-4 left-8 right-8">
            <div className="flex justify-between items-center text-sm">
              <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${feature.color} text-white font-medium shadow-lg`}>
                {feature.metrics}
              </span>
              <span className="text-gray-400 font-medium">Hover for details →</span>
            </div>
          </div>
        </div>

        {/* Back Card - Detailed Services */}
        <div className={`absolute inset-0 p-6 transition-all duration-500 ${isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          <div className="flex items-center mb-4">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.color} shadow-md`}>
              <IconComponent className="text-white w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 ml-3">{feature.title}</h4>
          </div>
          
          <div className="space-y-3 mb-4">
            <h5 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">What's Included:</h5>
            <ul className="space-y-2">
              {feature.detailedServices.map((service, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-600">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color} mt-2 mr-3 flex-shrink-0`}></div>
                  <span className="leading-relaxed">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute bottom-4 left-6 right-6">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} bg-opacity-10 border border-opacity-20`}>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs font-medium text-gray-700 uppercase tracking-wide mb-1">Deliverable</p>
                  <p className="text-sm font-semibold text-gray-800">{feature.deliverable}</p>
                </div>
                <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${feature.color} text-white text-xs font-bold shadow-md`}>
                  {feature.metrics}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-r ${feature.color} rounded-full opacity-0 group-hover:opacity-40 transition-all duration-1000`}
              style={{
                left: `${20 + i * 25}%`,
                top: `${30 + i * 20}%`,
                transform: isVisible ? `translateY(-${10 + i * 5}px)` : 'translateY(0)',
                transitionDelay: `${500 + i * 200}ms`,
                animationDelay: `${i * 0.5}s`
              }}
            ></div>
          ))}
        </div>

        {/* Hover border effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-200 transition-all duration-300"></div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-50 rounded-full opacity-30 blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 mb-4 hover:scale-105 transition-transform duration-300">
              What's Included
            </h2>
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full mx-auto mb-6 animate-pulse"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to dominate search rankings and drive targeted traffic to your website
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              feature={feature}
              index={index}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <span>Ready to boost your SEO?</span>
            <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncludedSection;
