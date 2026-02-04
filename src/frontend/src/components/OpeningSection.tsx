import { SectionShell } from './SectionShell';
import { Heart } from 'lucide-react';

export function OpeningSection() {
  return (
    <SectionShell className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="inline-block animate-bounce-gentle">
          <Heart className="w-16 h-16 md:w-20 md:h-20 text-primary fill-primary mx-auto" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary leading-tight">
          Hey Vedika Deshmukh 💕
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl">
            My Future Doctor, My Forever Valentine
          </span>
        </h1>
        
        <div className="max-w-2xl mx-auto space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed">
          <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Every moment with you feels like a dream come true. You inspire me with your dedication, 
            your kindness, and your beautiful soul. Watching you work towards becoming a doctor fills 
            my heart with so much pride and love. 💖
          </p>
          
          <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            You are not just my Valentine, Vedika Deshmukh — you are my best friend, my confidant, 
            and the person who makes every day brighter. Your smile lights up my world, and your 
            laughter is my favorite melody. 🐶🐱✨
          </p>
          
          <p className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            I cherish every conversation, every shared moment, and every memory we create together. 
            You make me want to be a better person, and I am so grateful to have you in my life. 🥰💌
          </p>
        </div>
        
        <div className="pt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center gap-3 text-2xl">
            <span>🐶</span>
            <span className="text-primary">•</span>
            <span>🐱</span>
            <span className="text-primary">•</span>
            <span>💖</span>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
