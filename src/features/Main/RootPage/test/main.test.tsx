import { fireEvent, render, screen } from '@testing-library/react'

import { cityMock } from '@/features/Shared/mocks/useCityList'
import { populationMock } from '@/features/Shared/mocks/usePopulationList'

import { RootPage } from '../main'

jest.mock('@/react-queries/city', () => cityMock)
jest.mock('@/react-queries/population', () => populationMock)
test('if check 玉野市 input element, then 玉野市のグラフ is displayed', async () => {
  render(<RootPage />)
  expect(screen.getByText('玉野市')).toBeInTheDocument()
  fireEvent.click(screen.getByLabelText('玉野市'))
  expect(screen.getByText('玉野市のグラフ')).toBeInTheDocument()
})
