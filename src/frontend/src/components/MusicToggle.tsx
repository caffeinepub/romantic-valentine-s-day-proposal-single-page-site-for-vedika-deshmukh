import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicToggleProps {
  enabled?: boolean;
  autoStart?: boolean;
}

export function MusicToggle({ enabled = true, autoStart = false }: MusicToggleProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasAutoStartedRef = useRef(false);

  useEffect(() => {
    audioRef.current = new Audio('/assets/Gilehriyaan-Ringtone.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    audioRef.current.addEventListener('error', () => {
      setIsAvailable(false);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Auto-start music when enabled and autoStart is true
  useEffect(() => {
    if (enabled && autoStart && !hasAutoStartedRef.current && audioRef.current && isAvailable) {
      hasAutoStartedRef.current = true;
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error('Auto-play failed:', error);
          // Auto-play might be blocked by browser, user can manually start
        });
    }
  }, [enabled, autoStart, isAvailable]);

  // Stop music when disabled
  useEffect(() => {
    if (!enabled && audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [enabled, isPlaying]);

  const toggleMusic = async () => {
    if (!audioRef.current || !isAvailable || !enabled) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Audio playback failed:', error);
      setIsAvailable(false);
    }
  };

  if (!isAvailable || !enabled) {
    return null;
  }

  return (
    <button
      onClick={toggleMusic}
      className="fixed top-6 right-6 z-50 p-4 rounded-full bg-card/80 backdrop-blur-sm border-2 border-primary/30 shadow-romantic hover:shadow-romantic-lg transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        <Volume2 className="w-6 h-6 text-primary" />
      ) : (
        <VolumeX className="w-6 h-6 text-muted-foreground" />
      )}
    </button>
  );
}
