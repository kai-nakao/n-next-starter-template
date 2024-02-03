import { NextApiRequest, NextApiResponse } from 'next'

import { getLIndustryList } from '@/client/react-queries/largeIndustries/function'

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

export default getLIndustries
