import KeywordResearchHero from './Services-hero';
import { Search, Target, TrendingUp, Users, BarChart3, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import WhatsIncludedSection from './Services-includes'
import SEOProcessSection from './Services-procces';
import EnhancedKeywordSection from './Services-search'

export default function Service() {
  return (
    <div className="min-h-screen bg-white">
      <KeywordResearchHero />
      <WhatsIncludedSection />
      <SEOProcessSection />
      <EnhancedKeywordSection />

      

      
    </div>
  );
}