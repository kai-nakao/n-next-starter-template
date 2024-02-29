こんなフロント開発テンプレートを作成しました。

https://n-next-starter-template.vercel.app/

### API

---

APIを使用することを想定したので、無料のRESAS APIを使用しました。

https://opendata.resas-portal.go.jp/

> RESAS(地域経済分析システム)に掲載しているデータをプログラムが取得できる機能をAPIで提供致します！

とあるように地域のデータを提供するAPIのようです。
岡山県民なので、岡山のデータを利用させていただきます。

### アプリケーション

---

Next.jsをVercelにデプロイしています。各APIエンドポイントはNext.jsのAPI Routesで生やしています。

Next.jsについてはApp RouterではなくPages Routerを使用しています。App Routerはいい噂を聞かないので一旦採用を見送っています。

### ディレクトリ構成

---

featuresディレクトリを採用。
pagesディレクト(api routeも同様)にはエントリーポイントしか置かないようにしています。
また、pageごとにHeadを書くことを忘れないようにPageごとのディレクトリにHead.tsxを作成。


### テスト
---

happy-dom, Vitest, React Testing Libraryを使用しています。
happy-domを採用した理由は、以下の記事の引用部分を目にしたからです。
https://zenn.dev/overflow_offers/articles/20240209-testing-strategy

> jsdom は Dialog Element のサポートが暗礁に乗り上げていた ため、少なからず実装のある happy-dom のほうを採用しています。

また、happy-domの方がjsdomより速いです。
詳細はhappy-dom readme↓
https://github.com/capricorn86/happy-dom

### CI/precommit

---

CIでは、integration test, prettier, eslintを実行
precommitではprettier, eslintを実行

precommitでもintegration testを回してたのですが、ちょっとやりすぎだと思ったのでやめました。

### eslint
---
- import/order
を使用して保存時にimportのグループかをして一行開けたり、アルファベットで並べたりしてる。

- import/no-restricted-pathsでimportの依存関係を管理
このテンプレートでは、clientとserverを綺麗に分けるために使用している。

- unused-imports/no-unused-imports
使用していないimport削除
### prettier
---
あまりこだわりがなく、
prettier-plugin-tailwindcssでスタイルの整列をしてるくらいです。
### style
---
TailwindCSSを使用
### データフェッチ/状態管理
---
クライアントからのAPIリクエストの部分にはtrpcを採用。trpcはreact-queryのラッパーも提供しており、データ取得、更新処理が楽になります。

クライアントでの状態管理もできる限りreact-queryで済ませるようにしています。データのフェッチが絡まない一部のステートについてはjotaiを使っています。jotaiはバンドルサイズが小さくて良いです。
