import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';

interface RoseDayLockScreenProps {
  onUnlock: () => void;
}

export function RoseDayLockScreen({ onUnlock }: RoseDayLockScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 md:p-12 text-center space-y-8 bg-card/95 backdrop-blur-sm border-2 border-rose-200/50 shadow-rose-glow">
        <div className="flex justify-center">
          <div className="relative">
            <Heart className="w-20 h-20 text-rose-500 fill-rose-500 animate-pulse-heart" />
            <div className="absolute inset-0 animate-ping opacity-20">
              <Heart className="w-20 h-20 text-rose-500 fill-rose-500" />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-rose-600 leading-tight">
            Only someone special can unlock this Rose Day surprise 🌹
          </h1>
        </div>
        
        <Button
          onClick={onUnlock}
          size="lg"
          className="w-full text-lg py-6 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-rose-glow hover:shadow-rose-glow-lg transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Unlock My Rose Day Gift ❤️
        </Button>
      </Card>
    </div>
  );
}
