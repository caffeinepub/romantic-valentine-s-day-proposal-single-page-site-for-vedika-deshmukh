import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
}

export function RosePetalsOverlay() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const initialPetals: Petal[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 8 + Math.random() * 6,
      delay: Math.random() * 5,
      size: 0.8 + Math.random() * 0.6,
    }));
    setPetals(initialPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-float-up"
          style={{
            left: `${petal.left}%`,
            bottom: '-50px',
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            fontSize: `${petal.size * 2}rem`,
            opacity: 0.6,
          }}
        >
          🌹
        </div>
      ))}
    </div>
  );
}
