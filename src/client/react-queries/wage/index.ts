import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useAtom } from 'jotai'

import { selectedAgeAtom } from '@/client/atoms/ageAtoms'
import { selectedLIndustryAtom } from '@/client/atoms/lIndustryAtoms'
import { selectedMIndustryAtom } from '@/client/atoms/mIndustryAtoms'

import { wageKeys } from './key'
import { getWageSelector } from './selector'

const fetchWage = async (
  simcCode: string,
  wageAge: string,
  sicCode: string,
) => {
  const response = await axios.get(
    `/api/getWages?simcCode=${simcCode}&wageAge=${wageAge}&sicCode=${sicCode}`,
  )

  return response.data
}

export const useWageChartData = ({ initialData }: { initialData?: any }) => {
  const [selectedMIndustry] = useAtom(selectedMIndustryAtom)
  const [selectedAge] = useAtom(selectedAgeAtom)
  const [selectedLIndustry] = useAtom(selectedLIndustryAtom)

  const { data, isPending, isError } = useQuery({
    queryKey: [
      wageKeys.getWage,
      selectedMIndustry,
      selectedAge,
      selectedLIndustry,
    ],
    queryFn: () =>
      fetchWage(selectedMIndustry, String(selectedAge), selectedLIndustry),
    select: getWageSelector,
    staleTime: 1000 * 5,
    initialData: initialData,
  })

  return {
    data,
    isPending,
    isError,
  }
}
