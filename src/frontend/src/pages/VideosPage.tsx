import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, Pause } from 'lucide-react';
import { SoftHeartsOverlay } from '@/components/SoftHeartsOverlay';
import { useState, useRef } from 'react';

interface VideosPageProps {
  onBack: () => void;
}

export function VideosPage({ onBack }: VideosPageProps) {
  // List of uploaded video assets
  const videos = [
    '/assets/Snapchat-1188898064.mp4',
    '/assets/Snapchat-1277729824.mp4',
    '/assets/Snapchat-1394047529.mp4',
    '/assets/Snapchat-1910676471.mp4',
    '/assets/Snapchat-615758016.mp4',
    '/assets/VID_20250729_004947_872.mp4',
    '/assets/VID_20250823_104411_398.mp4',
    '/assets/VID_20250823_104508_305.mp4',
    '/assets/VID_20250823_105833_096.mp4',
    '/assets/lv_7589285474783595777_20260102143017-1.mp4',
    '/assets/lv_7589285474783595777_20260102143017.mp4'
  ];

  return (
    <div className="min-h-screen romantic-gradient relative overflow-x-hidden">
      <SoftHeartsOverlay />
      
      {/* Header with back button */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/30">
        <div className="container mx-auto px-4 py-4">
          <Button
            onClick={onBack}
            variant="ghost"
            className="gap-2 hover:bg-primary/10"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Videos content */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary">
              Memories That Mean Everything 💖
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
              Our story in motion ✨
            </p>
          </div>

          {/* Video gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {videos.map((video, index) => (
              <VideoCard key={index} videoSrc={video} index={index} />
            ))}
          </div>

          {/* Bottom message */}
          <div className="pt-8">
            <p className="text-lg md:text-xl text-foreground/70 italic">
              Every moment with you is worth remembering 💖
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-sm text-muted-foreground border-t border-border/30 bg-card/50 backdrop-blur-sm mt-12">
        <p className="flex items-center justify-center gap-2 flex-wrap px-4">
          © 2026. Built with <span className="text-primary animate-pulse-heart">💖</span> using{' '}
          <a 
            href="https://caffeine.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

interface VideoCardProps {
  videoSrc: string;
  index: number;
}

function VideoCard({ videoSrc, index }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-3xl shadow-romantic-lg hover:shadow-romantic-lg hover:scale-105 transition-all duration-500 bg-card/50 backdrop-blur-sm"
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className="relative aspect-video">
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-cover rounded-2xl"
          onEnded={handleVideoEnd}
          playsInline
        />
        
        {/* Play/Pause overlay */}
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity duration-300"
          onClick={togglePlay}
          style={{
            opacity: isPlaying ? 0 : 1
          }}
        >
          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-colors duration-300">
            {isPlaying ? (
              <Pause className="w-8 h-8 text-primary-foreground" />
            ) : (
              <Play className="w-8 h-8 text-primary-foreground ml-1" />
            )}
          </div>
        </div>

        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
      </div>
    </div>
  );
}
