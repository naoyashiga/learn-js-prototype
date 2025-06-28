import { describe, it, expect } from 'vitest';
import { myFunction } from '../lesson/lesson1-1';

describe('Lesson 1-1: Functions and Prototypes', () => {
  it('myFunction should have a prototype property', () => {
    // ヒント: すべての（アロー関数以外の）関数は、デフォルトで `prototype` という名前のプロパティを持っています。
    // このプロパティがnullやundefinedでないことを確認してください。
    expect(myFunction.prototype).toBeDefined();
  });

  it('The prototype property should be an object', () => {
    // ヒント: `prototype` プロパティは、常にオブジェクトです。
    // typeof演算子を使って型を調べてみましょう。
    expect(typeof myFunction.prototype).toBe('object');
  });

  it('The prototype object should have a constructor property', () => {
    // ヒント: `prototype` オブジェクトには、デフォルトで `constructor` というプロパティがあります。
    // この `constructor` プロパティは、元の関数自身を指します。
    expect(myFunction.prototype).toHaveProperty('constructor');
  });

  it('The constructor property should point back to the original function', () => {
    // ヒント: `myFunction.prototype.constructor` が `myFunction` 自身と等しいことを確認します。
    expect(myFunction.prototype.constructor).toBe(myFunction);
  });
});
