
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
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      // Apply the transformation to a wrapper element inside the main container
      // so the content remains stable
      const wrapper = element.querySelector('.three-d-content-wrapper') as HTMLElement;
      if (wrapper) {
        wrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      }
    };
    
    const handleMouseLeave = () => {
      const wrapper = element.querySelector('.three-d-content-wrapper') as HTMLElement;
      if (wrapper) {
        wrapper.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
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
        'transition-transform duration-200 ease-out',
        animated ? 'hover:z-10' : '',
        glowStyles[glowColor],
        className
      )}
    >
      <div className="three-d-content-wrapper transition-transform duration-200 ease-out">
        {children}
      </div>
    </div>
  );
};

export default ThreeDElement;
