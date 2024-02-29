import { useAtom } from 'jotai'
import { useMemo } from 'react'
import { Shimmer } from 'react-shimmer'

import { selectedLIndustryAtom } from '@/client/atoms/lIndustryAtoms'
import { useLIndustryList } from '@/client/features/Main/WagePage/sections/LIndustrySection/react-queries/largeIndustries'
import { CheckBox } from '@/client/features/Shared/components/CheckBox'

export const LIndustrySection = () => {
  const [selectedLIndustry, setSetelectedLIndustry] = useAtom(
    selectedLIndustryAtom,
  )
  const { data, isPending } = useLIndustryList({})

  const lIndustrySection = useMemo(() => {
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
              data.map((LIndustry, index: number) => (
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
  }, [data, isPending, selectedLIndustry, setSetelectedLIndustry])

  return lIndustrySection
}
