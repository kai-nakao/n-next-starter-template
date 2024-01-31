import { NextApiRequest, NextApiResponse } from 'next'

import { getPopulationRatio } from '@/react-queries/population/function'

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const cityCode = req.query.cityCode as string
      const data = await getPopulationRatio(cityCode)
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: 'Error fetching population ratio' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export default handle
