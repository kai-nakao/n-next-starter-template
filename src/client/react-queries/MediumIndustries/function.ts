import axios from 'axios'

export const getMIndustry = async (
  lIndustryCode: string,
): Promise<MIndustry> => {
  const response = await axios.get(
    `https://opendata.resas-portal.go.jp/api/v1/industries/middle?sicCode=${lIndustryCode}`,
    {
      headers: {
        'X-API-KEY': process.env.API_KEY,
      },
    },
  )

  return response.data
}
