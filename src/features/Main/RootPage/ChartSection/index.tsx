import { Card, LineChart, Title } from '@tremor/react'

import { chartdata } from './const/chartData'
import { valueFormatter } from './functions/valueFormatter'

export const ChartSection = () => {
  return (
    <Card>
      <Title>Export/Import Growth Rates (1970 to 2021)</Title>
      <LineChart
        className="mt-6"
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
