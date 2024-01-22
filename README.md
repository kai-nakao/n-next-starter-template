技術メモ

- react queryでquery keyをcityCodeに設定しているためatomが変更されるとレンダリングされる

- atomsはグローバルstateだが、どこで使われているのかを明示するためにそれぞれのfeatureに入れている。
  - ただし、どちらからも使われる場合はグローバルstateでfolder明示する。(componentsも同じ)
