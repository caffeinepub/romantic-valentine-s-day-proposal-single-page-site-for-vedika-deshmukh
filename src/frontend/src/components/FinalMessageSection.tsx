import { SectionShell } from './SectionShell';
import { Heart } from 'lucide-react';

export function FinalMessageSection() {
  return (
    <SectionShell id="final" className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-12">
        <div className="inline-block animate-pulse-heart">
          <Heart className="w-20 h-20 md:w-24 md:h-24 text-primary fill-primary mx-auto" />
        </div>
        
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary leading-tight">
            Happy Valentine's Day, My Vedu 💝
          </h2>
          
          <p className="text-2xl md:text-3xl text-foreground/90 max-w-2xl mx-auto leading-relaxed">
            You are my today, my tomorrow, and my forever.
          </p>
        </div>
        
        <div className="pt-8 space-y-6">
          <p className="text-xl md:text-2xl font-display italic text-foreground/80">
            Forever Yours,
            <br />
            <span className="text-2xl md:text-3xl font-bold text-primary">— Yash ❤️</span>
          </p>
        </div>
        
        <div className="pt-12 max-w-2xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-romantic-lg border-2 border-primary/20">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              This website is specially created only for you, <span className="font-bold text-primary">Vedika</span>.
              <br />
              <span className="text-xl md:text-2xl font-semibold text-primary block mt-4">
                Just love. No conditions.
              </span>
              <br />
              <span className="text-2xl md:text-3xl font-bold text-primary block mt-2">
                Love you Vedu 💖
              </span>
            </p>
          </div>
        </div>
        
        <div className="pt-8 flex items-center justify-center gap-4 text-3xl">
          <span className="animate-bounce-gentle">🐶</span>
          <span className="animate-pulse-heart">💖</span>
          <span className="animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>🐱</span>
        </div>
      </div>
    </SectionShell>
  );
}
