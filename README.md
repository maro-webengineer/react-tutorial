# React Learning Log
Reactの学習過程をまとめたリポジトリです。

実際に手を動かしながら理解を深めています。

なおReactの学習に注力するためにissueは作成せずにmainリポジトリに直接コミットするものとします。

## 目的
- Reactの基本文法を理解する。
- 学習の過程を可視化し、成長記録として残す。


## 学び

### 1. tsxの基本構成
tsxでは以下の構成で書くことができる
```javascript:tsx
function App() {
  // JavaScriptのコードを書く
  
  return (
   /* HTMLで画面の見た目部分を書く */
  )
}

export default App
```

### 2. `map`関数を使って配列データを１つずつ表示する
`{}`は**カーリーブレス**と呼び、JSXで動的なJavaScriptの値を扱う場合に使用する。

配列内のデータを１つずつ表示するために`map`関数を使う。

`map`関数は配列やオブジェクトの中身を取り出し、かつ繰り返し処理を行うJavaScriptのメソッド。

配列やオブジェクトを`map`関数の中でコールバック関数を定義して新しい配列を作成する。

引数の`profile`を使って`list`の中身にアクセスできる。

```javascript:App.tsx

function App() {

  const list = [
    {
      id: 1,
      name: "鈴木太郎",
      gender: "男性",
    },
    {
      id: 2,
      name: "鈴木二郎",
      gender: "男性",
    },
    {
      id: 3,
      name: "鈴木文子",
      gender: "女性",
    },
    {
      id: 4,
      name: "鈴木不二子",
      gender: "女性",
    }
  ]

  return (
    <div>
      {list.map((profile) => (
        <div key={profile.id}>
          <h2>{profile.name}</h2>
          <p>{profile.gender}</p>
        </div>
      ))}
    </div>
  )
}
```

### 3. `useState`について
`useState`はReactで値を保存しておくために使用するReactのHooks（フック）という機能の１つ。

Reactの機能をクラスコンポーネントを書かずに済むとても便利な機能かつ、再利用性が高くテストコードも書きやすくなると。

`import {hook_name} from 'react';`的な構文でimportすることで使えるようになる。

基本的にはHooksを活用してHooksで補えないものがあればクラスコンポーネントを作成する。


配列変数の左側`text`がステート、右側`setText`がステートを更新する関数になる。

```javascript:App.tsx
import { useState } from 'react';
const [text, setText] = useState("Hello World");
return (
  <div>
    <input type="text" onChange={(e) => setText(e.target.value)} />
    <p>{text}</p>
  </div>
)
```
こんな感じのコードを書いたら以下のgifの動きになる。

inputに入力した文字が即時`text`に表示されるようになる。

![](https://storage.googleapis.com/zenn-user-upload/4ddf54d3ac74-20251107.gif)

### 4. `filter`と`includes`
`includes`の引数に指定されたtextが`profile.name`の中に含まれているかを判定してフィルタリングする機能。

profileのnameがtextに入れた文字と一致したものだけを画面に表示するようにできる。

```javascript:App.tsx
function App() {

  const list = [
    {
      id: 1,
      name: "鈴木太郎",
      gender: "男性",
    },
    {
      id: 2,
      name: "鈴木二郎",
      gender: "男性",
    },
    {
      id: 3,
      name: "鈴木文子",
      gender: "女性",
    },
    {
      id: 4,
      name: "鈴木不二子",
      gender: "女性",
    }
  ]

  return (
    <div>
      {list.filter((profile) => profile.name.includes(text))
        .map((profile) => (
          <div key={profile.id}>
            <h2>{profile.name}</h2>
            <p>{profile.gender}</p>
          </div>
        ))
      }
    </div>
  )

}
```

### 5. JavaScriptでの非同期処理
`fetch`を利用することでHTTPリクエストをしてデータ取得をする。

JavaScriptの`fetch`はWebサーバーからデータを取得するための関数。

APIを叩くためにはトークンが必要でBearerで通す。

指定方法は`fetch`の第二引数のオプション。

`async`・・・非同期処理を使いますよという宣言

`await`・・・非同期処理が終わるまで待ちますよという宣言

```javascript:App.tsx
// 基本はこう
const fetchApi = async () => {
  const response = await fetch(URL, オプション);
}

// APIトークンを追加したらこう
const API_KEY = `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`;
const fetchApi = async () => {
  const response = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${API_KEY}`
    }
  });
  const data = await response.json();
  return data;
};
```

async関数の中で非同期処理の完了を間違い処理には`await`を付ける。

特に待たずに並行実行する場合は付けない。

### 6. `useEffect`について
`useEffect`はHooksのうちの１つ。

第一引数に実行したい処理、第二引数に依存配列を渡す。

`useEffet`の第二引数に指定された依存配列が空であれば画面表示前に１度だけ実行される。

再レンダリングされても実行されない。

第二引数に`useState`でセットしたステートの変数を指定することで、inputに入力された値を即座に認識・反映する。

つまり`useEffet`の第一引数に指定した関数を実行、かつ入力されたデータを探して返す。

と思ったが[こちら](https://qiita.com/seira/items/e62890f11e91f6b9653f)を見ると何か違うっぽい？

もっと基礎的な部分の理解を深める必要がありそうなので一旦スルーする。

### TypeScriptの型エラー
TypeScriptでは型指定が前提とされているため、想定していた型と実際の型が異なる場合はエラーが表示される

![](https://storage.googleapis.com/zenn-user-upload/4ba7a753fb0b-20251108.png)

`useState`を使う場合は関数の後ろで型指定をする必要があるらしい
```javascript
type Hoge = {
  id: number;
  name: string;
  gender: string;
};

const [text, setText] = useState<Hoge[]>([]);
```

## 参考資料

https://qiita.com/Sicut_study/items/afd66cac978f4b0a6e61
