type CheckBoxProps = {
  value: string
  name: string
  selected: boolean
  onSelect: () => void
}

export const CheckBox = ({
  value,
  name,
  selected,
  onSelect,
}: CheckBoxProps) => {
  return (
    <div className="flex gap-1">
      <input
        type="checkbox"
        id={value}
        name={name}
        value={value}
        checked={selected}
        onChange={onSelect}
      />
      <label htmlFor={value}>{name}</label>
    </div>
  )
}
