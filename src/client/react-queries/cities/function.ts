import axios from 'axios'

import { okayamaCityURL } from './const'

export const getCityList = async (): Promise<any> => {
  const response = await axios.get(okayamaCityURL, {
    headers: {
      'X-API-KEY': process.env.API_KEY,
    },
  })
  return response.data
}
