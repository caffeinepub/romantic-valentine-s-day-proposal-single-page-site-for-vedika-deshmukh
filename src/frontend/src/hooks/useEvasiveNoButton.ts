import { useState, useCallback, CSSProperties } from 'react';

const TEASING_TEXTS = [
  "Nope 😝 You can't say no!",
  "Nice try Vedu 😘",
  "Not happening! 💕",
  "Try again! 😊",
  "You know you want to say yes! 💖"
];

export function useEvasiveNoButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [teasingIndex, setTeasingIndex] = useState(0);
  const [teasingText, setTeasingText] = useState('');

  const handleNoHover = useCallback(() => {
    const maxX = window.innerWidth > 640 ? 300 : 150;
    const maxY = window.innerWidth > 640 ? 200 : 100;
    
    const newX = (Math.random() - 0.5) * maxX;
    const newY = (Math.random() - 0.5) * maxY;
    
    setPosition({ x: newX, y: newY });
    
    setTeasingText(TEASING_TEXTS[teasingIndex]);
    setTeasingIndex((prev) => (prev + 1) % TEASING_TEXTS.length);
  }, [teasingIndex]);

  const noButtonStyle: CSSProperties = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: 'transform 0.3s ease-out'
  };

  return {
    noButtonStyle,
    teasingText,
    handleNoHover
  };
}
