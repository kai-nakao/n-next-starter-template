import { render, screen } from '@testing-library/react'

import { ChartSection } from '../sections/ChartSection'
test('if graph data is empty, then show データ取得中...', () => {
  render(<ChartSection graphName="テスト用グラフ" chartData={[]} />)
  expect(screen.getByText('データ取得中...')).toBeInTheDocument()
})
