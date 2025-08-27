import React from 'react';
import EnhancedAboutHeroSection from './About-hero';
import EnhancedVisionMission from './About-mission';
import EnhancedTeamSection from './About-team';
import EnhancedCTASection from './Aboout-cta';
import EnhancedStatsSection from './About-stat';


export default function About() {
  

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedAboutHeroSection /> 
      <EnhancedVisionMission />
      <EnhancedTeamSection />
      <EnhancedCTASection />
      <EnhancedStatsSection />
    </div>
  );
}