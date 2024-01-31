import { useAtom } from 'jotai'

import { ChartSection } from '@/features/Shared/sections/ChartSection'
import { selectedCityAtom } from '@/jotais/cityAtoms'
import { useCityList } from '@/react-queries/city'
import { usePopulationChartData } from '@/react-queries/population'

import { CitiesSection } from './sections/CitiesSection'

export const RootPage = () => {
  const { data: cityList } = useCityList({})
  const { data: chartData } = usePopulationChartData({})

  console.log('cityList', cityList)
  console.log('chartData', chartData)
  const [selectedCity] = useAtom(selectedCityAtom)
  // get city name from city code(atom)
  const cityName =
    cityList?.find((city: City) => city.cityCode === selectedCity)?.cityName ||
    '未選択'

  return (
    <main className="flex flex-col justify-center ">
      <CitiesSection />
      <section className="flex justify-center">
        <ChartSection graphName={`${cityName}のグラフ`} chartData={chartData} />
      </section>
    </main>
  )
}
