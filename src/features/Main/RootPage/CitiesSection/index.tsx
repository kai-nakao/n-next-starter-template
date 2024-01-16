import React from 'react'

import { useCityList } from '@/services/city'

import { CheckBox } from './CheckBox'

export const CitiesSection = () => {
  const { data } = useCityList({})
  return (
    <fieldset className="flex flex-col items-center justify-center">
      {/* legend html  differs css style depend on browser */}
      <div>
        <legend>Choose your interests</legend>
      </div>
      <section className="m-10 grid grid-cols-6 gap-4">
        {data &&
          data.map((city: City, index: number) => (
            <CheckBox
              key={index}
              value={city.cityCode}
              cityName={city.cityName}
            />
          ))}
      </section>
    </fieldset>
  )
}
