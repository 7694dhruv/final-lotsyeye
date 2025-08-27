import { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  const skills = [
    { name: "UI/UX Design", percentage: 95 },
    { name: "Product Strategy", percentage: 88 },
    { name: "Prototyping", percentage: 92 },
    { name: "User Research", percentage: 85 },
    { name: "Brand Identity", percentage: 90 },
    { name: "Frontend Development", percentage: 78 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const skillsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }

    return () => {
      observer.disconnect();
      skillsObserver.disconnect();
    };
  }, []);

  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-gradient-to-tr from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl animate-bounce duration-6000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Text */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="relative">
              {/* Decorative line */}
              <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full transform transition-all duration-1200 delay-300"></div>
              
              <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full animate-ping"></div>
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full"></div>
                
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 leading-tight">
                  About Me
                </h2>
                
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    <span className="font-semibold text-blue-600">Mark Henry</span>, Product Designer, based in Germany. 
                    That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only 
                    reflects who you are and what you stand for, but words that truly land with those that read them, 
                    calling your audience in and making them want more.
                  </p>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Progressively repurpose alternative platforms with extensive core competencies. 
                    I focus on creating meaningful experiences that connect brands with their audiences through 
                    innovative design solutions and strategic thinking.
                  </p>
                </div>

                {/* Call to Action Button */}
                <div className="mt-8">
                  <button className="group relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    <span className="relative z-10">Let's Work Together</span>
                    <div className="absolute inset-0 bg-white/20 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div 
            ref={skillsRef}
            className={`space-y-6 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
          >
            <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500">
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full animate-ping delay-500"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full"></div>
              
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8">
                Skills & Expertise
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="group space-y-3 transform transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium text-lg group-hover:text-blue-600 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-blue-600 font-bold text-lg">{skill.percentage}%</span>
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-indigo-200/50 rounded-full"></div>
                      <div 
                        className={`relative h-3 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 rounded-full transition-all duration-1500 ease-out shadow-lg ${
                          skillsVisible ? '' : 'w-0'
                        }`}
                        style={{ 
                          width: skillsVisible ? `${skill.percentage}%` : '0%',
                          animationDelay: `${index * 200 + 500}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
                        <div className="absolute right-0 top-0 w-2 h-full bg-white/50 rounded-full transform translate-x-1"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Achievement Badge */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl border border-blue-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">5+ Years Experience</p>
                    <p className="text-sm text-gray-600">Crafting digital experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;