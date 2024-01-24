import { useAtom } from 'jotai'

import { AgeRanges } from './const'
import { selectedAgeAtom } from '../../../../atoms/selectedAge'
import { CheckBox } from '../../SharedComponents/components/CheckBox'

export const AgeSection = () => {
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
}
