
import React from 'react';
import { CircuitBoard } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <CircuitBoard className="w-8 h-8 text-cyber-blue" />
      <div className="flex flex-col">
        <span className="font-display font-bold text-lg leading-tight text-gradient-primary">
          Grant Writer GPT
        </span>
        <span className="text-xs text-muted-foreground font-normal leading-tight">
          Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-blue transition-colors">AiWebTools.Ai</a>
        </span>
      </div>
    </div>
  );
};

export default Logo;
