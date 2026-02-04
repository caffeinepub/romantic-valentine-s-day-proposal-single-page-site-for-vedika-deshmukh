import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { SoftHeartsOverlay } from '@/components/SoftHeartsOverlay';

interface GalleryPageProps {
  onBack: () => void;
}

export function GalleryPage({ onBack }: GalleryPageProps) {
  // Curated list of uploaded photos - only real assets, max 5
  const photos = [
    '/assets/IMG-20250712-WA0273-2.jpg',
    '/assets/IMG-20250712-WA0271.jpg',
    '/assets/IMG-20250712-WA0216.jpg',
    '/assets/IMG-20250712-WA0242.jpg',
    '/assets/photo-1.jpg'
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

      {/* Gallery content */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary">
              Our Beautiful Memories 💖
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
              Every photo tells a story of us ✨
            </p>
          </div>

          {/* Photo gallery - minimal and romantic */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {photos.map((photo, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-romantic-lg hover:shadow-romantic-lg hover:scale-105 transition-all duration-500"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="romantic-photo-frame">
                  <img 
                    src={photo}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-auto rounded-2xl"
                    loading="lazy"
                  />
                </div>
                
                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
              </div>
            ))}
          </div>

          {/* Bottom message */}
          <div className="pt-8">
            <p className="text-lg md:text-xl text-foreground/70 italic">
              These moments with you are my favorite treasures 💕
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
