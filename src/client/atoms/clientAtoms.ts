import { QueryClient } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { atom } from 'jotai'

import { getBaseUrl } from '@/utils/getBaseURL'
import { trpc } from '@/utils/trpc'

export const queryClientAtom = atom(new QueryClient())

export const trpcClientAtom = atom(() =>
  trpc.createClient({
    links: [
      httpBatchLink({
        url: `${getBaseUrl()}/api/trpc`,
      }),
    ],
  }),
)
