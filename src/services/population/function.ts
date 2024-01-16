import axios from 'axios'

import { populationRatioURL } from './const'

export const getPopulationRatio = async (): Promise<any> => {
  const response = await axios.get(populationRatioURL, {
    headers: {
      'X-API-KEY': process.env.API_KEY,
    },
  })
  return response.data
}
