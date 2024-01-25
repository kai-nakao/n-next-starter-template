import { useAtom } from 'jotai'

import { selectedCityAtom } from '@/jotais/cityAtoms'
import { useCityList } from '@/services/city'
import { usePopulationChartData } from '@/services/population'
import { ChartSection } from '@/Shared/sections/ChartSection'

import { CitiesSection } from './CitiesSection'


export const RootPage = () => {
  const { data: chartData } = usePopulationChartData({})
  const { data: cityList } = useCityList({})
  const [selectedCity] = useAtom(selectedCityAtom)
  // get city name from city code(atom)
  const cityName =
    cityList?.find((city: City) => city.cityCode === selectedCity)?.cityName ||
    '未選択'

  return (
    <main className="flex flex-col justify-center">
      <CitiesSection />
      <section className="flex justify-center">
        <ChartSection graphName={`${cityName}のグラフ`} chartData={chartData} />
      </section>
    </main>
  )
}
