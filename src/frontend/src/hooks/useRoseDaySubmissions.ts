import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Principal } from '@icp-sdk/core/principal';
import type { Submission } from '../backend';

export function useRoseDaySubmissions() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<Array<[Principal, Submission]>>({
    queryKey: ['roseDaySubmissions'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getAllSubmissions();
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
