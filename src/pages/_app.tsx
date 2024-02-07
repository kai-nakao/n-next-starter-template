import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Header } from '@/client/features/Layout/Header'
import { trpc } from '@/utils/trpc'

import type { AppProps } from 'next/app'
import '@/client/styles/globals.css'
import type { AppType } from 'next/app'

const queryClient = new QueryClient()

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default trpc.withTRPC(MyApp)
