import { useState, useEffect, useRef } from 'react';
import { Mail, FileText, Twitter, Linkedin, Instagram, Dribbble, Star, Sparkles } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    if (sectionRef.current) {
      sectionRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', color: 'hover:text-blue-400', bg: 'hover:bg-blue-50' },
    { icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-600', bg: 'hover:bg-blue-50' },
    { icon: Instagram, label: 'Instagram', color: 'hover:text-pink-500', bg: 'hover:bg-pink-50' },
    { icon: Dribbble, label: 'Dribbble', color: 'hover:text-purple-500', bg: 'hover:bg-purple-50' },
  ];

  const FloatingElement = ({ delay = 0, className = '' }) => (
    <div 
      className={`absolute opacity-20 animate-bounce ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: '3s',
      }}
    >
      <Star className="w-4 h-4 text-blue-300" />
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      {/* Floating Background Elements */}
      <FloatingElement delay={0} className="top-20 left-10" />
      <FloatingElement delay={1000} className="top-32 right-20" />
      <FloatingElement delay={2000} className="bottom-40 left-1/4" />
      <FloatingElement delay={1500} className="bottom-20 right-1/3" />
      
      {/* Interactive Background Gradient */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-12">
          {/* Header Section with Staggered Animation */}
          <div className="space-y-6">
            <div 
              className={`transition-all duration-1000 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-blue-500 mr-3 animate-pulse" />
                <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Let's Work Together
                </h2>
                <Sparkles className="w-8 h-8 text-purple-500 ml-3 animate-pulse" />
              </div>
            </div>
            
            <div 
              className={`transition-all duration-1000 delay-300 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
                Ready to create something amazing? Let's discuss your project and bring your 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold"> vision to life</span>.
              </p>
            </div>
          </div>
          
          {/* CTA Buttons with Enhanced Design */}
          <div 
            className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-600 transform ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
          >
            <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="relative flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
            </button>
            
            <button className="group px-10 py-4 border-2 border-transparent bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg text-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-1 bg-white rounded-full transition-all duration-300 group-hover:bg-opacity-90"></div>
              <div className="relative flex items-center justify-center space-x-2 group-hover:text-blue-700 transition-colors duration-300">
                <FileText className="w-5 h-5" />
                <span>View Resume</span>
              </div>
            </button>
          </div>

          {/* Social Links with Enhanced Hover Effects */}
          <div 
            className={`transition-all duration-1000 delay-900 transform ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="pt-8">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent mx-auto mb-8"></div>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href="#"
                      className={`group relative transform hover:scale-110 transition-all duration-300 ${
                        isVisible ? 'animate-bounce' : ''
                      }`}
                      style={{
                        animationDelay: `${index * 200}ms`,
                        animationDuration: '2s',
                        animationIterationCount: '1'
                      }}
                    >
                      <div className={`w-14 h-14 bg-white rounded-2xl shadow-lg ${social.bg} border border-gray-100 flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <IconComponent className={`w-6 h-6 text-gray-500 ${social.color} transition-colors duration-300 relative z-10`} />
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300"></div>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <div className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
                          {social.label}
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-blue-300 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/4 right-1/6 w-1 h-1 bg-purple-300 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
    </section>
  );
};

export default ContactSection;