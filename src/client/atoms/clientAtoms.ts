import { QueryClient } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { atom } from 'jotai'

import { trpc } from '@/utils/trpc'

export const queryClientAtom = atom(new QueryClient())

export const trpcClientAtom = atom(() =>
  trpc.createClient({
    links: [
      httpBatchLink({
        url: 'http://localhost:3000/api/trpc',
      }),
    ],
  }),
)
