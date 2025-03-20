
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ThreeDElementProps {
  className?: string;
  children?: React.ReactNode;
  glowColor?: 'blue' | 'purple';
  animated?: boolean;
}

// This is a simulated 3D element using CSS transforms and perspective
const ThreeDElement: React.FC<ThreeDElementProps> = ({
  className = '',
  children,
  glowColor = 'blue',
  animated = true
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated || !elementRef.current) return;

    const element = elementRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      const centerX = width / 2;
      const centerY = height / 2;
      
      // Use smoother values and apply to wrapper only
      const rotateX = (y - centerY) / 25; // Less extreme rotation
      const rotateY = (centerX - x) / 25; // Less extreme rotation
      
      const wrapper = element.querySelector('.three-d-content-wrapper') as HTMLElement;
      if (wrapper) {
        wrapper.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
      }
    };
    
    const handleMouseLeave = () => {
      const wrapper = element.querySelector('.three-d-content-wrapper') as HTMLElement;
      if (wrapper) {
        wrapper.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      }
    };
    
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [animated]);

  const glowStyles = {
    blue: 'shadow-neon-blue',
    purple: 'shadow-neon-purple',
  };

  return (
    <div 
      ref={elementRef}
      className={cn(
        'relative transition-transform duration-200 ease-out overflow-hidden',
        animated ? 'hover:z-10' : '',
        glowStyles[glowColor],
        className
      )}
    >
      {/* Wrapper for 3D effect with smoother transition */}
      <div className="three-d-content-wrapper transition-all duration-300 ease-out">
        {/* Content container that stays stable */}
        <div className="relative">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ThreeDElement;
