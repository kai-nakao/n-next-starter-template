import axios from 'axios'
import { z } from 'zod'

import { procedure, router } from '../trpc'

const apiBaseUrl =
  `${process.env.VERCEL_URL}/api` || 'http://localhost:3000/api'

export const appRouter = router({
  cityList: procedure.query(async () => {
    const citiesData = await axios.get<City[]>(`${apiBaseUrl}/getCities`)
    return citiesData.data
  }),
  lIndustry: procedure.query(async () => {
    const lIndustryData = await axios.get<LIndustry[]>(
      `${apiBaseUrl}/getLIndustries`,
    )
    return lIndustryData.data
  }),
  mIndustry: procedure
    .input(
      z.object({
        lIndustryCode: z.string(),
      }),
    )
    .query(async (opts) => {
      const lIndustryCode = opts.input.lIndustryCode
      const mIndustryData = await axios.get<MIndustry[]>(
        `${apiBaseUrl}/getMIndustries?lIndustryCode=${lIndustryCode}`,
      )
      return mIndustryData.data
    }),
  population: procedure
    .input(
      z.object({
        cityCode: z.string(),
      }),
    )
    .query(async (opts) => {
      const ciyCode = opts.input.cityCode
      const populationData = await axios.get<Population[]>(
        `${apiBaseUrl}/getPopulations?cityCode=${ciyCode}`,
      )
      return populationData.data
    }),
  wages: procedure
    .input(
      z.object({
        simcCode: z.string(),
        wageAge: z.number(),
        sicCode: z.string(),
      }),
    )
    .query(async (opts) => {
      const simcCode = opts.input.simcCode
      const wageAge = opts.input.wageAge
      const sicCode = opts.input.sicCode
      const wagesData = await axios.get<Wage[]>(
        `${apiBaseUrl}/getWages?simcCode=${simcCode}&wageAge=${wageAge}&sicCode=${sicCode}`,
      )
      return wagesData.data
    }),
})

export type AppRouter = typeof appRouter
