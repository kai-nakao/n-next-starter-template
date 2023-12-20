import { useQuery } from '@tanstack/react-query';
import { getLikes } from './function';
import { likeKeys } from './key';
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
