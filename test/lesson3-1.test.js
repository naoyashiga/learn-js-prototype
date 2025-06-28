import { describe, it, expect } from 'vitest';
import { animalPrototype, createSpecificAnimal } from '../lesson/lesson3-1';

describe('Lesson 3-1: Creating Objects with Object.create', () => {

  it('animalPrototype should have a makeSound method', () => {
    expect(typeof animalPrototype.makeSound).toBe('function');
  });

  it('createSpecificAnimal should return an object with the correct sound', () => {
    const cat = createSpecificAnimal('Meow');
    // インスタンス自身のプロパティとして `sound` を持っていることを確認
    expect(cat.hasOwnProperty('sound')).toBe(true);
    expect(cat.sound).toBe('Meow');
  });

  it('the created animal should inherit the makeSound method', () => {
    const dog = createSpecificAnimal('Woof');
    // `makeSound` メソッドをプロトタイプから継承して呼び出せることを確認
    expect(dog.makeSound()).toBe('This animal says Woof');
  });

  it('makeSound method should not be an own property of the instance', () => {
    const bird = createSpecificAnimal('Tweet');
    // `makeSound` はインスタンス自身のプロパティではないことを確認
    expect(bird.hasOwnProperty('makeSound')).toBe(false);
  });

  it('the prototype of the created animal should be animalPrototype', () => {
    const cow = createSpecificAnimal('Moo');
    // `Object.getPrototypeOf` を使って、インスタンスのプロトタイプが正しく設定されているかを確認
    expect(Object.getPrototypeOf(cow)).toBe(animalPrototype);
  });
});
