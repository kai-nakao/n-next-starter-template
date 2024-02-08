import axios from 'axios'
import { z } from 'zod'

import { City } from '@/server/models/City'

import { Population } from '../models/Population'
import { Wage } from '../models/Wage'
import { procedure, router } from '../trpc'

export const appRouter = router({
  cityList: procedure.query(async () => {
    const citiesData = await axios.get<City[]>(
      'http://localhost:3000/api/getCities',
    )
    return citiesData.data
  }),
  lIndustry: procedure.query(async () => {
    const lIndustryData = await axios.get<LIndustry[]>(
      'http://localhost:3000/api/getLIndustries',
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
        `http://localhost:3000/api/getMIndustries?lIndustryCode=${lIndustryCode}`,
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
        `http://localhost:3000/api/getPopulations?cityCode=${ciyCode}`,
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
        `http://localhost:3000/api/getWages?simcCode=${simcCode}&wageAge=${wageAge}&sicCode=${sicCode}`,
      )
      return wagesData.data
    }),
})

export type AppRouter = typeof appRouter
