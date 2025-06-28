import { describe, it, expect } from 'vitest';
import { Person } from '../lesson/lesson2-1';

describe('Lesson 2-1: Inheriting Methods via Prototype', () => {
  it('should create an instance of Person', () => {
    const person = new Person('Bob');
    expect(person).toBeInstanceOf(Person);
    expect(person.name).toBe('Bob');
  });

  it('person instances should have a greet method', () => {
    const person = new Person('Alice');
    // `greet`メソッドが存在することを確認します。
    expect(typeof person.greet).toBe('function');
  });

  it('greet method should return the correct string', () => {
    const person = new Person('Alice');
    // `greet`メソッドが正しい挨拶文を返すことを確認します。
    expect(person.greet()).toBe('Hello, my name is Alice');

    const anotherPerson = new Person('Bob');
    expect(anotherPerson.greet()).toBe('Hello, my name is Bob');
  });

  it('greet method should be on the prototype, not the instance', () => {
    const person = new Person('Charlie');
    // `hasOwnProperty`はオブジェクト自身のプロパティかをチェックします。
    // `greet`はインスタンス自身ではなく、プロトタイプチェーン上にあるべきです。
    expect(person.hasOwnProperty('greet')).toBe(false);
  });

  it('all instances should share the same greet method', () => {
    const person1 = new Person('Dave');
    const person2 = new Person('Eve');
    // 異なるインスタンスが、プロトタイプ上にある全く同じ（===）`greet`関数を共有していることを確認します。
    // これがプロトタイプを使うメリットの一つ（メモリ効率）です。
    expect(person1.greet).toBe(person2.greet);
  });
});
