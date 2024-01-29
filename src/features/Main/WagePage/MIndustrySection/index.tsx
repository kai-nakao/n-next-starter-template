import { useAtom } from 'jotai'

import { CheckBox } from '@/features/Shared/components/CheckBox'
import { selectedMIndustryAtom } from '@/jotais/mIndustryAtoms'
import { useMIndustryList } from '@/services/MediumIndustry'

export const MIndustrySection = () => {
  const [selectedMIndustry, setSetelectedMIndustry] = useAtom(
    selectedMIndustryAtom,
  )

  const { data } = useMIndustryList({})
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
