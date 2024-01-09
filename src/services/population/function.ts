import axios from 'axios'

import { populationRatioURL } from './const'
import { ChartResponse } from './type'

export const getPopulationRatio = async (): Promise<ChartResponse> => {
  const res = await axios.get(populationRatioURL)
  return res.data
}
