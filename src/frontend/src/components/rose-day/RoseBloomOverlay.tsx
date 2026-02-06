import { useEffect, useState, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface RoseBloomOverlayProps {
  onComplete?: () => void;
  runKey: number;
}

export function RoseBloomOverlay({ onComplete, runKey }: RoseBloomOverlayProps) {
  const [showMessage, setShowMessage] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Reset state when runKey changes (replay)
    setShowMessage(false);

    // Create and play heartbeat audio
    const audio = new Audio('/assets/heartbeat-soft.mp3');
    audio.volume = 0.3;
    audio.loop = true;
    audioRef.current = audio;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.warn('Heartbeat audio playback failed:', error);
      });
    }

    // Show message after animation completes
    const animationDuration = prefersReducedMotion ? 1000 : 6500;
    const timer = setTimeout(() => {
      setShowMessage(true);
      if (onComplete) onComplete();
    }, animationDuration);

    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };
  }, [runKey, prefersReducedMotion, onComplete]);

  // Stop audio when message appears
  useEffect(() => {
    if (showMessage && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [showMessage]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-rose-overlay-fade-in">
      <div className="relative w-full max-w-2xl px-4">
        {!showMessage ? (
          <div className="relative flex items-center justify-center">
            {/* Floating petals around the rose */}
            {!prefersReducedMotion && (
              <>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-4xl animate-rose-petal-drift"
                    style={{
                      left: `${20 + (i * 10)}%`,
                      top: `${15 + (i % 3) * 20}%`,
                      animationDelay: `${i * 0.4}s`,
                      animationDuration: `${4 + (i % 3)}s`,
                    }}
                  >
                    🌹
                  </div>
                ))}
              </>
            )}

            {/* Main rose with bloom animation */}
            <div
              className={`relative ${
                prefersReducedMotion
                  ? 'opacity-100 scale-100'
                  : 'animate-rose-bloom'
              }`}
            >
              <div className="text-[12rem] leading-none animate-rose-glow">
                🌹
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-6 animate-rose-message-fade-in">
            <div className="text-5xl mb-4">🌹</div>
            <p className="text-3xl md:text-4xl font-display text-white leading-relaxed">
              This rose blooms only for you, Vedu ❤️
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
