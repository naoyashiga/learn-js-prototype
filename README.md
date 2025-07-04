# JavaScriptプロトタイプ学習リポジトリ

このリポジトリは、JavaScriptの中級者が`prototype`の概念を深く、実践的に理解するための学習教材です。
`vitest`を用いたテスト駆動開発（TDD）形式で、各レッスンの課題をクリアしていくことで、知識を定着させることを目的とします。

---

## 学習の進め方

1.  **問題の確認**: `problems`ディレクトリにある各`lesson-X-X.js`ファイルを開き、コメントに書かれている課題を読みます。
2.  **回答の実装**: `my-solutions`ディレクトリにある、対応する`lesson-X-X.js`ファイルにあなたのコードを実装します。
3.  **テストの実行**: ターミナルで `pnpm test` または `pnpm test --watch` を実行し、`test`ディレクトリにあるテストがすべてパスすることを確認します。
4.  **答え合わせ**: `solutions`ディレクトリにある模範解答と比較し、理解を深めます。
5.  **次のレッスンへ**: すべてのテストが通ったら、次のレッスンに進みましょう！

---

## この教材を作成した最初のプロンプト

```
- 私はJavascriptの中級者です
- javascriptについてもっと理解を深めたいです
- とくにprototypeについて知りたいです
- あなたは教えるのが上手なシニアソフトウェアエンジニアです。
- 私の学習教材を作ってください
- lesson形式でlesson1-1.jsに対してtest/lesson1-1.test.jsを実行してテストを通すことで学習を進めていききます
- lessonはおおよそ5つくらい作ってください
- testはvitestを使ってください。domが必要なときはjsdomなどを使ってください
```

---

## 各レッスンの解説

### Lesson 1: すべての関数は`prototype`プロパティを持つ
- **目的:** JavaScriptの関数が（アロー関数を除き）デフォルトで`prototype`という特別なプロパティを持つことを知る。
- **状態:**
    - **学習前:** 関数はただのコードブロックだと認識している。
    - **学習後:** すべての関数が、将来インスタンスを作成するための「設計図」となるオブジェクト（`prototype`）を自動的に保持していることを理解する。
- **ユースケース:** この`prototype`オブジェクトにメソッドやプロパティを追加することで、複数のインスタンス間で機能を共有する準備ができます。これはオブジェクト指向プログラミングの第一歩です。

### Lesson 2: プロトタイプによるメソッドの継承
- **目的:** コンストラクタ関数の`prototype`に追加したメソッドを、そこから生成されたインスタンスがどのように共有し、呼び出すかを学ぶ。
- **状態:**
    - **学習前:** `prototype`の存在は知ったが、どう役立つのかは不明。
    - **学習後:** `new`でインスタンスを作成すると、そのインスタンスがコンストラクタの`prototype`を「継承」し、そこに定義されたメソッドを使えるようになる仕組みを理解する。
- **ユースケース:** メモリ効率の向上。各インスタンスにメソッドのコピーを持たせるのではなく、全インスタンスで一つのメソッドを共有します。これが、JavaScriptで「クラス」のようなものを実現する伝統的な方法です。

### Lesson 3: `Object.create`によるプロトタイプの明示的な指定
- **目的:** `new`を使わずに、`Object.create()`でオブジェクトのプロトタイプを直接指定する方法を学ぶ。
- **状態:**
    - **学習前:** `new`キーワードで暗黙的にプロトタイプが設定されることしか知らない。
    - **学習後:** あるオブジェクトを、別のオブジェクトのプロトタイプとして明示的に設定できるようになる。プロトタイプチェーンをより柔軟に構築できることを理解する。
- **ユースケース:** 特定のオブジェクトを「テンプレート」として、それを継承した新しいオブジェクトを作りたい場合に使います。コンストラクタ関数を必要としない、よりシンプルな継承パターンを実装できます。

### Lesson 4: プロトタイプチェーンとプロパティのシャドウイング
- **目的:** プロパティにアクセスした際、JavaScriptエンジンがどのようにプロトタイプチェーンを遡って値を探すかを理解する。また、インスタンス自身にプロトタイプと同じ名前のプロパティを定義するとどうなるか（シャドウイング）を学ぶ。
- **状態:**
    - **学習前:** インスタンスがメソッドを呼び出せることは知っているが、その探索の優先順位は知らない。
    - **学習後:** プロパティへのアクセスは、まずインスタンス自身を探し、なければプロトタイプ、さらにそのプロトタイプ…と連鎖的に探されることを理解する。インスタンス自身のプロパティが優先される仕組みを把握する。
