import { useState, useRef, useEffect } from 'react';
import { useActor } from './useActor';

export function useSubmitRoseDayAnswers() {
  const { actor, isFetching } = useActor();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const actorRef = useRef(actor);
  const isFetchingRef = useRef(isFetching);

  useEffect(() => {
    actorRef.current = actor;
    isFetchingRef.current = isFetching;
  }, [actor, isFetching]);

  const waitForActor = async (timeoutMs: number = 5000): Promise<boolean> => {
    const startTime = Date.now();
    
    while (Date.now() - startTime < timeoutMs) {
      if (actorRef.current && !isFetchingRef.current) {
        return true;
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    return false;
  };

  const submitAnswers = async (answer1: string, answer2: string, answer3: string): Promise<boolean> => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Wait for actor to be ready if it's still initializing
      const isReady = !!actor && !isFetching;
      
      if (!isReady) {
        const actorReady = await waitForActor();
        
        if (!actorReady) {
          // In draft/development mode, bypass backend submission
          if (import.meta.env.DEV) {
            console.log('Draft mode: bypassing backend submission');
            setIsSubmitting(false);
            return true;
          }
          
          // In production, fail with error
          setError('Connection not available. Please refresh the page.');
          setIsSubmitting(false);
          return false;
        }
      }

      // Actor is ready, proceed with submission
      const currentActor = actorRef.current;
      if (!currentActor) {
        // Final check - if still no actor in production, fail
        if (!import.meta.env.DEV) {
          setError('Connection not available. Please refresh the page.');
          setIsSubmitting(false);
          return false;
        }
        
        // In draft mode, bypass
        console.log('Draft mode: bypassing backend submission');
        setIsSubmitting(false);
        return true;
      }

      await currentActor.submitAnswer(answer1, answer2, answer3);
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
