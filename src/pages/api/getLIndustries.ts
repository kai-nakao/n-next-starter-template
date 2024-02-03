import { NextApiRequest, NextApiResponse } from 'next'

import getLIndustries from '@/server/handlers/lIndustries/get'

const handleGetLIndustries = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  await getLIndustries(req, res)
}

export default handleGetLIndustries
