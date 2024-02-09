import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useAtom } from 'jotai'

import { queryClientAtom, trpcClientAtom } from '@/client/atoms/clientAtoms'
import { Header } from '@/client/features/Layout/Header'
import { trpc } from '@/utils/trpc'

import '@/client/styles/globals.css'

import type { AppProps, AppType } from 'next/app'

const App: AppType = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useAtom(queryClientAtom)
  const [trpcClient] = useAtom(trpcClientAtom)
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <Header />
        <Component {...pageProps} />
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default App
