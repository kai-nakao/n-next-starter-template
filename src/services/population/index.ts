import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useAtom } from 'jotai'

import { selectedCityAtom } from '@/atoms/selectedCity'

import { ratioKeys } from './key'
import { getRatioSelector } from './selector'

const fetchPopulationRatio = async (cityCode: string) => {
  const response = await axios.get(`/api/getPopulation?cityCode=${cityCode}`)
  return response.data
}

export const usePopulationChartData = ({
  initialData,
}: {
  initialData?: any
}) => {
  const [selectedCity] = useAtom(selectedCityAtom)

  const { data, isPending, isError } = useQuery({
    // 個別のcheckboxが変更された時にrendering, 取得するために第二配列にstate指定
    queryKey: [ratioKeys.getRatio, selectedCity],
    queryFn: () => fetchPopulationRatio(selectedCity),
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
