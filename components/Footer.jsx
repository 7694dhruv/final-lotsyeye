import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, ArrowUp, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-green-400 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-6 hover:scale-105 transition-transform duration-300">
              Seoly
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Expert SEO solutions to boost your online presence and drive targeted traffic to your business.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, color: "hover:text-blue-500" },
                { Icon: Twitter, color: "hover:text-sky-400" },
                { Icon: Linkedin, color: "hover:text-blue-600" },
                { Icon: Instagram, color: "hover:text-pink-500" }
              ].map(({ Icon, color }, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-gray-700 ${color} group`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-current transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-semibold mb-6 text-lg text-white relative">
              Services
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              {['SEO Audit', 'Keyword Research', 'Link Building', 'Content Marketing', 'Technical SEO'].map((service, index) => (
                <li key={index} className="group">
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block relative"
                  >
                    <span className="relative">
                      {service}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-semibold mb-6 text-lg text-white relative">
              Company
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              {['About Us', 'Case Studies', 'Blog', 'Careers', 'Contact'].map((item, index) => (
                <li key={index} className="group">
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block relative"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-semibold mb-6 text-lg text-white relative">
              Contact
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-transparent"></div>
            </h3>
            <ul className="space-y-4">
              {[
                { Icon: Mail, text: 'hello@seoly.com', href: 'mailto:hello@seoly.com' },
                { Icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                { Icon: MapPin, text: '123 SEO Street', href: '#' },
                { Icon: MapPin, text: 'Digital City, DC 12345', href: '#' }
              ].map(({ Icon, text, href }, index) => (
                <li key={index} className="group">
                  <a 
                    href={href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <Icon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span>{text}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter signup */}
            <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors max-w-md duration-300">
              <h4 className="text-sm font-semibold mb-2 text-blue-400">Stay Updated</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 mr-1 text-sm bg-gray-700 border border-gray-600 rounded-l focus:outline-none focus:border-blue-400 transition-colors"
                />
                <button className="px-1 py-1 bg-blue-500 text-white text-sm rounded-r hover:bg-blue-600 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`border-t border-gray-800 mt-16 pt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p className="mb-4 md:mb-0">
              &copy; 2024 Seoly. All rights reserved. | 
              <a href="#" className="hover:text-white ml-2 transition-colors">Privacy Policy</a> |
              <a href="#" className="hover:text-white ml-2 transition-colors">Terms of Service</a>
            </p>
            <div className="text-xs">
              Made with ❤️ for better SEO
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 mx-auto" />
      </button>
    </footer>
  );
}