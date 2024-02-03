import { useAtom } from 'jotai'

import { selectedCityAtom } from '@/client/atoms/cityAtoms'
import { ChartSection } from '@/client/features/Shared/sections/ChartSection'
import { useCityList } from '@/client/react-queries/city'
import { usePopulationChartData } from '@/client/react-queries/population'

import { CitiesSection } from './sections/CitiesSection'

export const RootPage = () => {
  const { data: cityList } = useCityList({})
  const { data: chartData } = usePopulationChartData({})

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
