import { NextApiRequest, NextApiResponse } from 'next'

import { getCityList } from '@/client/react-queries/city/function'

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

export default getCities
