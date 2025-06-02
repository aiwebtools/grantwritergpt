
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import FAQSection from '@/components/FAQSection';
import DisclaimerSection from '@/components/DisclaimerSection';
import ConsentModal from '@/components/ConsentModal';
import CTAButton from '@/components/CTAButton';
import { ArrowRight, Info } from 'lucide-react';

const Index = () => {
  const [showConsent, setShowConsent] = useState(true);
  const [hasAccepted, setHasAccepted] = useState(() => {
    const saved = localStorage.getItem('grantWriterConsent');
    return saved === 'true';
  });

  useEffect(() => {
    if (hasAccepted) {
      setShowConsent(false);
      localStorage.setItem('grantWriterConsent', 'true');
    }
  }, [hasAccepted]);

  const handleConsentAccept = () => {
    setHasAccepted(true);
    setShowConsent(false);
  };

  return (
    <div className="min-h-screen bg-cyber-dark relative">
      {/* Fixed background with grid effect */}
      <div className="fixed inset-0 bg-cyberpunk-grid opacity-10 pointer-events-none"></div>
      
      {/* Small Disclaimer Notice */}
      <div className="bg-cyber-blue/10 border-b border-cyber-blue/20 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-center">
            <Info className="w-4 h-4 text-cyber-blue mr-2 flex-shrink-0" />
            <p className="text-xs text-white/70">
              This tool is provided for informational, educational, and research purposes only. Professional review recommended before submission.
            </p>
          </div>
        </div>
      </div>
      
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Image Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gradient mb-4">
                Professional Grant Proposals Made Easy
              </h2>
              <p className="text-lg text-white/70">
                See how Grant Writer GPT transforms your ideas into winning grant applications
              </p>
            </div>
            
            <div className="relative mx-auto max-w-4xl">
              <a 
                href="https://ideogram.ai/assets/image/lossless/response/7T7dnU0tQBicMPGZHYXhEw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative rounded-xl overflow-hidden shadow-neon-blue group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <span className="text-white font-medium flex items-center">
                    View Full Image <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
                <img 
                  src="https://ideogram.ai/assets/image/lossless/response/7T7dnU0tQBicMPGZHYXhEw"
                  alt="Grant Writer GPT in action" 
                  className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </section>
        
        <FeatureSection />
        
        <TestimonialSection />
        
        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-cyber-purple/20 via-transparent to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="glass-morphism rounded-2xl p-8 lg:p-12 max-w-5xl mx-auto text-center border border-cyber-purple/30">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gradient mb-6">
                Ready to Secure Your Next Grant?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join organizations worldwide who are increasing their funding success with Grant Writer GPT.
              </p>
              
              <CTAButton 
                href="https://chatgpt.com/g/g-67db608596448191b99ec4ac18d92d3e-grant-writer-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                size="lg"
                variant="secondary"
                className="px-8 py-4"
              >
                Try Grant Writer GPT Now
              </CTAButton>
            </div>
          </div>
        </section>
        
        <FAQSection />
        
        <DisclaimerSection />
      </main>
      
      <Footer />
      
      {showConsent && !hasAccepted && <ConsentModal onAccept={handleConsentAccept} />}
    </div>
  );
};

export default Index;
