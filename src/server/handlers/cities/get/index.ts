import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

import { okayamaCityURL } from '@/server/handlers/cities/get/const'

const getCities = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const data = await getCityList()
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: 'Error fetching city list' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

const getCityList = async (): Promise<City[]> => {
  const response = await axios.get(okayamaCityURL, {
    headers: {
      'X-API-KEY': process.env.API_KEY,
    },
  })
  return response.data
}

export default getCities
