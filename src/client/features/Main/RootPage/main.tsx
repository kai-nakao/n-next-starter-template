import { useAtom } from 'jotai'

import { selectedCityAtom } from '@/client/atoms/cityAtoms'
import { useCityList } from '@/client/features/Main/RootPage/sections/CitiesSection/react-queries/cities'
import { ChartSection } from '@/client/features/Shared/sections/ChartSection'
import { usePopulationChartData } from '@/client/features/Shared/sections/ChartSection/react-queries/populations'

import { CitiesSection } from './sections/CitiesSection'

export const RootPage = () => {
  const { data: cityList } = useCityList({})
  const { data: chartData, isPending, isError } = usePopulationChartData({})
  const [selectedCity] = useAtom(selectedCityAtom)
  // get city name from city code(atom)
  const cityName =
    cityList?.find((city) => city.cityCode === selectedCity)?.cityName ||
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
