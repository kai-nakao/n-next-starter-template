import Head from 'next/head'

export const RootHead = () => {
  return (
    <Head>
      <title>人口増減グラフ トップページ</title>
      <meta charSet="UTF-8" />
      <meta name="description" content="岡山県の人口増加グラフを表示します。" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="岡山県, 人口, 増減, グラフ" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
