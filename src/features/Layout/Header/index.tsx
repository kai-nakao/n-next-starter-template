import { useRouter } from 'next/router'
import React from 'react'

export const Header = () => {
  const router = useRouter()
  const headerText = () => {
    if (router.pathname === '/') {
      return 'Population Graph'
    } else if (router.pathname === '/wage') {
      return 'Wage Graph'
    } else {
      return ''
    }
  }

  return (
    <header className="flex h-16 items-center bg-gray-50 px-4 shadow-sm">
      <h1>{headerText()}</h1>
    </header>
  )
}
