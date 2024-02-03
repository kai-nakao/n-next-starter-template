import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { cityKeys } from './key'
import { getCitySelector } from './selector'

export const fetchCity = async () => {
  const response = await axios.get('/api/getCities')
  return response.data
}

export const useCityList = ({ initialData }: { initialData?: any }) => {
  const { data, isPending, isError } = useQuery({
    queryKey: cityKeys.all,
    queryFn: fetchCity,
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
