import { useQuery } from '@tanstack/react-query'

import { getPopulationRatio } from './function'
import { ratioKeys } from './key'
import { getRatioSelector } from './selector'

export const useGetItems = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ratioKeys.all,
    queryFn: getPopulationRatio,
    select: getRatioSelector,
    staleTime: 1000 * 5,
  })

  return {
    data,
    isPending,
    isError,
  }
}
