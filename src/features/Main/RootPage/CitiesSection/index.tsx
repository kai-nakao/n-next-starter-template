import React from 'react'

export const CitiesSection = () => {
  return (
    <fieldset className="flex justify-center">
      <legend>Choose your interests</legend>
      <section className="m-10 flex gap-4">
        <div>
          <input type="checkbox" id="tamano" name="city" value="tamano" />
          <label htmlFor="city">玉野市</label>
        </div>
        <div>
          <input type="checkbox" id="okayama" name="city" value="okayama" />
          <label htmlFor="city">岡山市</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="kurasiki"
            name="city"
            value="kurasiki
		"
          />
          <label htmlFor="city">倉敷市</label>
        </div>
      </section>
    </fieldset>
  )
}
