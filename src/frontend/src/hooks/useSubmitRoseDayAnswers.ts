import { useState } from 'react';
import { useActor } from './useActor';

export function useSubmitRoseDayAnswers() {
  const { actor } = useActor();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitAnswers = async (answer1: string, answer2: string, answer3: string): Promise<boolean> => {
    if (!actor) {
      setError('Connection not available. Please refresh the page.');
      return false;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await actor.submitAnswer(answer1, answer2, answer3);
      setIsSubmitting(false);
      return true;
    } catch (err: any) {
      console.error('Failed to submit answers:', err);
      setError(err.message || 'Failed to submit answers. Please try again.');
      setIsSubmitting(false);
      return false;
    }
  };

  const retry = () => {
    setError(null);
  };

  return {
    submitAnswers,
    isSubmitting,
    error,
    retry,
  };
}
