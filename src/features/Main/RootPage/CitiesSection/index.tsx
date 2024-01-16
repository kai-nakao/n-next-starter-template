import React from 'react'

import { CheckBox } from './CheckBox'

export const CitiesSection = () => {
  return (
    <fieldset className="flex flex-col items-center justify-center">
      {/* legend html  differs css style depend on browser */}
      <div>
        <legend>Choose your interests</legend>
      </div>
      <section className="m-10 flex gap-4">
        <CheckBox value="tamano" cityName="玉野" />
        <CheckBox value="okayama" cityName="岡山" />
        <CheckBox value="kurasiki" cityName="倉敷" />
      </section>
    </fieldset>
  )
}
