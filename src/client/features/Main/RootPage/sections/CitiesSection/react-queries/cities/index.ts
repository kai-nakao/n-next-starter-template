import { trpc } from '@/utils/trpc'
import { RouterOutput } from '@/utils/trpc'

import { getCitySelector } from './selector'

export const useCityList = ({
  initialData,
}: {
  initialData?: RouterOutput['cityList'] | undefined
}) => {
  // first argument is the key, which is undefined in this case
  const { data, isPending, isError } = trpc.cityList.useQuery<
    RouterOutput['cityList']
  >(undefined, {
    select: getCitySelector,
    staleTime: 1000 * 5,
    initialData: initialData,
  })

  return {
    data,
    isPending,
    isError,
  }
}
