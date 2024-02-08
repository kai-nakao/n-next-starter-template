// client-side trpc configuration
import { httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'

import { AppRouter } from '@/server/routers/_app'

import type { inferRouterOutputs } from '@trpc/server'

export type RouterOutput = inferRouterOutputs<AppRouter>

function getBaseUrl() {
  // TODO:
  // only register localhost 3000
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000'
  }
}

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          /**
           * If you want to use SSR, you need to use the server's full URL
           * @link https://trpc.io/docs/v11/ssr
           **/
          url: `${getBaseUrl()}/api/trpc`,
          // You can pass any HTTP headers you wish here
          async headers() {
            return {
              // authorization: getAuthCookie(),
            }
          },
        }),
      ],
    }
  },
  /**
   * @link https://trpc.io/docs/v11/ssr
   **/
  ssr: false,
})
