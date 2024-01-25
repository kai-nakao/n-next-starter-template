import axios from 'axios'

export const getWage = async (
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
