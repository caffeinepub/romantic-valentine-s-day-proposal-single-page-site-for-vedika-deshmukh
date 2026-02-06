import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Submission } from '../backend';

export interface NormalizedSubmission {
  id: string;
  submitter: string;
  answer1: string;
  answer2: string;
  answer3: string;
}

export function useRoseDaySubmissions() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<NormalizedSubmission[]>({
    queryKey: ['roseDaySubmissions'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      const rawSubmissions = await actor.getAllSubmissions();
      
      // Normalize submissions to a UI-friendly format
      return rawSubmissions.map(([submissionId, submission]) => ({
        id: submissionId,
        submitter: submissionId.startsWith('anonymous_') ? 'Anonymous' : submissionId,
        answer1: submission.answer1,
        answer2: submission.answer2,
        answer3: submission.answer3,
      }));
    },
    enabled: !!actor && !actorFetching,
    retry: 2,
  });

  return {
    submissions: query.data || [],
    isLoading: actorFetching || query.isLoading,
    error: query.error ? 'Failed to load submissions. Please try again.' : null,
  };
}
