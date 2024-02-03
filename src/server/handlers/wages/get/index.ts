import { NextApiRequest, NextApiResponse } from 'next'

import { getWage } from '@/client/react-queries/wage/function'

const getWages = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const simcCode = req.query.simcCode as string
      const wageAge = req.query.wageAge as string
      const sicCode = req.query.sicCode as string
      const data = await getWage(simcCode, wageAge, sicCode)
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: 'Error fetching wage data' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export default getWages
