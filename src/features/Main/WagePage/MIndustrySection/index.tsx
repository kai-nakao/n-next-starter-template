import { useAtom } from 'jotai'

import { useMIndustryList } from '@/services/MediumIndustry'

import { selectedMIndustryAtom } from '../../../../atoms/selectedMIndustry'
import { CheckBox } from '../../SharedComponents/components/CheckBox'

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
