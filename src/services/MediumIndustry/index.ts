import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useAtom } from 'jotai'

import { selectedLIndustryAtom } from '@/atoms/selectedLIndustry'

import { mIndustryKeys } from './key'
import { getMIndustrySelector } from './selector'

const fetchMIndustry = async (lIndustryCode: string) => {
  const response = await axios.get(
    `/api/getMIndustry?lIndustryCode=${lIndustryCode}`,
  )
  return response.data
}

export const useMIndustryList = ({ initialData }: { initialData?: any }) => {
  const [selectedLIndustry] = useAtom(selectedLIndustryAtom)

  const { data, isPending, isError } = useQuery({
    queryKey: [mIndustryKeys.all, selectedLIndustry],
    queryFn: () => fetchMIndustry(selectedLIndustry),
    select: getMIndustrySelector,
    staleTime: 1000 * 5,
    initialData: initialData,
  })

  return {
    data,
    isPending,
    isError,
  }
}
