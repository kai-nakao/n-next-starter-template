import { fireEvent, render, screen } from '@testing-library/react'

import { cityMock } from '@/client/features/Shared/mocks/useCityList'

import { CitiesSection } from '..'

jest.mock('../react-queries/cities', () => cityMock)
test('if check 笠岡市 click, then checked 笠岡市', () => {
  render(<CitiesSection />)
  fireEvent.click(screen.getByLabelText('笠岡市'))
  expect(screen.getByLabelText('笠岡市')).toBeChecked()
})
