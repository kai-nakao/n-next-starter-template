import { useWageChartData } from '@/services/wage'
import { ChartSection } from '@/Shared/sections/ChartSection'

import { AgeSection } from './AgeSection'
import { Divider } from './components/divider'
import { LIndustrySection } from './LIndustrySection'
import { MIndustrySection } from './MIndustrySection'


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
