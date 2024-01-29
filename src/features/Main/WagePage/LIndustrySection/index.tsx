import { useAtom } from 'jotai'

import { CheckBox } from '@/features/Shared/components/CheckBox'
import { selectedLIndustryAtom } from '@/jotais/lIndustryAtoms'
import { useLIndustryList } from '@/services/largeIndustry'

export const LIndustrySection = () => {
  const [selectedLIndustry, setSetelectedLIndustry] = useAtom(
    selectedLIndustryAtom,
  )

  const { data } = useLIndustryList({})
  return (
    <section>
      {/* large industry section */}
      <fieldset className="flex flex-col items-center justify-center">
        {/* legend html  differs css style depend on browser */}
        <div>
          <legend>大産業区分</legend>
        </div>
        <section className="m-10 grid grid-cols-3 gap-4">
          {data &&
            data.map((LIndustry: LIndustry, index: number) => (
              <CheckBox
                key={index}
                value={LIndustry.sicCode}
                name={LIndustry.sicName}
                selected={selectedLIndustry === LIndustry.sicCode}
                onSelect={() => setSetelectedLIndustry(LIndustry.sicCode)}
              />
            ))}
        </section>
      </fieldset>
    </section>
  )
}
