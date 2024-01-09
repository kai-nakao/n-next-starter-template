// Type definition for individual data points
type DataPoint = {
  year: number
  value: number
}

// Type definition for the Line Chart
type LineChart = {
  boundaryYear: number
  data: DataPoint[]
}

// Type definition for the classes in the Bar Chart
type Class = {
  label: string
  value: number
}

// Type definition for data points in the Bar Chart
type BarDataPoint = {
  year: number
  sum: number
  class: Class[]
}

// Type definition for the Bar Chart
type BarChart = {
  data: BarDataPoint[]
}

// Type definition for the final response structure
export type ChartResponse = {
  line: LineChart
  bar: BarChart
}
