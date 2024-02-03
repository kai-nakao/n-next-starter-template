import { NextApiRequest, NextApiResponse } from 'next'

import getLIndustries from '@/server/handlers/lIndustries/get'

const handleGetMIndustries = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  await getLIndustries(req, res)
}

export default handleGetMIndustries
