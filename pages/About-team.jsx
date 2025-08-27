import React, { useState, useEffect, useRef } from 'react';
import { Users, Linkedin, Twitter, Mail, Star, Award, TrendingUp } from 'lucide-react';

const EnhancedTeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const teamMembers = [
    {
      name: "Ayushi Parmar",
      role: "SEO Strategist & Content Lead",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      specialties: ["Technical SEO", "Content Strategy", "Analytics"],
      experience: "5+ Years",
      projects: "200+",
      icon: Star,
      gradient: "from-pink-500 to-rose-500"
    }
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={sectionRef}>
        {/* Enhanced Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6">
            <Award className="w-5 h-5 text-purple-600" />
            <span className="text-purple-600 font-semibold">Expert Team</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Meet the{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              SEO Expert
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our expert brings years of experience in SEO strategy, technical optimization, 
            and digital marketing to help your business dominate search results.
          </p>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">200+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Team Cards */}
        <div className="flex justify-center max-w-lg mx-auto">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <div
                key={index}
                className={`group transform transition-all duration-700 w-full ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative">
                  {/* Glowing border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 scale-105`}></div>
                  
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-500 transform group-hover:-translate-y-4 group-hover:shadow-2xl border border-gray-100">
                    {/* Floating Icon */}
                    <div className="absolute -top-6 right-8">
                      <div className={`w-12 h-12 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="text-center">
                      {/* Enhanced Profile Image */}
                      <div className="relative mb-6">
                        <div className="w-40 h-40 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 relative">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                        </div>
                        
                        {/* Floating badge */}
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                          <div className={`px-4 py-1 bg-gradient-to-r ${member.gradient} rounded-full shadow-lg`}>
                            <span className="text-white font-semibold text-sm">{member.experience}</span>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Name and Role */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 font-medium mb-6 text-lg">{member.role}</p>

                      {/* Specialties */}
                      <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {member.specialties.map((specialty, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 cursor-default"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>

                      {/* Projects Counter */}
                      <div className="mb-6">
                        <div className={`text-3xl font-bold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                          {member.projects}
                        </div>
                        <div className="text-sm text-gray-600">Projects Delivered</div>
                      </div>

                      {/* Enhanced Social Links */}
                      <div className="flex justify-center space-x-4">
                        <div className="group/social relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center cursor-pointer hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <Linkedin className="w-5 h-5 text-white" />
                          </div>
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover/social:opacity-100 transition-all duration-200">
                            LinkedIn
                          </div>
                        </div>
                        
                        <div className="group/social relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl flex items-center justify-center cursor-pointer hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <Twitter className="w-5 h-5 text-white" />
                          </div>
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover/social:opacity-100 transition-all duration-200">
                            Twitter
                          </div>
                        </div>
                        
                        <div className="group/social relative">
                          <div className={`w-12 h-12 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center cursor-pointer hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                            <Mail className="w-5 h-5 text-white" />
                          </div>
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover/social:opacity-100 transition-all duration-200">
                            Email
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-all duration-500 pointer-events-none`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Work With Our Expert
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedTeamSection;