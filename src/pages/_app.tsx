import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Header } from '@/client/features/Layout/Header'

import type { AppProps } from 'next/app'
import '@/client/styles/globals.css'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
