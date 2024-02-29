import { ChartSection } from '@/client/features/Shared/sections/ChartSection'
import { useWageChartData } from '@/client/features/Shared/sections/ChartSection/react-queries/wages'

import { Divider } from './components/divider'
import { WageHead } from './Head'
import { AgeSection } from './sections/AgeSection'
import { LIndustrySection } from './sections/LIndustrySection'
import { MIndustrySection } from './sections/MIndustrySection'

export const WagePage = () => {
  const { data: chartData } = useWageChartData({})

  return (
    <>
      {/* per page Head */}
      <WageHead />

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
    </>
  )
}
