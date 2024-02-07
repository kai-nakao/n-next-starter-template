import { useAtom } from 'jotai'

import { selectedCityAtom } from '@/client/atoms/cityAtoms'
import { ChartSection } from '@/client/features/Shared/sections/ChartSection'
import { useCityList } from '@/client/react-queries/cities'
import { usePopulationChartData } from '@/client/react-queries/populations'

import { CitiesSection } from './sections/CitiesSection'

export const RootPage = () => {
  const { data: cityList } = useCityList({})
  const { data: chartData, isPending, isError } = usePopulationChartData({})

  console.log('data', chartData)

  console.log('isPending', isPending)
  console.log('isError', isError)
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
