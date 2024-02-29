import { createTRPCReact } from '@trpc/react-query'

import { AppRouter } from '@/server/routers/_app'

import type { inferRouterOutputs } from '@trpc/server'

export type RouterOutput = inferRouterOutputs<AppRouter>

export const trpc = createTRPCReact<AppRouter>()
