import { useState, useEffect } from 'react';
import { SectionShell } from './SectionShell';
import { Card, CardContent } from './ui/card';

interface UnlockMomentsPuzzleSectionProps {
  onPuzzleSolved: () => void;
  isSolved: boolean;
}

export function UnlockMomentsPuzzleSection({ onPuzzleSolved, isSolved }: UnlockMomentsPuzzleSectionProps) {
  // 2x2 puzzle (4 pieces) - positions 0,1,2,3
  const correctOrder = [0, 1, 2, 3];
  const [pieces, setPieces] = useState<number[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  // Initialize with shuffled pieces
  useEffect(() => {
    const shuffled = [...correctOrder].sort(() => Math.random() - 0.5);
    // Ensure it's not already solved
    while (JSON.stringify(shuffled) === JSON.stringify(correctOrder)) {
      shuffled.sort(() => Math.random() - 0.5);
    }
    setPieces(shuffled);
  }, []);

  const handlePieceClick = (index: number) => {
    if (isSolved) return;

    if (selectedPiece === null) {
      // First selection
      setSelectedPiece(index);
    } else {
      // Second selection - swap pieces
      const newPieces = [...pieces];
      [newPieces[selectedPiece], newPieces[index]] = [newPieces[index], newPieces[selectedPiece]];
      setPieces(newPieces);
      setSelectedPiece(null);

      // Check if solved
      if (JSON.stringify(newPieces) === JSON.stringify(correctOrder)) {
        setShowCelebration(true);
        setTimeout(() => {
          onPuzzleSolved();
        }, 1000);
      }
    }
  };

  const getPieceStyle = (pieceNumber: number) => {
    const row = Math.floor(pieceNumber / 2);
    const col = pieceNumber % 2;
    return {
      backgroundImage: 'url(/assets/Snapchat-1757390130.jpg)',
      backgroundSize: '200% 200%',
      backgroundPosition: `${col * 100}% ${row * 100}%`,
    };
  };

  return (
    <SectionShell id="unlock-puzzle" className="bg-card/30 backdrop-blur-sm relative">
      <div className="text-center space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary">
          Unlock Our Moments 💖
        </h2>

        {!isSolved && (
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Solve this little puzzle to unlock our memories 💕
          </p>
        )}

        {isSolved && (
          <div className="animate-fade-in-up">
            <p className="text-xl md:text-2xl text-primary font-semibold">
              You did it 🥰 Just like us, everything fits perfectly 💖
            </p>
          </div>
        )}

        <div className="max-w-md mx-auto relative">
          {/* Puzzle Grid */}
          <div className="grid grid-cols-2 gap-2 p-4 bg-card/50 rounded-2xl border-2 border-primary/20">
            {pieces.map((pieceNumber, index) => (
              <Card
                key={index}
                className={`
                  aspect-square cursor-pointer overflow-hidden border-2 transition-all duration-300
                  ${selectedPiece === index ? 'border-primary scale-95 shadow-romantic-lg' : 'border-primary/30 hover:border-primary/60'}
                  ${isSolved ? 'cursor-default' : 'hover:scale-105'}
                `}
                onClick={() => handlePieceClick(index)}
              >
                <CardContent className="p-0 h-full">
                  <div
                    className="w-full h-full"
                    style={getPieceStyle(pieceNumber)}
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Celebration Hearts Overlay */}
          {showCelebration && (
            <div className="puzzle-celebration-hearts">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="puzzle-heart"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 0.5}s`,
                    animationDuration: `${2 + Math.random()}s`,
                  }}
                >
                  💖
                </div>
              ))}
            </div>
          )}
        </div>

        {!isSolved && selectedPiece !== null && (
          <p className="text-sm text-muted-foreground animate-pulse">
            Tap another piece to swap ✨
          </p>
        )}
      </div>
    </SectionShell>
  );
}
