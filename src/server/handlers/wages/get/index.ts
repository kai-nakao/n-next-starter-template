import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

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

const getWage = async (
  simcCode: string,
  wageAge: string,
  sicCode: string,
): Promise<any> => {
  const response = await axios.get(
    `https://opendata.resas-portal.go.jp/api/v1/municipality/wages/perYear?prefCode=33&simcCode=${simcCode}&wagesAge=${wageAge}&sicCode=${sicCode}`,
    {
      headers: {
        'X-API-KEY': process.env.API_KEY,
      },
    },
  )
  return response.data
}

export default getWages
