import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { lIndustryKeys } from './key'
import { getLIndustrySelector } from './selector'

const fetchLIndustry = async () => {
  const response = await axios.get('/api/getLIndustries')
  return response.data
}

export const useLIndustryList = ({ initialData }: { initialData?: any }) => {
  const { data, isPending, isError } = useQuery({
    queryKey: lIndustryKeys.all,
    queryFn: fetchLIndustry,
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
