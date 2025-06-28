import { describe, it, expect } from 'vitest';
// エラーを避けるため、lesson5-1.jsが未実装でも動作するように、ダミーのクラスをインポートします。
// 最終的には、あなたが実装したクラスがインポートされることになります。
const { Character, Mage } = await import('../lesson/lesson5-1.js').catch(() => ({ Character: class {}, Mage: class {} }));

describe('Lesson 5-1: The `class` Syntax', () => {
  describe('Character Class', () => {
    const hero = new Character('Hero', 100);

    it('should create an instance with correct properties', () => {
      expect(hero.name).toBe('Hero');
      expect(hero.hp).toBe(100);
    });

    it('should have an attack method on its prototype', () => {
      expect(hero.attack()).toBe('Hero attacks!');
      // メソッドはインスタンス自身ではなく、プロトタイプに存在することを確認
      expect(hero.hasOwnProperty('attack')).toBe(false);
      expect(Character.prototype.hasOwnProperty('attack')).toBe(true);
    });
  });

  describe('Mage Class', () => {
    const mage = new Mage('Wizard', 80, 50);

    it('should create an instance with its own and inherited properties', () => {
      expect(mage.name).toBe('Wizard'); // from Character
      expect(mage.hp).toBe(80);       // from Character
      expect(mage.mp).toBe(50);       // from Mage
    });

    it('should inherit the attack method from Character', () => {
      expect(mage.attack()).toBe('Wizard attacks!');
    });

    it('should have its own castSpell method', () => {
      expect(mage.castSpell()).toBe('Wizard casts a spell!');
      expect(mage.hasOwnProperty('castSpell')).toBe(false);
      expect(Mage.prototype.hasOwnProperty('castSpell')).toBe(true);
    });

    it('should have a correct prototype chain', () => {
      // MageのプロトタイプはCharacterのプロトタイプを継承していることを確認
      expect(Object.getPrototypeOf(Mage.prototype)).toBe(Character.prototype);
      // mageインスタンスはMageクラスのインスタンスである
      expect(mage).toBeInstanceOf(Mage);
      // mageインスタンスはCharacterクラスのインスタンスでもある
      expect(mage).toBeInstanceOf(Character);
    });
  });
});
