import { SectionShell } from './SectionShell';
import { Card, CardContent } from './ui/card';

interface VideosSectionProps {
  onNavigateToGallery: () => void;
}

export function VideosSection({ onNavigateToGallery }: VideosSectionProps) {
  const cards = [
    {
      title: 'Our Best Moments 💕',
      gradient: 'from-pink-400/20 to-rose-400/20'
    },
    {
      title: 'Memories That Mean Everything 💖',
      gradient: 'from-rose-400/20 to-red-400/20'
    }
  ];

  return (
    <SectionShell id="moments" className="bg-card/50 backdrop-blur-sm">
      <div className="text-center space-y-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary">
          Our Moments Together 💖
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <Card 
              key={index}
              className="group cursor-pointer overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-romantic-lg hover:scale-105"
              onClick={onNavigateToGallery}
            >
              <CardContent className={`p-12 bg-gradient-to-br ${card.gradient} relative`}>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground relative z-10 group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>
                
                {/* Decorative hearts */}
                <div className="absolute top-4 right-4 text-3xl opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300">
                  💖
                </div>
                <div className="absolute bottom-4 left-4 text-2xl opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" style={{ transitionDelay: '0.1s' }}>
                  ✨
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
