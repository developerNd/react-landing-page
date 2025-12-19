import React, { useEffect, useRef, useState } from 'react';

export const AnimatedSection = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const animations = {
    'fade-up': {
      initial: 'opacity-0 translate-y-8',
      animate: 'opacity-100 translate-y-0',
    },
    'fade-in': {
      initial: 'opacity-0',
      animate: 'opacity-100',
    },
    'scale-in': {
      initial: 'opacity-0 scale-95',
      animate: 'opacity-100 scale-100',
    },
    'slide-left': {
      initial: 'opacity-0 translate-x-8',
      animate: 'opacity-100 translate-x-0',
    },
    'slide-right': {
      initial: 'opacity-0 -translate-x-8',
      animate: 'opacity-100 translate-x-0',
    },
  };

  const animationClasses = animations[animation] || animations['fade-up'];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? animationClasses.animate : animationClasses.initial
      } ${className}`}
    >
      {children}
    </div>
  );
};
