import { AgeSection } from './AgeSection'
import { Divider } from './components/divider'
import { LIndustrySection } from './LIndustrySection'
import { MIndustrySection } from './MIndustrySection'

export const WagePage = () => {
  return (
    <main className="flex flex-col justify-center">
      <LIndustrySection />
      <Divider />
      <MIndustrySection />
      <Divider />

      <AgeSection />
    </main>
  )
}
