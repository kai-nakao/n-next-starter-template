import { useAtom } from 'jotai'
import { useMemo } from 'react'

import { selectedAgeAtom } from '@/client/atoms/ageAtoms'
import { CheckBox } from '@/client/features/Shared/components/CheckBox'

import { AgeRanges } from './const'

export const AgeSection = () => {
  const [selectedAge, setSelectedAge] = useAtom(selectedAgeAtom)

  return useMemo(
    () => (
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
    ),
    [selectedAge, setSelectedAge],
  )
}
