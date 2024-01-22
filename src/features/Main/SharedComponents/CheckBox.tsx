type CheckBoxProps = {
  value: string
  cityName: string
  selected: boolean
  onSelect: () => void
}

export const CheckBox = ({
  value,
  cityName,
  selected,
  onSelect,
}: CheckBoxProps) => {
  return (
    <div className="flex gap-1">
      <input
        type="checkbox"
        id={value}
        name="city"
        value={value}
        checked={selected}
        onChange={onSelect}
      />
      <label htmlFor={value}>{cityName}</label>
    </div>
  )
}
