import { useAtom } from 'jotai'

import { selectedCityAtom } from '@/client/atoms/cityAtoms'
import { RouterOutput, trpc } from '@/utils/trpc'

import { getRatioSelector } from './selector'

export const usePopulationChartData = ({
  initialData,
}: {
  initialData?: RouterOutput['population'] | undefined
}) => {
  const [selectedCity] = useAtom(selectedCityAtom)

  const { data, isPending, isError } = trpc.population.useQuery<
    RouterOutput['population']
  >(
    { cityCode: selectedCity },
    {
      //TODO: trpc cannot edit querykey to use selectedLIndustryAtom
      select: getRatioSelector,
      staleTime: 1000 * 5,
      initialData: initialData,
    },
  )

  return {
    data,
    isPending,
    isError,
  }
}
