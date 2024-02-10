import React, { useMemo } from 'react'

export const Divider = () => {
  const divider = useMemo(
    () => <hr className="border-t-2 border-gray-200" />,
    [],
  )
  return divider
}
