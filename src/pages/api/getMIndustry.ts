import { NextApiRequest, NextApiResponse } from 'next'

import { getMIndustry } from '@/client/react-queries/MediumIndustry/function'

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const lIndustryCode = req.query.lIndustryCode as string

      const data = await getMIndustry(lIndustryCode)
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: 'Error fetching mIndustry list' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export default handle
