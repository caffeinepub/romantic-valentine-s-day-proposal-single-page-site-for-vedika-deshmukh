import { SectionShell } from './SectionShell';
import { useState, useRef } from 'react';
import { Play } from 'lucide-react';

export function HeroVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <SectionShell id="hero-video" className="bg-gradient-to-b from-card/30 to-transparent backdrop-blur-sm">
      <div className="text-center space-y-6">
        {/* Video container with overlay text */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl shadow-romantic-lg">
            <video
              ref={videoRef}
              // MOST RECENTLY UPLOADED VIDEO: lv_7589285474783595777_20260102143017-2.mp4 - This is the latest uploaded asset and is intentionally the only hero source to prevent reuse of older media.
              src="/assets/lv_7589285474783595777_20260102143017-2.mp4"
              className="w-full h-auto"
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />
            
            {/* Play button overlay - only show when not playing */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                <button
                  onClick={handlePlayClick}
                  className="group flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 hover:bg-primary transition-all duration-300 shadow-romantic-lg hover:scale-110"
                  aria-label="Play video"
                >
                  <Play className="w-10 h-10 md:w-12 md:h-12 text-white ml-1 group-hover:scale-110 transition-transform" fill="white" />
                </button>
              </div>
            )}
            
            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold text-center text-glow-soft">
                This video holds a piece of my heart 💖
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
