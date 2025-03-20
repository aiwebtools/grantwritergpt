
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import CTAButton from './CTAButton';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-cyber-black/80 backdrop-blur-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <a 
            href="https://chatgpt.com/g/g-67db608596448191b99ec4ac18d92d3e-grant-writer-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-cyber-blue transition-colors"
          >
            Grant Writer GPT
          </a>
          <a 
            href="https://businessplanandtrainai.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-cyber-blue transition-colors"
          >
            View Business AI Tools Suite
          </a>
          <a 
            href="#faq" 
            className="text-white/80 hover:text-cyber-blue transition-colors"
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-white/80 hover:text-cyber-blue transition-colors"
          >
            Disclaimer
          </a>
          <CTAButton 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            More AI Tools
          </CTAButton>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-cyber-black/95 backdrop-blur-lg absolute top-full left-0 right-0 p-4 flex flex-col space-y-4 border-t border-cyber-blue/20 animate-slide-down">
          <a 
            href="https://chatgpt.com/g/g-67db608596448191b99ec4ac18d92d3e-grant-writer-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-cyber-blue transition-colors py-2 px-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Grant Writer GPT
          </a>
          <a 
            href="https://businessplanandtrainai.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-cyber-blue transition-colors py-2 px-4"
            onClick={() => setIsMenuOpen(false)}
          >
            View Business AI Tools Suite
          </a>
          <a 
            href="#faq" 
            className="text-white/80 hover:text-cyber-blue transition-colors py-2 px-4"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-white/80 hover:text-cyber-blue transition-colors py-2 px-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Disclaimer
          </a>
          <CTAButton 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4"
            onClick={() => setIsMenuOpen(false)}
          >
            More AI Tools
          </CTAButton>
        </div>
      )}
    </header>
  );
};

export default Header;
