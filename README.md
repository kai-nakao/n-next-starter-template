技術メモ

- react queryでquery keyをcityCodeに設定しているためatomが変更されるとレンダリングされる

- atomsはグローバルstateだが、どこで使われているのかを明示するためにそれぞれのfeatureに入れている。
  - ただし、どちらからも使われる場合はグローバルstateでfolder明示する。(componentsも同じ)

- ディレクトリ構成
.
├── src
│   ├── atoms
│   ├── features
│   │   ├── Layout
│   │   ├── Main
│   │   │   ├── RootPage
│   │   │   ├── Shared
│   │   │   └── WagePage
│   ├── pages
│   ├── services
│   │   ├── city
│   │   ├── largeIndustry
│   │   ├── MediumIndustry
│   │   ├── population
│   │   └── wage
│   └── styles
└── README.md
- ディレクトリ構成について
  - featuresを使用して関心ごとにディレクトリ作成
  - セマンティックHTMLのようなイメージでLayout, Main dir
  - 
