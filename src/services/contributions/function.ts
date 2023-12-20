import axios from 'axios'

import { GetLikesResponse } from './type'

export const getLikes = async (): Promise<GetLikesResponse> => {
  const res = await axios.get(
    'https://qiita.com/api/v2/items/1568af078d31fca4d738/likes',
  )
  return res.data
}
