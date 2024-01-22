import axios from 'axios'

import { lIndustryURL } from './const'

export const getLIndustryList = async (): Promise<LIndustry> => {
  const response = await axios.get(lIndustryURL, {
    headers: {
      'X-API-KEY': process.env.API_KEY,
    },
  })
  return response.data
}
