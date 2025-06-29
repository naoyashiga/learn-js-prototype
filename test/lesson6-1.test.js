import { describe, it, expect, afterEach } from 'vitest';
import { unsafeMerge, safeMerge } from '../my-solutions/lesson6-1';

describe('Lesson 6-1: Prototype Pollution', () => {

  // 各テストの後に、万が一プロトタイプが汚染されていた場合でもクリーンアップする
  afterEach(() => {
    delete Object.prototype.isPolluted;
  });

  it('[脆弱な例] unsafeMergeはプロトタイプ汚染を引き起こす', () => {
    // 攻撃者が用意した、`__proto__`キーを含む悪意のあるJSONペイロード
    const maliciousPayload = JSON.parse('{"__proto__": {"isPolluted": true}}');
    const target = {};

    // 脆弱な関数でマージを実行
    unsafeMerge(target, maliciousPayload);

    // この時点で、`Object.prototype`が汚染されてしまった
    const victim = {};
    // 全く無関係な新しいオブジェクト`victim`ですら、汚染されたプロパティを持ってしまう
    expect(victim.isPolluted).toBe(true);
  });

  it('[安全な例] safeMergeはプロトタイプ汚染を防ぐ', () => {
    const maliciousPayload = JSON.parse('{"__proto__": {"isPolluted": true}}');
    const target = {};

    // あなたが実装する安全な関数でマージを実行
    safeMerge(target, maliciousPayload);

    const victim = {};
    // 安全な関数はプロトタイプを汚染しないはず
    expect(victim.isPolluted).toBeUndefined();
  });

  it('[安全な例] safeMergeは`constructor`キーによる汚染も防ぐ', () => {
    const maliciousPayload = JSON.parse('{"constructor": {"prototype": {"isPolluted": true}}}');
    const target = {};

    safeMerge(target, maliciousPayload);

    const victim = {};
    expect(victim.isPolluted).toBeUndefined();
  });

  it('[安全な例] safeMergeは正当なマージ処理は正しく行う', () => {
    const target = { user: { name: 'Alice' }, settings: { theme: 'dark' } };
    const source = { settings: { notifications: true }, user: { role: 'admin' } };
    const expected = {
      user: { name: 'Alice', role: 'admin' },
      settings: { theme: 'dark', notifications: true },
    };

    const result = safeMerge(target, source);
    // 悪意のない、通常のプロパティは正しくマージされることを確認
    expect(result).toEqual(expected);
  });
});
