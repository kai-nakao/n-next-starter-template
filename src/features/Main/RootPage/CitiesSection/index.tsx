import React from 'react'

export const CitiesSection = () => {
  return (
    <fieldset className="flex flex-col items-center justify-center">
      {/* legend html  differs css style depend on browser */}
      <div>
        <legend>Choose your interests</legend>
      </div>
      <section className="m-10 flex gap-4">
        <div>
          <input type="checkbox" id="tamano" name="city" value="tamano" />
          <label htmlFor="tamano">玉野市</label>
        </div>
        <div>
          <input type="checkbox" id="okayama" name="city" value="okayama" />
          <label htmlFor="okayama">岡山市</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="kurasiki"
            name="city"
            value="kurasiki
		"
          />
          <label htmlFor="kurasiki">倉敷市</label>
        </div>
      </section>
    </fieldset>
  )
}
