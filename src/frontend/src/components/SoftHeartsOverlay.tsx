import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
}

export function SoftHeartsOverlay() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    // Generate a small number of hearts for a subtle effect
    const generateHearts = () => {
      const newHearts: Heart[] = [];
      for (let i = 0; i < 8; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          duration: 8 + Math.random() * 6, // 8-14 seconds
          delay: Math.random() * 5,
          size: 1.5 + Math.random() * 1.5 // 1.5-3rem
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 animate-float-up opacity-60"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}rem`
          }}
        >
          💖
        </div>
      ))}
    </div>
  );
}
