import { SectionShell } from './SectionShell';

export function OurBestMemoriesSection() {
  return (
    <SectionShell id="our-best-memories" className="bg-card/50 backdrop-blur-sm">
      <div className="text-center space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-8">
          Our Best Memories 💖
        </h2>
        
        {/* Featured couple photo with romantic frame and glow */}
        <div className="relative max-w-2xl mx-auto">
          <div className="romantic-photo-frame">
            <img 
              src="/assets/IMG-20250712-WA0273-2.jpg" 
              alt="Our Best Memories Together"
              className="w-full h-auto rounded-3xl shadow-romantic-lg"
            />
          </div>
          
          {/* Floating hearts decoration */}
          <div className="absolute -top-4 -left-4 text-4xl animate-bounce-gentle">
            💖
          </div>
          <div className="absolute -top-4 -right-4 text-4xl animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
            💕
          </div>
          <div className="absolute -bottom-4 -left-4 text-4xl animate-bounce-gentle" style={{ animationDelay: '1s' }}>
            ✨
          </div>
          <div className="absolute -bottom-4 -right-4 text-4xl animate-bounce-gentle" style={{ animationDelay: '1.5s' }}>
            💘
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
