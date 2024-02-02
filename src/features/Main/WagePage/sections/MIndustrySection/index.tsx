import { useAtom } from 'jotai'
import { Shimmer } from 'react-shimmer'

import { CheckBox } from '@/features/Shared/components/CheckBox'
import { selectedMIndustryAtom } from '@/jotais/mIndustryAtoms'
import { useMIndustryList } from '@/react-queries/MediumIndustry'

export const MIndustrySection = () => {
  const [selectedMIndustry, setSetelectedMIndustry] = useAtom(
    selectedMIndustryAtom,
  )

  const { data, isPending } = useMIndustryList({})
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
            data.map((mIndustry: MIndustry, index: number) => (
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
}
