
import React from 'react';
import CTAButton from './CTAButton';
import ThreeDElement from './ThreeDElement';
import { FileText, CheckCircle2, Shield, Award } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyberpunk-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-block px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/20 rounded-full text-sm text-cyber-blue font-medium mb-2">
              AI-Powered Grant Writing Assistant
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-gradient">
              Secure Funding with <span className="text-gradient-primary">Professional</span> Grant Proposals
            </h1>
            
            <p className="text-lg text-white/80 max-w-2xl">
              Grant Writer GPT helps non-profits, research institutions, and businesses craft compelling, tailored proposals that maximize chances of securing funds.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <CTAButton 
                href="https://chatgpt.com/g/g-67db608596448191b99ec4ac18d92d3e-grant-writer-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                size="lg"
              >
                Try Grant Writer GPT
              </CTAButton>
              
              <CTAButton 
                href="#how-it-works"
                variant="outline"
                size="lg"
              >
                Learn How It Works
              </CTAButton>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-8 pt-4">
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-cyber-blue mr-2" />
                <span className="text-white/80">Expert-Level Assistance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-cyber-blue mr-2" />
                <span className="text-white/80">Funder-Specific Format</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-cyber-blue mr-2" />
                <span className="text-white/80">Persuasive Narratives</span>
              </div>
            </div>
          </div>
          
          {/* 3D Card/Visual - Updated with more meaningful content */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <ThreeDElement className="glass-morphism rounded-xl p-6 max-w-md w-full">
              <div className="flex items-start mb-4">
                <div className="bg-cyber-blue/20 p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-cyber-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-display font-bold text-white">Grant Proposal Template</h3>
                  <p className="text-white/60 text-sm">Proven Structure for Success</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="h-8 bg-white/5 rounded-md w-full flex items-center px-3">
                  <span className="text-white/70 text-sm">Executive Summary</span>
                </div>
                <div className="h-24 bg-white/5 rounded-md w-full p-3">
                  <p className="text-white/70 text-xs line-clamp-4">
                    Our organization seeks $75,000 to implement the Community Health Initiative, 
                    addressing critical healthcare access issues in underserved neighborhoods. 
                    This 12-month program will establish mobile clinics, provide preventative care, 
                    and offer health education to approximately 5,000 residents.
                  </p>
                </div>
                <div className="h-16 bg-white/5 rounded-md w-3/4 p-3">
                  <p className="text-white/70 text-xs line-clamp-2">
                    Measurable outcomes include: 30% increase in preventative screenings, 
                    25% reduction in ER visits, and 40% improvement in health literacy.
                  </p>
                </div>
                <div className="h-8 bg-white/5 rounded-md w-1/2 flex items-center px-3">
                  <span className="text-white/70 text-xs">Budget: $75,000</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Award className="w-4 h-4 text-cyber-green mr-2" />
                  <span className="text-cyber-green text-xs">90% Success Rate</span>
                </div>
                <div className="text-xs text-white/60">Tailored to Your Mission</div>
              </div>
            </ThreeDElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
