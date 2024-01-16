import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { ratioKeys } from './key'
import { getRatioSelector } from './selector'

const fetchPopulationRatio = async () => {
  const response = await axios.get('/api/getPopulation')
  return response.data
}

export const useChartData = ({ initialData }: { initialData?: any }) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ratioKeys.all,
    queryFn: fetchPopulationRatio,
    select: getRatioSelector,
    staleTime: 1000 * 5,
    initialData: initialData,
  })

  return {
    data,
    isPending,
    isError,
  }
}
