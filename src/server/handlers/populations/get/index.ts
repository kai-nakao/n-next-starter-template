import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

const getPopulations = async (req: NextApiRequest, res: NextApiResponse) => {
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

const getPopulationRatio = async (cityCode: string): Promise<any> => {
  const response = await axios.get(
    `https://opendata.resas-portal.go.jp/api/v1/population/sum/perYear?cityCode=${cityCode}&prefCode=33`,
    {
      headers: {
        'X-API-KEY': process.env.API_KEY,
      },
    },
  )
  return response.data
}

export default getPopulations
