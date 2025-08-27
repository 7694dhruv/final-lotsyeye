import React, { useState, useEffect , useRef } from 'react';
import EnhancedHeroSection from './Home-hero';
import EnhancedAboutSection from './Home-about';

import {
  Award,
  Search,
  Network,
  BarChart3,
  Star,
  ArrowRight,
  Play,
  Crosshair,
  Globe,
  Target,
  CheckCircle,
  TrendingUp,
  Users,
  Zap,
  DollarSign,
  Quote,
  ChevronLeft, 
  ChevronRight,
  Crown 
} from 'lucide-react';


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  // hero section counters
  const [counters, setCounters] = useState({ traffic: 0, revenue: 0, clients: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef(null);
  // service section refs
  const [serviceRefs, setServiceRefs] = useState([]);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  // about section refs
  const [animatedStats, setAnimatedStats] = useState({
    traffic: 0,
    clients: 0,
    revenue: 0
  });
  // testimonial section refs
  const [animating, setAnimating] = useState(false);
  // pricing section refs
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);

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
    }, 0.1);
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

  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimization",
      description: "Comprehensive keyword research, on-page optimization, and technical SEO to improve your search rankings and organic visibility.",
      features: ["Keyword Research", "Technical SEO", "Content Optimization"],
      backContent: {
        subtitle: "Dominate Search Results",
        stats: [
          { label: "Average Ranking Boost", value: "3-5 Positions" },
          { label: "Organic Traffic Increase", value: "150-300%" }
        ],
        benefits: [
          "🎯 Target high-converting keywords",
          "⚡ Fix technical SEO issues",
          "📈 Improve site speed & performance",
          "📱 Mobile-first optimization",
          "🔍 Local search visibility"
        ],
        cta: "Boost Rankings Now",
        timeline: "See results in 3-6 months"
      }
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Performance Analytics",
      description: "Advanced tracking and reporting to monitor your website's performance, user behavior, and conversion rates.",
      features: ["Real-time Analytics", "Conversion Tracking", "Performance Reports"],
      backContent: {
        subtitle: "Data-Driven Growth",
        stats: [
          { label: "Data Points Tracked", value: "50+ Metrics" },
          { label: "Report Frequency", value: "Weekly/Monthly" }
        ],
        benefits: [
          "📊 Real-time dashboard access",
          "🎯 User behavior insights",
          "💰 ROI tracking & analysis",
          "📈 Conversion optimization",
          "🚀 Growth opportunity alerts"
        ],
        cta: "Start Tracking",
        timeline: "Live data within 24 hours"
      }
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Content Strategy",
      description: "Data-driven content creation and optimization strategies that engage your audience and drive meaningful results.",
      features: ["Content Planning", "Audience Analysis", "Brand Voice Development"],
      backContent: {
        subtitle: "Content That Converts",
        stats: [
          { label: "Content Pieces/Month", value: "8-12 Posts" },
          { label: "Engagement Boost", value: "200-400%" }
        ],
        benefits: [
          "✍️ SEO-optimized blog posts",
          "🎭 Brand voice development",
          "📅 Editorial calendar planning",
          "🎨 Visual content creation",
          "📢 Social media integration"
        ],
        cta: "Create Content",
        timeline: "First content in 1 week"
      }
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Local SEO",
      description: "Dominate local search results with geo-targeted optimization, Google My Business management, and local citation building.",
      features: ["Local Citations", "Google My Business", "Review Management"],
      backContent: {
        subtitle: "Own Your Local Market",
        stats: [
          { label: "Local Ranking Boost", value: "Top 3 Results" },
          { label: "Review Score Target", value: "4.5+ Stars" }
        ],
        benefits: [
          "🗺️ Google My Business optimization",
          "⭐ Review generation system",
          "📍 Local citation building",
          "🏪 Store locator integration",
          "📱 Mobile local optimization"
        ],
        cta: "Dominate Local",
        timeline: "Local visibility in 2-4 weeks"
      }
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Growth Marketing",
      description: "Holistic marketing approach combining SEO, paid advertising, and conversion optimization for maximum ROI.",
      features: ["Multi-channel Strategy", "A/B Testing", "ROI Optimization"],
      backContent: {
        subtitle: "Accelerated Growth",
        stats: [
          { label: "ROI Improvement", value: "250-500%" },
          { label: "Lead Generation", value: "3x More Leads" }
        ],
        benefits: [
          "🚀 Multi-channel campaigns",
          "🔄 A/B testing protocols",
          "💎 Conversion rate optimization",
          "📧 Email marketing automation",
          "💰 PPC campaign management"
        ],
        cta: "Scale Growth",
        timeline: "Growth acceleration in 30 days"
      }
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Speed Optimization",
      description: "Lightning-fast website performance optimization to improve user experience and search engine rankings.",
      features: ["Core Web Vitals", "Page Speed", "Mobile Optimization"],
      backContent: {
        subtitle: "Lightning Fast Performance",
        stats: [
          { label: "Speed Improvement", value: "50-80% Faster" },
          { label: "Core Web Vitals", value: "All Green" }
        ],
        benefits: [
          "⚡ Page load optimization",
          "📱 Mobile performance tuning",
          "🖼️ Image compression & CDN",
          "⚙️ Code minification",
          "🎯 Core Web Vitals fixes"
        ],
        cta: "Speed Up Site",
        timeline: "Performance boost in 1-2 weeks"
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            if (index !== null) {
              setTimeout(() => {
                setVisibleItems(prev => new Set([...prev, parseInt(index)]));
              }, parseInt(index) * 150); // Staggered animation
            } else {
              entry.target.classList.add('animate-in');
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe title and description
    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);

    // Observe service cards
    const serviceCards = document.querySelectorAll('[data-index]');
    serviceCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);
  
  // // about-us
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counter animations
          animateCounters();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation function
  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = { traffic: 250, clients: 1000, revenue: 2 };
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setAnimatedStats({
        traffic: Math.floor(targets.traffic * easeOut),
        clients: Math.floor(targets.clients * easeOut),
        revenue: (targets.revenue * easeOut).toFixed(1)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats({
          traffic: targets.traffic,
          clients: targets.clients,
          revenue: targets.revenue
        });
      }
    }, stepDuration);
  };

  // Testimonial rotation
   const testimonials = [
    {
      text: "This service completely transformed how we approach our business. The results exceeded our expectations and the support team was incredible throughout the entire process.",
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      avatar: "SJ"
    },
    {
      text: "I was skeptical at first, but the quality and attention to detail blew me away. Three months later, we've seen a 300% increase in engagement and couldn't be happier.",
      name: "Michael Chen",
      role: "Marketing Director, GrowthCo",
      avatar: "MC"
    },
    {
      text: "The team's expertise and dedication made all the difference. They didn't just deliver what we asked for – they delivered what we actually needed.",
      name: "Emily Rodriguez",
      role: "Founder, Creative Studios",
      avatar: "ER"
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentTestimonial]);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('testimonials-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setAnimating(false);
    }, 150);
  };

  const prevTestimonial = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 150);
  };

  const goToTestimonial = (index) => {
    if (index === currentTestimonial || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial(index);
      setAnimating(false);
    }, 150);
  };
  // const services = [
  //   {
  //     icon: <Search className="w-8 h-8" />,
  //     title: "Keyword Research",
  //     description: "Discover high-impact keywords your target audience is searching for. This process helps align your content and SEO strategy to improve visibility and attract qualified traffic."
  //   },
  //   {
  //     icon: <Network className="w-8 h-8" />,
  //     title: "On-Page SEO",
  //     description: "Optimize website elements like titles, meta descriptions, headers, images, and URLs to improve relevance and user experience for both search engines and visitors."
  //   },
  //   {
  //     icon: <BarChart3 className="w-8 h-8" />,
  //     title: "Off-Page SEO",
  //     description: "Build domain authority through external efforts like backlink acquisition, digital PR, and brand mentions to boost your rankings and trust in search engines."
  //   }
  // ];

   const plans = [
    {
      name: "Starter",
      price: "$299/mo",
      description: "Perfect for small businesses starting their SEO journey",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Keyword research & strategy",
        "On-page optimization (5 pages)",
        "Monthly performance reports",
        "Basic technical SEO audit",
        "Email support"
      ],
      buttonText: "Get Started",
      popular: false,
      color: "blue"
    },
    {
      name: "Professional",
      price: "$599/mo",
      description: "Ideal for growing businesses ready to dominate search",
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        "Everything in Starter",
        "On-page optimization (15 pages)",
        "Content creation (4 articles/month)",
        "Local SEO optimization",
        "Competitor analysis",
        "Phone & email support"
      ],
      buttonText: "Start Growing",
      popular: true,
      color: "blue"
    },
    {
      name: "Enterprise",
      price: "$1299/mo",
      description: "Comprehensive SEO solutions for established businesses",
      icon: <Crown className="w-8 h-8" />,
      features: [
        "Everything in Professional",
        "Unlimited page optimization",
        "Content creation (8 articles/month)",
        "Advanced link building",
        "Priority support & strategy calls",
        "Custom reporting dashboard"
      ],
      buttonText: "Scale Your Business",
      popular: false,
      color: "purple"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const getCardClasses = (plan, index) => {
    const baseClasses = "relative bg-white rounded-2xl p-8 transition-all duration-700 transform";
    const isVisible = visibleCards.includes(index);
    const visibilityClasses = isVisible 
      ? "opacity-100 translate-y-0" 
      : "opacity-0 translate-y-12";
    
    if (plan.popular) {
      return `${baseClasses} ${visibilityClasses} border-2 border-blue-500 shadow-2xl scale-105 hover:scale-110 hover:shadow-3xl bg-gradient-to-br from-blue-50 to-white`;
    }
    
    return `${baseClasses} ${visibilityClasses} border border-gray-200 hover:shadow-xl hover:scale-105 hover:border-gray-300`;
  };

  const getButtonClasses = (plan) => {
    const baseClasses = "w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105";
    
    if (plan.popular) {
      return `${baseClasses} bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl`;
    }
    
    return `${baseClasses} bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-900 hover:to-black shadow-lg hover:shadow-xl`;
  };

  return (
    <div>
      <EnhancedHeroSection />
      {/* Services Section */}
       <section id="services" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            style={{
              background: 'linear-gradient(135deg, #1f2937 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Grow Traffic & Increase Revenue
          </h2>
          <p 
            ref={descriptionRef}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            style={{ transitionDelay: '300ms' }}
          >
            We stay ahead with the latest SEO trends, tools, and best practices to ensure your business 
            remains competitive in the ever-changing digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              data-index={index}
              className={`group relative h-96 transition-all duration-700 ease-out cursor-pointer
                ${visibleItems.has(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
                }
                hover:shadow-2xl hover:scale-105 hover:-translate-y-2
              `}
            >
              {/* Front content - always visible */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-50 to-sky-100 border border-blue-200 p-6 rounded-2xl shadow-lg transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-blue-500 transition-all duration-300 transform group-hover:scale-110">
                    {service.icon}
                  </div>
                  <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center group-hover:bg-blue-300 transition-colors duration-300">
                    <ArrowRight className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-blue-800 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-blue-200 text-blue-800 rounded-full group-hover:bg-blue-300 transition-colors duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                  <span className="px-3 py-1 text-xs font-medium bg-gray-200 text-gray-600 rounded-full group-hover:bg-gray-300 transition-colors duration-300">
                    +{service.features.length - 2} more
                  </span>
                </div>

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover overlay with detailed content */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-sky-600 p-6 rounded-2xl shadow-xl text-white overflow-y-auto opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-100 transform scale-110">
                    {service.icon}
                  </div>
                  <div className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {service.backContent.timeline}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-blue-100 text-sm mb-4 font-medium">
                  {service.backContent.subtitle}
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {service.backContent.stats.map((stat, idx) => (
                    <div key={idx} className="bg-white/15 backdrop-blur-sm rounded-lg p-3 text-center border border-white/20">
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-blue-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Benefits */}
                <div className="space-y-2 mb-4">
                  <p className="text-blue-100 text-xs font-semibold uppercase tracking-wide">What You Get:</p>
                  {service.backContent.benefits.slice(0, 4).map((benefit, idx) => (
                    <div key={idx} className="flex items-start text-sm">
                      <span className="mr-2 mt-0.5">{benefit.split(' ')[0]}</span>
                      <span className="text-blue-50 flex-1">{benefit.split(' ').slice(1).join(' ')}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-white/20 hover:bg-white hover:text-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group border border-white/30 hover:border-white backdrop-blur-sm">
                  {service.backContent.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-purple-700">
            Get Started Today
            <ArrowRight className="inline-block ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .group:hover .floating {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
        <EnhancedAboutSection />
      {/* Testimonials Section */}
      <section 
      id="testimonials-section"
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-6 h-6 text-yellow-400 fill-current transition-all duration-300 ${
                  isVisible ? 'scale-100' : 'scale-0'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
          <div className="text-sm text-gray-600 mb-8 font-medium">
            Excellent • 4.8 out of 5 • 2,500+ reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by thousands
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it
          </p>
        </div>

        <div 
          className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Main testimonial card */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 overflow-hidden">
            {/* Quote decoration */}
            <Quote className="absolute top-6 left-6 w-8 h-8 text-blue-100" />
            
            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="text-center max-w-3xl mx-auto">
              {/* Testimonial text with animation */}
              <div 
                className={`transition-all duration-300 ${
                  animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                <p className="text-lg md:text-xl text-gray-700 italic mb-8 leading-relaxed font-light">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                {/* Author info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-6000 ease-linear"
                style={{ 
                  width: `${((currentTestimonial + 1) / testimonials.length) * 100}%`,
                  animation: 'progress 6s linear infinite'
                }}
              />
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-105'
                }`}
              >
                {index === currentTestimonial && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse opacity-50 scale-150" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: ${100 / testimonials.length}%; }
        }
      `}</style>
    </section>

      {/* Pricing Section */}
      <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 transform transition-all duration-1000 opacity-100">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            SEO Plans for Every Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose a plan that fits your goals, whether you're just starting out or scaling your digital presence to new heights.
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              data-index={index}
              className={getCardClasses(plan, index)}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                background: plan.popular ? 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e0f2fe 100%)' : undefined
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    ⭐ Most Popular
                  </span>
                </div>
              )}

              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl"></div>
              )}

              <div className="text-center mb-8 relative z-10">
                <div className={`${plan.popular ? 'text-blue-600' : 'text-gray-600'} mb-6 flex justify-center transform transition-transform duration-500 hover:scale-110`}>
                  <div className={`p-4 rounded-2xl ${plan.popular ? 'bg-blue-100' : 'bg-gray-100'} shadow-lg`}>
                    {plan.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {plan.price.split('/')[0]}
                  </span>
                  <span className="text-lg text-gray-500">/{plan.price.split('/')[1]}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-10 relative z-10">
                {plan.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-center space-x-3 transform transition-all duration-500 hover:translate-x-2"
                    style={{ transitionDelay: `${(index * 200) + (featureIndex * 100)}ms` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={getButtonClasses(plan)}>
                <span className="relative z-10">{plan.buttonText}</span>
              </button>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-0 rounded-2xl ${plan.popular ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10' : 'bg-gradient-to-r from-gray-500/5 to-blue-500/5'} blur-xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional call-to-action section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Not sure which plan is right for you?
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}
