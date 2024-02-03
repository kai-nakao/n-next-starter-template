import { useAtom } from 'jotai'
import { memo } from 'react'
import { Shimmer } from 'react-shimmer'

import { selectedLIndustryAtom } from '@/client/atoms/lIndustryAtoms'
import { CheckBox } from '@/client/features/Shared/components/CheckBox'
import { useLIndustryList } from '@/client/react-queries/largeIndustry'

export const LIndustrySection = memo(function LIndustrySection() {
  const [selectedLIndustry, setSetelectedLIndustry] = useAtom(
    selectedLIndustryAtom,
  )
  const { data, isPending } = useLIndustryList({})
  if (isPending)
    return (
      <div className="flex justify-center">
        <Shimmer className="" width={500} height={300} />
      </div>
    )
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
})
