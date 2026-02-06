import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Heart } from 'lucide-react';
import { RoseBloomOverlay } from './RoseBloomOverlay';

export function RoseDayRevealPage() {
  const [showDialog, setShowDialog] = useState(false);
  const [animationRunKey, setAnimationRunKey] = useState(0);

  const handleButtonClick = () => {
    setAnimationRunKey((prev) => prev + 1);
    setShowDialog(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-12">
      <Card className="max-w-3xl w-full p-8 md:p-12 space-y-8 bg-card/95 backdrop-blur-sm border-2 border-rose-200/50 shadow-rose-glow">
        <div className="text-center space-y-6">
          <div className="flex justify-center gap-2">
            <Heart className="w-12 h-12 text-rose-500 fill-rose-500 animate-pulse-heart" />
            <Heart className="w-12 h-12 text-pink-500 fill-pink-500 animate-pulse-heart" style={{ animationDelay: '0.2s' }} />
            <Heart className="w-12 h-12 text-rose-500 fill-rose-500 animate-pulse-heart" style={{ animationDelay: '0.4s' }} />
          </div>

          <div className="space-y-6 text-left md:text-center">
            <p className="text-xl md:text-2xl font-display leading-relaxed text-foreground">
              <span className="text-rose-600 font-semibold">This Rose Day, I won't send you a rose, Vedu…</span>
            </p>
            
            <p className="text-xl md:text-2xl font-display leading-relaxed text-foreground">
              Because roses fade, but my feelings for you don't.
            </p>
            
            <p className="text-xl md:text-2xl font-display leading-relaxed text-foreground">
              Your smile flirts with my heart,<br />
              your eyes steal my calm,<br />
              and somehow… you don't even try.
            </p>
            
            <p className="text-xl md:text-2xl font-display leading-relaxed text-foreground">
              If love had a favorite person,<br />
              it would always be you, Vedu.
            </p>
            
            <p className="text-2xl md:text-3xl font-display font-bold text-rose-600 leading-relaxed">
              Happy Rose Day, my beautiful Vedu 🌹❤️
            </p>
          </div>

          <div className="pt-6">
            <Button
              onClick={handleButtonClick}
              size="lg"
              className="w-full md:w-auto text-lg px-12 py-6 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-rose-glow hover:shadow-rose-glow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              This rose is only for you, Vedu 🌹
            </Button>
          </div>
        </div>
      </Card>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-full max-h-full w-screen h-screen border-0 bg-transparent p-0 [&>button]:hidden">
          <RoseBloomOverlay runKey={animationRunKey} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
