import { useAtom } from 'jotai'
import React from 'react'
import { Shimmer } from 'react-shimmer'

import { selectedCityAtom } from '@/client/atoms/cityAtoms'
import { useCityList } from '@/client/features/Main/RootPage/sections/CitiesSection/react-queries/cities'
import { CheckBox } from '@/client/features/Shared/components/CheckBox'

export const CitiesSection = () => {
  const [selectedCity, setSelectedCity] = useAtom(selectedCityAtom)
  const { data, isPending } = useCityList({})
  if (isPending)
    return (
      <div className="flex justify-center">
        <Shimmer className="" width={500} height={300} />
      </div>
    )

  return (
    <fieldset className="flex flex-col items-center justify-center">
      {/* legend html  differs css style depend on browser */}
      <div>
        <legend>Choose your interests</legend>
      </div>
      <section className="m-10 grid grid-cols-6 gap-4">
        {data &&
          data.map((city, index: number) => (
            <CheckBox
              key={index}
              value={city.cityCode}
              name={city.cityName}
              selected={selectedCity === city.cityCode}
              onSelect={() => setSelectedCity(city.cityCode)}
            />
          ))}
      </section>
    </fieldset>
  )
}
