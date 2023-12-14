import { useQuery } from '@tanstack/react-query';
import { likeKeys } from './key';
import { getLikes } from './function';
import { getTodosSelector } from './selector';

export const useGetLikes = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: likeKeys.all,
    queryFn: getLikes,
    select: getTodosSelector,
    staleTime: 1000 * 5,
  });

  return {
    data,
    isPending,
    isError,
  };
};
