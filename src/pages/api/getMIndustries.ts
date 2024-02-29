import { NextApiRequest, NextApiResponse } from 'next'

import getMIndustries from '@/server/handlers/mIndustries/get'

const handleGetMIndustries = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  await getMIndustries(req, res)
}

export default handleGetMIndustries
