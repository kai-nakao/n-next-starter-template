import { useAtom } from 'jotai'

import { selectedLIndustryAtom } from '@/client/atoms/lIndustryAtoms'
import { RouterOutput, trpc } from '@/utils/trpc'

import { getMIndustrySelector } from './selector'

export const useMIndustryList = ({
  initialData,
}: {
  initialData?: RouterOutput['mIndustry'] | undefined
}) => {
  // TODO: trpc cannot edit querykey to use selectedLIndustryAtom
  const [selectedLIndustry] = useAtom(selectedLIndustryAtom)

  const { data, isPending, isError } = trpc.mIndustry.useQuery<
    RouterOutput['mIndustry']
  >(
    { lIndustryCode: selectedLIndustry },
    {
      select: getMIndustrySelector,
      staleTime: 1000 * 5,
      initialData: initialData,
    },
  )

  return {
    data,
    isPending,
    isError,
  }
}
