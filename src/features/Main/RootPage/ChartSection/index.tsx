import { Card, LineChart, Title } from '@tremor/react'

import { chartdata } from './const/chartData'
import { valueFormatter } from './functions/valueFormatter'

export const ChartSection = () => {
  return (
    <Card className="w-10/12">
      <Title>xx市の人口増減グラフ</Title>
      <LineChart
        className="h-96"
        data={chartdata}
        index="year"
        categories={['Export Growth Rate', 'Import Growth Rate']}
        colors={['emerald', 'gray']}
        valueFormatter={valueFormatter}
        yAxisWidth={40}
      />
    </Card>
  )
}
