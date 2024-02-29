import { useAtom } from 'jotai'

import { selectedAgeAtom } from '@/client/atoms/ageAtoms'
import { selectedLIndustryAtom } from '@/client/atoms/lIndustryAtoms'
import { selectedMIndustryAtom } from '@/client/atoms/mIndustryAtoms'
import { trpc, RouterOutput } from '@/utils/trpc'

import { getWageSelector } from './selector'

export const useWageChartData = ({ initialData }: { initialData?: any }) => {
  const [selectedMIndustry] = useAtom(selectedMIndustryAtom)
  const [selectedAge] = useAtom(selectedAgeAtom)
  const [selectedLIndustry] = useAtom(selectedLIndustryAtom)

  const { data, isPending, isError } = trpc.wages.useQuery<
    RouterOutput['wages']
  >(
    {
      simcCode: selectedMIndustry,
      wageAge: selectedAge,
      sicCode: selectedLIndustry,
    },
    {
      select: getWageSelector,
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
