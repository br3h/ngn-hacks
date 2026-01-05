'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export default function Typewriter({ text, speed = 50, className = '', onComplete }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedText('');
    setIsTyping(true);
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index += 1;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
        if (onComplete) {
          onComplete();
        }
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, [text, speed, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {isTyping && <span className="animate-pulse text-primary">|</span>}
    </span>
  );
}

