import { useAtom } from 'jotai'
import { memo } from 'react'

import { selectedAgeAtom } from '@/client/atoms/ageAtoms'
import { CheckBox } from '@/client/features/Shared/components/CheckBox'

import { AgeRanges } from './const'

// memo is used to prevent re-rendering
export const AgeSection = memo(function AgeSection() {
  const [selectedAge, setSelectedAge] = useAtom(selectedAgeAtom)

  return (
    <fieldset className="flex flex-col items-center justify-center">
      {/* legend html  differs css style depend on browser */}
      <div>
        <legend>年齢</legend>
      </div>
      <section className="m-10 grid grid-cols-3 gap-4">
        {Object.entries(AgeRanges).map(([key, value]) => (
          <CheckBox
            key={key}
            value={value}
            name={value}
            selected={selectedAge === Number(key)}
            onSelect={() => setSelectedAge(Number(key))}
          />
        ))}
      </section>
    </fieldset>
  )
})
