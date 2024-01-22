import { useAtom } from 'jotai'

import { useLIndustryList } from '@/services/largeIndustry'

import { selectedCityAtom } from '../../RootPage/CitiesSection/atoms/selectedCity'
import { CheckBox } from '../../SharedComponents/CheckBox'

export const LIndustrySection = () => {
  const [selectedLIndustry, setSetelectedLIndustry] = useAtom(selectedCityAtom)

  const { data } = useLIndustryList({})
  return (
    <fieldset className="flex flex-col items-center justify-center">
      {/* legend html  differs css style depend on browser */}
      <div>
        <legend>Choose your interests</legend>
      </div>
      <section className="m-10 grid grid-cols-6 gap-4">
        {data &&
          data.map((LIndustry: LIndustry, index: number) => (
            <CheckBox
              key={index}
              value={LIndustry.sicCode}
              cityName={LIndustry.sicName}
              selected={selectedLIndustry === LIndustry.sicCode}
              onSelect={() => setSetelectedLIndustry(LIndustry.sicCode)}
            />
          ))}
      </section>
    </fieldset>
  )
}
