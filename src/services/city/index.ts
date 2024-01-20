import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { cityKeys } from './key'
import { getCitySelector } from './selector'

const fetchCity = async () => {
  const response = await axios.get('/api/getCity')
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

  console.log('selector後のデータ区データなかったら成功', data)

  return {
    data,
    isPending,
    isError,
  }
}
