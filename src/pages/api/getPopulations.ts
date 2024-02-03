import { NextApiRequest, NextApiResponse } from 'next'

import getPopulations from '@/server/handlers/populations/get'

const handleGetPopulations = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  await getPopulations(req, res)
}

export default handleGetPopulations
