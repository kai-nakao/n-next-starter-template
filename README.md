技術メモ

- react queryでquery keyをcityCodeに設定しているためatomが変更されるとレンダリングされる

- atomsはグローバルstateだが、どこで使われているのかを明示するためにそれぞれのfeatureに入れている。
  - ただし、どちらからも使われる場合はグローバルstateでfolder明示する。(componentsも同じ)

- integration test使用されるmockをSharedに格納
  - react qeueryの使用場所がrenderするコンポーネントのため、mockしている。

- ディレクトリ構成
```
src
 ├features
  └Layout
   └Header
    └index.tsx
  └Main
   └RootPage
    └sections
     └SampleSection
      └components
      └functions
      └stories
      └test
      └main.tsx
   └SamplePage(省略)
  └Shared
 ├jotais
  └atoms files
 ├pages
 ├react-queries
  └hoge
   └function.ts
   └index.ts
   └key.ts
   └type.ts
   └selector.ts
  └hoge2(省略)
```
- ディレクトリ構成について
  - featuresを使用して関心ごとにディレクトリ作成
  - セマンティックHTMLのようなイメージでLayout, Main dir

test triggerについて
- precommit, github actionsでintegration testを実行

