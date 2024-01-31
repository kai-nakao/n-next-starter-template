import { ChartSection } from '@/features/Shared/sections/ChartSection'
import { useWageChartData } from '@/react-queries/wage'

import { Divider } from './components/divider'
import { AgeSection } from './sections/AgeSection'
import { LIndustrySection } from './sections/LIndustrySection'
import { MIndustrySection } from './sections/MIndustrySection'

export const WagePage = () => {
  const { data: chartData } = useWageChartData({})
  return (
    <main className="flex flex-col justify-center">
      <LIndustrySection />
      <Divider />
      <MIndustrySection />
      <Divider />
      <AgeSection />
      <Divider />
      <section className="flex justify-center">
        <ChartSection graphName="年齢別平均賃金" chartData={chartData} />
      </section>
    </main>
  )
}
