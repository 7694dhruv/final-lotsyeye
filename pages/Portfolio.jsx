import React, { useState } from 'react';
import EnhancedHeroSection from './Portfolio-hero';
import EnhancedStatsSection from './Portfolio-stats';
import AboutSection from './Portfolio-about';
import EnhancedPortfolio from './Portfolio-cards';
import ContactSection from './Portfolio-last';
import { Menu, X, ChevronDown, Award, Users, Briefcase, Star } from 'lucide-react';

const Portfolio = () => {
  

  return (
    <div className="min-h-screen bg-white">
      

      <EnhancedHeroSection />
      <EnhancedStatsSection />
      <AboutSection />
      <EnhancedPortfolio />
      <ContactSection/>
     
      
      
    </div>
  );
};

export default Portfolio;