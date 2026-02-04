import { SectionShell } from './SectionShell';

export function SorrySection() {
  return (
    <SectionShell id="sorry" className="bg-card/50 backdrop-blur-sm">
      <div className="text-center space-y-8">
        <div className="inline-flex items-center gap-3 text-3xl mb-4">
          <span>🐶</span>
          <span>💝</span>
          <span>🐱</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary">
          Sorry Vedu…
        </h2>
        
        <div className="max-w-2xl mx-auto space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed text-left">
          <p>
            If anything I ever did hurt you, it was never my intention.
          </p>
          
          <p>
            Whatever I did wrong was never meant to push you to share our things with everyone or to bring your past back again.
          </p>
          
          <p>
            Seeing you still connected to your ex really hurts me.<br />
            I feel broken, confused, and honestly lost.<br />
            Because I was trying to be better… trying to be perfect for you, even though I know nobody is perfect.
          </p>
          
          <p>
            But somewhere along the way, I felt like your interest in me slowly faded.<br />
            And I don't know how to accept that, because my feelings were real.
          </p>
          
          <p className="text-xl md:text-2xl font-semibold text-primary pt-4 text-center">
            I truly loved you, Vedu.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
