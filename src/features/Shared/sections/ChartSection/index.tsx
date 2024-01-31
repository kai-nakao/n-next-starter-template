import { Card, Title, LineChart } from '@tremor/react'

export const ChartSection = ({
  graphName,
  chartData,
}: {
  graphName: string
  chartData: any
}) => {
  return (
    <Card className="h-1/2 w-10/12">
      <Title>{graphName}</Title>
      <LineChart
        className="h-96"
        data={chartData}
        noDataText="データ取得中..."
        index="year"
        categories={['value']}
        colors={['emerald']}
        yAxisWidth={40}
      />
    </Card>
  )
}
