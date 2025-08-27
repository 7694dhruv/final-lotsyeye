import { useState, useEffect, useRef } from 'react';
import { Search, Target, FileText, TrendingUp, ChevronRight, Sparkles } from 'lucide-react';

const SEOProcessSection = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const sectionRef = useRef(null);

  const steps = [
    {
      number: 1,
      title: "Research & Discovery",
      description: "Comprehensive keyword and competitor research to uncover high-impact ranking opportunities tailored to your niche.",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
      delay: "delay-100"
    },
    {
      number: 2,
      title: "On-Page Optimization",
      description: "On-page optimization covering meta tags, site structure, internal links, and other core SEO elements to boost relevance.",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      delay: "delay-200"
    },
    {
      number: 3,
      title: "Content Strategy",
      description: "Strategic content planning and creation based on keyword research and search intent to attract and engage your audience.",
      icon: FileText,
      color: "from-green-500 to-emerald-500",
      delay: "delay-300"
    },
    {
      number: 4,
      title: "Performance Tracking",
      description: "Ongoing performance tracking, actionable insights, and continuous optimization to maximize visibility and conversions.",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
      delay: "delay-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.dataset.step);
            setVisibleSteps(prev => [...new Set([...prev, stepIndex])]);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const stepElements = sectionRef.current?.querySelectorAll('[data-step]');
    stepElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Our Proven Process
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">
            How We Boost Your Rankings
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our systematic approach ensures measurable results and sustainable growth for your online presence
          </p>
        </div>

        {/* Steps Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-8 top-20 bottom-0 w-px bg-gradient-to-b from-blue-200 via-purple-200 to-transparent hidden md:block"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isVisible = visibleSteps.includes(index);
                
                return (
                  <div
                    key={step.number}
                    data-step={index}
                    className={`group relative transition-all duration-1000 ease-out ${step.delay} ${
                      isVisible 
                        ? 'opacity-100 translate-y-0 translate-x-0' 
                        : 'opacity-0 translate-y-8 translate-x-4'
                    }`}
                  >
                    <div className="flex items-start gap-8">
                      {/* Step Number & Icon */}
                      <div className="relative flex-shrink-0">
                        <div className={`w-16 h-16 bg-gradient-to-br ${step.color} text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl`}>
                          <span className="group-hover:scale-0 transition-transform duration-300">
                            {step.number}
                          </span>
                          <Icon className="w-6 h-6 absolute scale-0 group-hover:scale-100 transition-transform duration-300 delay-150" />
                        </div>
                        
                        {/* Floating decoration */}
                        <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${step.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping`}></div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-h-[80px] group-hover:transform group-hover:translate-x-2 transition-transform duration-500">
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-2xl hover:bg-white/90 transition-all duration-500 relative overflow-hidden">
                          {/* Hover effect overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                          
                          <div className="relative">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                                {step.title}
                              </h3>
                              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                            </div>
                            
                            <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">
                              {step.description}
                            </p>
                            
                            {/* Progress indicator */}
                            <div className="mt-6 flex items-center gap-2">
                              <div className="flex gap-1">
                                {[...Array(4)].map((_, i) => (
                                  <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                                      i <= index 
                                        ? `bg-gradient-to-r ${step.color}` 
                                        : 'bg-gray-200'
                                    }`}
                                  ></div>
                                ))}
                              </div>
                              <span className="text-sm text-gray-500 ml-2">
                                Step {step.number} of 4
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
            Start Your SEO Journey
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOProcessSection;