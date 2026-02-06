import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, AlertCircle } from 'lucide-react';
import { useSubmitRoseDayAnswers } from '@/hooks/useSubmitRoseDayAnswers';

interface RoseDayQuestionsWizardProps {
  onComplete: (answers: [string, string, string]) => void;
}

const questions = [
  "When was our first kiss?",
  "When did you give me my first chocolate?",
  "How many roses have I given you till now?"
];

export function RoseDayQuestionsWizard({ onComplete }: RoseDayQuestionsWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(['', '', '']);
  const [currentAnswer, setCurrentAnswer] = useState('');
  
  const { submitAnswers, isSubmitting, error, retry } = useSubmitRoseDayAnswers();

  const isAnswerValid = currentAnswer.trim().length > 0;

  const handleNext = () => {
    if (!isAnswerValid) return;
    
    const newAnswers = [...answers];
    newAnswers[currentStep] = currentAnswer.trim();
    setAnswers(newAnswers);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setCurrentAnswer(newAnswers[currentStep + 1] || '');
    } else {
      // Submit all answers
      handleSubmit(newAnswers as [string, string, string]);
    }
  };

  const handleSubmit = async (finalAnswers: [string, string, string]) => {
    const success = await submitAnswers(finalAnswers[0], finalAnswers[1], finalAnswers[2]);
    if (success) {
      onComplete(finalAnswers);
    }
  };

  const handleRetry = () => {
    retry();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && isAnswerValid && !isSubmitting) {
      handleNext();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-12">
      <Card className="max-w-lg w-full p-8 md:p-12 space-y-8 bg-card/95 backdrop-blur-sm border-2 border-rose-200/50 shadow-rose-glow">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Question {currentStep + 1} of {questions.length}</span>
            <span className="text-rose-500 font-medium">{Math.round(((currentStep) / questions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-rose-100 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-center space-y-2">
            <div className="text-4xl mb-4">🌹</div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-rose-600 leading-tight">
              {questions[currentStep]}
            </h2>
          </div>

          <div className="space-y-3">
            <Label htmlFor="answer" className="text-base text-foreground/80">
              Your answer
            </Label>
            <Input
              id="answer"
              type="text"
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your answer here..."
              className="text-lg py-6 border-2 border-rose-200 focus:border-rose-400 focus:ring-rose-400"
              disabled={isSubmitting}
              autoFocus
            />
          </div>

          {error && (
            <Alert variant="destructive" className="border-2">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="ml-2">
                {error}
              </AlertDescription>
            </Alert>
          )}

          <div className="flex gap-3">
            {error ? (
              <Button
                onClick={handleRetry}
                disabled={isSubmitting}
                size="lg"
                className="w-full text-lg py-6 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-rose-glow transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Retrying...
                  </>
                ) : (
                  'Retry Submission'
                )}
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={!isAnswerValid || isSubmitting}
                size="lg"
                className="w-full text-lg py-6 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-rose-glow hover:shadow-rose-glow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : currentStep < questions.length - 1 ? (
                  'Next Question →'
                ) : (
                  'Unlock Rose Day Surprise 🌹'
                )}
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
