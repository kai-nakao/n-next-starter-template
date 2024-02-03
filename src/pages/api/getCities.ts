import { NextApiRequest, NextApiResponse } from 'next'

import getCities from '@/server/handlers/cities/get'

const handleGetCities = async (req: NextApiRequest, res: NextApiResponse) => {
  await getCities(req, res)
}

export default handleGetCities
