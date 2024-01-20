import axios from 'axios'

export const getPopulationRatio = async (cityCode: string): Promise<any> => {
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
