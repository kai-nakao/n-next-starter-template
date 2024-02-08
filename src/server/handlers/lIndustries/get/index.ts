import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

import { lIndustryURL } from '@/server/handlers/lIndustries/get/const'

const getLIndustries = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const data = await getLIndustryList()
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: 'Error fetching large industry data' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

const getLIndustryList = async (): Promise<LIndustry> => {
  const response = await axios.get(lIndustryURL, {
    headers: {
      'X-API-KEY': process.env.API_KEY,
    },
  })
  return response.data
}

export default getLIndustries
