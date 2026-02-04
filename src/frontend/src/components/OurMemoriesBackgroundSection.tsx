import { SectionShell } from './SectionShell';

export function OurMemoriesBackgroundSection() {
  return (
    <SectionShell id="our-memories" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen background image with reduced opacity */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/assets/photo-2.jpg)',
          opacity: 0.25
        }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-0 bg-black/40" />
      
      {/* Content with blur and glow effect */}
      <div className="relative z-10 text-center space-y-8 px-4">
        <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 max-w-4xl mx-auto leading-relaxed text-glow-romantic font-display">
          Every time I see you, my heart feels at home 💖
        </p>
      </div>
    </SectionShell>
  );
}
