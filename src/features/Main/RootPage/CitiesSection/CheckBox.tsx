type CheckBoxProps = {
  value: string
  cityName: string
}

export const CheckBox = ({ value, cityName }: CheckBoxProps) => {
  return (
    <div className="flex gap-1">
      <input type="checkbox" id={value} name="city" value={value} />
      <label htmlFor="tamano">{`${cityName}市`}</label>
    </div>
  )
}
