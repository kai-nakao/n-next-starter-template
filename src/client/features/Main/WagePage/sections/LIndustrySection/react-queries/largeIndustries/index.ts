import { RouterOutput, trpc } from '@/utils/trpc'

import { getLIndustrySelector } from './selector'

export const useLIndustryList = ({
  initialData,
}: {
  initialData?: RouterOutput['lIndustry'] | undefined
}) => {
  const { data, isPending, isError } = trpc.lIndustry.useQuery<
    RouterOutput['lIndustry']
  >(undefined, {
    select: getLIndustrySelector,
    staleTime: 1000 * 5,
    initialData: initialData,
  })

  return {
    data,
    isPending,
    isError,
  }
}
