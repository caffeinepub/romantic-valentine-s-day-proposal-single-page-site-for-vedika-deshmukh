import { SectionShell } from './SectionShell';
import { Card, CardContent } from './ui/card';
import { Lock } from 'lucide-react';

interface VideosSectionProps {
  onNavigateToPhotos: () => void;
  onNavigateToVideos: () => void;
  isLocked?: boolean;
}

export function VideosSection({ onNavigateToPhotos, onNavigateToVideos, isLocked = false }: VideosSectionProps) {
  const cards = [
    {
      title: 'Our Best Moments 💕',
      gradient: 'from-pink-400/20 to-rose-400/20',
      onClick: onNavigateToPhotos
    },
    {
      title: 'Memories That Mean Everything 💖',
      gradient: 'from-rose-400/20 to-red-400/20',
      onClick: onNavigateToVideos
    }
  ];

  const handleCardClick = (onClick: () => void) => {
    if (!isLocked) {
      onClick();
    }
  };

  return (
    <SectionShell id="moments" className="bg-card/50 backdrop-blur-sm">
      <div className="text-center space-y-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary">
          Our Moments Together 💖
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="relative">
              <Card 
                className={`
                  group overflow-hidden border-2 border-primary/20 transition-all duration-300
                  ${isLocked ? 'cursor-not-allowed opacity-60' : 'cursor-pointer hover:border-primary/50 hover:shadow-romantic-lg hover:scale-105'}
                `}
                onClick={() => handleCardClick(card.onClick)}
              >
                <CardContent className={`p-12 bg-gradient-to-br ${card.gradient} relative ${isLocked ? 'blur-sm' : ''}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 transition-opacity duration-300 ${isLocked ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`} />
                  
                  <h3 className={`text-2xl md:text-3xl font-display font-semibold text-foreground relative z-10 transition-colors duration-300 ${isLocked ? '' : 'group-hover:text-primary'}`}>
                    {card.title}
                  </h3>
                  
                  {/* Decorative hearts */}
                  <div className={`absolute top-4 right-4 text-3xl opacity-50 transition-all duration-300 ${isLocked ? '' : 'group-hover:opacity-100 group-hover:scale-125'}`}>
                    💖
                  </div>
                  <div className={`absolute bottom-4 left-4 text-2xl opacity-50 transition-all duration-300 ${isLocked ? '' : 'group-hover:opacity-100 group-hover:scale-125'}`} style={{ transitionDelay: '0.1s' }}>
                    ✨
                  </div>
                </CardContent>
              </Card>

              {/* Lock Overlay */}
              {isLocked && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-card/90 backdrop-blur-sm rounded-full p-4 border-2 border-primary/30 shadow-romantic">
                    <Lock className="w-8 h-8 text-primary" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
