
import React from 'react';
import Logo from './Logo';
import CTAButton from './CTAButton';
import { Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-darker py-16 border-t border-cyber-blue/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div className="space-y-4">
            <Logo />
            <p className="text-white/70 text-sm mt-4">
              Grant Writer GPT helps you craft professional, compelling, and effective grant proposals for your organization.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-white font-display font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-67db608596448191b99ec4ac18d92d3e-grant-writer-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-cyber-blue transition-colors text-sm"
                >
                  Grant Writer GPT
                </a>
              </li>
              <li>
                <a 
                  href="https://businessplanandtrainai.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-cyber-blue transition-colors text-sm"
                >
                  Business AI Tools Suite
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-white/70 hover:text-cyber-blue transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-white/70 hover:text-cyber-blue transition-colors text-sm"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-cyber-blue transition-colors text-sm"
                >
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-white font-display font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-cyber-blue transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-cyber-blue transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-display font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="text-cyber-blue mr-2" />
                <a 
                  href="tel:+14758008096" 
                  className="text-white/70 hover:text-cyber-blue transition-colors text-sm"
                >
                  (475) 800-8096
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-cyber-blue mr-2" />
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-white/70 hover:text-cyber-blue transition-colors text-sm"
                >
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-cyber-blue/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-blue">AI WEB TOOLS LLC</a> All rights reserved.
          </p>
          
          <CTAButton 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            oval={true}
            className="px-6"
            variant="secondary"
          >
            More AI Tools
          </CTAButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
