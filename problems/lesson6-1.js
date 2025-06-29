/**
 * [危険な関数] この関数はプロトタイプ汚染に対して脆弱です。
 * 本番環境では絶対に使用しないでください。デモ目的でのみ使用します。
 * @param {object} target
 * @param {object} source
 */
export function unsafeMerge(target, source) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      // `target`と`source`の両方で、同じキーの値がオブジェクトであれば再帰的にマージ
      if (key in target && typeof target[key] === 'object' && typeof source[key] === 'object') {
        unsafeMerge(target[key], source[key]);
      } else {
        // そうでなければ、`source`の値を`target`に設定
        target[key] = source[key];
      }
    }
  }
  return target;
}

/**
 * TODO: プロトタイプ汚染を防ぐ、安全なマージ関数を実装してください。
 * この関数は`unsafeMerge`と同様に、再帰的に`source`を`target`にマージしますが、
 * `__proto__`、`constructor`、`prototype`といった危険なキーを無視する必要があります。
 * @param {object} target
 * @param {object} source
 * @returns {object}
 */
export function safeMerge(target, source) {
  // ここにあなたの実装を書いてください
  // ヒント: for...inループの中で、キーが危険なものでないかチェックします。

  return target; // この行はプレースホルダーです
}