
import React from 'react';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  target?: string;
  rel?: string;
  oval?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  target,
  rel,
  oval = false,
}) => {
  const baseStyles = "relative font-medium transition-all duration-300 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyber-blue/50";
  
  const variantStyles = {
    primary: "bg-gradient-blue text-white hover:shadow-neon-blue",
    secondary: "bg-gradient-purple text-white hover:shadow-neon-purple",
    outline: "bg-transparent border border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10",
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-1",
    md: "text-md px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  const shapeStyles = oval ? "rounded-full" : "rounded-md";

  const buttonStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    shapeStyles,
    className
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={buttonStyles}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={buttonStyles}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default CTAButton;
