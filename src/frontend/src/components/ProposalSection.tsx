import { useState } from 'react';
import { SectionShell } from './SectionShell';
import { useEvasiveNoButton } from '../hooks/useEvasiveNoButton';
import { FloatingHeartsOverlay } from './FloatingHeartsOverlay';
import { Heart } from 'lucide-react';

export function ProposalSection() {
  const [answered, setAnswered] = useState(false);
  const { noButtonStyle, teasingText, handleNoHover } = useEvasiveNoButton();

  const handleYesClick = () => {
    setAnswered(true);
  };

  return (
    <SectionShell id="proposal" className="relative">
      <div className="text-center space-y-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary">
          Will you be my Valentine? 💘
        </h2>
        
        {!answered ? (
          <div className="space-y-8">
            <div className="relative min-h-[200px] flex items-center justify-center">
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                <button
                  onClick={handleYesClick}
                  className="px-12 py-6 text-2xl md:text-3xl font-bold rounded-full bg-primary text-primary-foreground hover:scale-110 active:scale-95 transition-all duration-300 shadow-romantic-lg hover:shadow-romantic animate-pulse-heart"
                >
                  YES 💖
                </button>
                
                <button
                  onMouseEnter={handleNoHover}
                  onTouchStart={handleNoHover}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNoHover();
                  }}
                  style={noButtonStyle}
                  className="px-12 py-6 text-2xl md:text-3xl font-bold rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors duration-300 shadow-romantic absolute"
                >
                  NO 😜
                </button>
              </div>
            </div>
            
            {teasingText && (
              <p className="text-xl md:text-2xl text-primary font-semibold animate-bounce-gentle">
                {teasingText}
              </p>
            )}
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <Heart className="w-24 h-24 text-primary fill-primary animate-pulse-heart mx-auto" />
            </div>
            
            <div className="max-w-2xl mx-auto space-y-6 text-xl md:text-2xl text-foreground leading-relaxed">
              <p className="text-3xl md:text-4xl font-bold text-primary">
                You said YES 😍
              </p>
              <p className="text-2xl md:text-3xl">
                You just made my heart the happiest 💖
              </p>
              <p className="text-lg md:text-xl">
                I promise to love you, respect you, and always stand by you.
              </p>
            </div>
            
            <FloatingHeartsOverlay />
          </div>
        )}
      </div>
    </SectionShell>
  );
}
