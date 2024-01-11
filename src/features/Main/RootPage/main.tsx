import { ChartSection } from './ChartSection'
import { CitiesSection } from './CitiesSection'

export const RootPage = () => {
  return (
    <main className="flex flex-col justify-center">
      <CitiesSection />
      <ChartSection />
    </main>
  )
}
