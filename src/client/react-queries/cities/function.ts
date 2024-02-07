import axios from 'axios'

import { City } from '@/server/models/City'

import { okayamaCityURL } from './const'

export const getCityList = async (): Promise<City[]> => {
  const response = await axios.get(okayamaCityURL, {
    headers: {
      'X-API-KEY': process.env.API_KEY,
    },
  })
  return response.data
}
