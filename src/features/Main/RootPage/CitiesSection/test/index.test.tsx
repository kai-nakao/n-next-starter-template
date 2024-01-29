import { fireEvent, render, screen } from '@testing-library/react'

import { CitiesSection } from '..'

import { cityMock } from '@/features/Main/Shared/mocks/useCityList'


jest.mock('@/services/city', () => cityMock)
test('if check 笠岡市 click, then checked 笠岡市', () => {
  render(<CitiesSection />)
  fireEvent.click(screen.getByLabelText('笠岡市'))
  expect(screen.getByLabelText('笠岡市')).toBeChecked()
})
