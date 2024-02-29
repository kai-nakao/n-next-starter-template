import { useAtom } from 'jotai'
import { useMemo } from 'react'
import { Shimmer } from 'react-shimmer'

import { selectedMIndustryAtom } from '@/client/atoms/mIndustryAtoms'
import { CheckBox } from '@/client/features/Shared/components/CheckBox'

import { useMIndustryList } from './react-queries/MediumIndustries'

export const MIndustrySection = () => {
  const [selectedMIndustry, setSetelectedMIndustry] = useAtom(
    selectedMIndustryAtom,
  )

  const { data, isPending } = useMIndustryList({})

  const mIndustrySection = useMemo(() => {
    if (isPending)
      return (
        <div className="flex justify-center">
          <Shimmer className="" width={800} height={200} />
        </div>
      )
    return (
      <section>
        {/* middle industry section */}
        <fieldset className="flex flex-col items-center justify-center">
          {/* legend html  differs css style depend on browser */}
          <div>
            <legend>中産業区分</legend>
          </div>
          <section className="m-10 grid grid-cols-3 gap-4">
            {data &&
              data.map((mIndustry, index: number) => (
                <CheckBox
                  key={index}
                  value={mIndustry.sicCode}
                  name={mIndustry.simcName}
                  selected={selectedMIndustry === mIndustry.simcCode}
                  onSelect={() => setSetelectedMIndustry(mIndustry.simcCode)}
                />
              ))}
          </section>
        </fieldset>
      </section>
    )
  }, [isPending, data, selectedMIndustry, setSetelectedMIndustry])
  return mIndustrySection
}
