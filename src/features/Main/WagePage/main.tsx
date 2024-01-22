import { useLIndustryList } from '@/services/largeIndustry'

import { LIndustrySection } from './LIndustrySection'

export const WagePage = () => {
  // get useLIndustry hooks
  const { data } = useLIndustryList({})
  return (
    <main className="flex flex-col justify-center">
      <LIndustrySection />
    </main>
  )
}
