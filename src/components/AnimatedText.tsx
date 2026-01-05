'use client';

import { useEffect, useRef, useState } from 'react';
import Typewriter from './Typewriter';

interface AnimatedTextProps {
  text: string;
  className?: string;
  speed?: number;
  triggerOnScroll?: boolean;
  delay?: number;
}

export default function AnimatedText({ 
  text, 
  className = '', 
  speed = 50,
  triggerOnScroll = true,
  delay = 0
}: AnimatedTextProps) {
  const [shouldAnimate, setShouldAnimate] = useState(!triggerOnScroll);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerOnScroll || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            if (delay > 0) {
              setTimeout(() => {
                setShouldAnimate(true);
                setHasAnimated(true);
              }, delay);
            } else {
              setShouldAnimate(true);
              setHasAnimated(true);
            }
          }
        });
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
  }, [triggerOnScroll, hasAnimated, delay]);

  if (!shouldAnimate) {
    return <div ref={ref} className={className}></div>;
  }

  return (
    <div ref={ref} className={className}>
      <Typewriter text={text} speed={speed} />
    </div>
  );
}

