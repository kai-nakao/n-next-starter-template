import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

const getMIndustries = async (req: NextApiRequest, res: NextApiResponse) => {
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

const getMIndustry = async (lIndustryCode: string): Promise<MIndustry> => {
  const response = await axios.get(
    `https://opendata.resas-portal.go.jp/api/v1/industries/middle?sicCode=${lIndustryCode}`,
    {
      headers: {
        'X-API-KEY': process.env.API_KEY,
      },
    },
  )

  return response.data
}

export default getMIndustries
