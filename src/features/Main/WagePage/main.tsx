import { useWageChartData } from '@/services/wage'

import { AgeSection } from './AgeSection'
import { Divider } from './components/divider'
import { LIndustrySection } from './LIndustrySection'
import { MIndustrySection } from './MIndustrySection'
import { ChartSection } from '../SharedComponents/sections/ChartSection'

export const WagePage = () => {
  const { data: chartData, isPending } = useWageChartData({})

  if (isPending) {
    return <div>Loading...</div>
  }
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
