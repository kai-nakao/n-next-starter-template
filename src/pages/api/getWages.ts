import { NextApiRequest, NextApiResponse } from 'next'

import getWages from '@/server/handlers/wages/get'

const handleGetWages = async (req: NextApiRequest, res: NextApiResponse) => {
  await getWages(req, res)
}

export default handleGetWages
