
import React, { useState, useEffect, useCallback } from 'react';
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const navLinks = [
    { href: "https://chatgpt.com/g/g-67db608596448191b99ec4ac18d92d3e-grant-writer-gpt", label: "Grant Writer GPT", external: true },
    { href: "https://businessplanandtrainai.lovable.app/?via=aiwebtools", label: "View Business AI Tools Suite", external: true },
    { href: "#faq", label: "FAQ", external: false },
    { href: "#disclaimer", label: "Disclaimer", external: false },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 sm:py-3 bg-cyber-black/80 backdrop-blur-md' : 'py-3 sm:py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-white focus:outline-none active:scale-95 transition-transform touch-manipulation p-2 -mr-2"
          onClick={() => setIsMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map(link => (
            <a 
              key={link.href}
              href={link.href} 
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-white/80 hover:text-cyber-blue transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <CTAButton 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            More AI Tools
          </CTAButton>
        </nav>
      </div>
      
      {/* Mobile menu with CSS transition */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-cyber-black/95 backdrop-blur-lg border-t border-cyber-blue/20 transition-all duration-200 ease-out origin-top ${
          isMenuOpen 
            ? 'opacity-100 scale-y-100 pointer-events-auto' 
            : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
        style={{ transformOrigin: 'top center' }}
      >
        <div className="p-4 flex flex-col space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
          {navLinks.map(link => (
            <a 
              key={link.href}
              href={link.href} 
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-white/80 hover:text-cyber-blue active:text-cyber-blue transition-colors py-3 px-4 rounded-lg hover:bg-white/5 active:bg-white/10 touch-manipulation text-base"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 px-4">
            <CTAButton 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full justify-center"
              onClick={closeMenu}
            >
              More AI Tools
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Overlay to close menu */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-full bg-black/40 -z-10"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;
