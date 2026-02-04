import { useEffect, useState } from 'react';

interface FloatingEmoji {
  id: number;
  emoji: string;
  left: number;
  delay: number;
  duration: number;
}

const EMOJIS = ['💖', '💘', '✨', '🥰', '💕', '💗', '🐶', '🐱', '💝', '💓'];

export function FloatingHeartsOverlay() {
  const [emojis, setEmojis] = useState<FloatingEmoji[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newEmoji: FloatingEmoji = {
        id: Date.now() + Math.random(),
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        left: Math.random() * 100,
        delay: 0,
        duration: 3 + Math.random() * 2
      };

      setEmojis((prev) => [...prev, newEmoji]);

      setTimeout(() => {
        setEmojis((prev) => prev.filter((e) => e.id !== newEmoji.id));
      }, (newEmoji.duration + 1) * 1000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {emojis.map((emoji) => (
        <div
          key={emoji.id}
          className="absolute bottom-0 text-4xl md:text-5xl animate-float-up"
          style={{
            left: `${emoji.left}%`,
            animationDuration: `${emoji.duration}s`,
            animationDelay: `${emoji.delay}s`
          }}
        >
          {emoji.emoji}
        </div>
      ))}
    </div>
  );
}