- **ユースケース:** デフォルトの動作をプロトタイプで定義しつつ、特定のインスタンスだけ挙動をカスタマイズ（オーバーライド）したい場合にこの仕組みが役立ちます。

### Lesson 5: `class`構文 - プロトタイプのシンタックスシュガー
- **目的:** ES6の`class`構文が、これまで学んだプロトタイプベースの継承を、より直感的に書くための「シンタックスシュガー（糖衣構文）」であることを理解する。
- **状態:**
    - **学習前:** `class`と`prototype`が別々の機能だと思っているかもしれない。
    - **学習後:** `class`, `constructor`, `extends`, `super`といったキーワードが、裏側ではレッスン1〜4で学んだプロトタイプの仕組みを動かしていることを理解する。
- **ユースケース:** 現代のJavaScript開発における、オブジェクト指向プログラミングの標準的な書き方です。コードの可読性や保守性が向上しますが、その裏にあるプロトタイプの知識はデバッグや高度な実装で不可欠です。

### Lesson 6: セキュリティとプロトタイプ汚染
- **目的:** プロトタイプの仕組みが悪用される「プロトタイプ汚染」脆弱性を知り、その対策方法を学ぶ。
- **状態:**
    - **学習前:** プロトタイプを便利な機能としてのみ捉えている。
    - **学習後:** 外部からの入力を無防備にオブジェクトにマージすると、アプリケーション全体のオブジェクトに影響を与える深刻な脆弱性になりうることを理解し、安全なコードを書けるようになる。
- **ユースケース:** ユーザーからの入力やAPIレスポンス（特にJSON）を扱う際に、オブジェクトを安全にマージ・拡張する場面で必須の知識です。`__proto__`などの特別なキーを適切に処理することが重要になります。

---

## 現代のJavaScript(ES6+)におけるプロトタイプの立ち位置

現代のJavaScript開発では、オブジェクトの設計図を作成し、継承を行う際には**`class`構文を使うのが第一選択**です。`class`は、多くのプログラマにとって馴染み深く、コードの意図が明確になるという大きなメリットがあります。

しかし、`class`はあくまでプロトタイプベースの仕組みを隠蔽しているに過ぎません。**JavaScriptの根幹には依然としてプロトタイプが存在します。**

- **デバッグ:** `this`の挙動がおかしい、意図しないプロパティが参照される、といった問題の根本原因を探るには、プロトタイプチェーンの知識が不可欠です。
- **フレームワークの理解:** ReactやVueなどのライブラリ/フレームワークは、内部でプロトタイプの仕組みを駆使して最適化を行っています。その動作を深く理解する助けになります。
- **言語の進化:** JavaScriptの言語仕様が今後どのように進化していくかを理解する上でも、その基礎であるプロトタイプの知識は重要です。

結論として、**「書くのは`class`、考えるのは`prototype`」**という心構えが、現代のJavaScriptエンジニアには求められます。

---

## 開発で意識すべきこと

1.  **メソッドは`class`（プロトタイプ）に:** パフォーマンスのため、複数のインスタンスで共有するメソッドは必ず`class`のメソッドとして定義しましょう。`constructor`内で`this.myMethod = function() {}`のように定義すると、インスタンスごとに無駄なメモリを消費します。

2.  **`this`を意識する:** `class`のメソッド内での`this`は、呼び出され方によって変わることがあります。特に関数をコールバックとして渡す際には、アロー関数や`.bind()`を使って`this`を束縛する必要がないか常に意識してください。

3.  **プロパティの探索順序を忘れない:** あるプロパティにアクセスしたとき、それはインスタンス自身のものか、それともプロトタイプから継承したものかを常に念頭に置きましょう。デバッグ時には`hasOwnProperty`が役立ちます。

4.  **外部入力を信用しない（プロトタイプ汚染対策）:** オブジェクトをマージするユーティリティ関数などを自作・利用する際は、必ずプロトタイプ汚染対策が施されているか確認してください。特に`__proto__`キーは絶対に許可してはいけません。

5.  **継承より合成を好む:** `class`による継承は強力ですが、階層が深くなると複雑になりがちです。「継承（is-a関係）」よりも、必要な機能を部品として取り込む「合成（has-a関係）」の方が、柔軟で再利用性の高い設計になることが多いです。
