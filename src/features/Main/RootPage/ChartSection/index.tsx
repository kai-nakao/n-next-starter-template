import { Card, Title, LineChart } from '@tremor/react'

import { useChartData } from '@/services/population'

export const ChartSection = () => {
  const { data } = useChartData({})
  return (
    <Card className="w-10/12">
      <Title>玉野市の人口増減グラフ</Title>
      <LineChart
        className="h-96"
        data={data}
        index="year"
        categories={['value']}
        colors={['emerald']}
        yAxisWidth={40}
      />
    </Card>
  )
}
