import { valueFormatter } from './valueFormatter'

describe('valueFormatter', () => {
  it('should format number correctly', () => {
    expect(valueFormatter(1000)).toBe('$ 1,000')
    expect(valueFormatter(5000000)).toBe('$ 5,000,000')
    expect(valueFormatter(123456789)).toBe('$ 123,456,789')
  })
})
