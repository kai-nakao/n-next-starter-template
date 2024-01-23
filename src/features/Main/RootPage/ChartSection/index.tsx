import { Card, Title, LineChart } from '@tremor/react'
import { useAtom } from 'jotai'

import { useCityList } from '@/services/city'
import { useChartData } from '@/services/population'

import { selectedCityAtom } from '../../../../atoms/selectedCity'

export const ChartSection = () => {
  const { data } = useChartData({})
  const { data: cityList } = useCityList({})

  const [selectedCity] = useAtom(selectedCityAtom)

  // get city name from city code(atom)
  const cityName =
    cityList?.find((city: City) => city.cityCode === selectedCity)?.cityName ||
    '未選択'
  return (
    <Card className="w-10/12">
      <Title>{`${cityName}の人口増減グラフ`}</Title>
      <LineChart
        className="h-96"
        data={data}
        noDataText="データ取得中..."
        index="year"
        categories={['value']}
        colors={['emerald']}
        yAxisWidth={40}
      />
    </Card>
  )
}
