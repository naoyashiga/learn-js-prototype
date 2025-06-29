/**
 * このオブジェクトは、他の動物オブジェクトのプロトタイプとして機能します。
 */
export const animalPrototype = {
  sound: '...',
  makeSound() {
    return `This animal says ${this.sound}`;
  }
};

/**
 * `Object.create` を使って、`animalPrototype` をプロトタイプに持つ新しいオブジェクトを作成します。
 * @param {string} specificSound
 * @returns {object}
 */
export function createSpecificAnimal(specificSound) {
  // TODO: `Object.create` を使って `animalPrototype` を継承した新しいオブジェクトを作成してください。
  // TODO: 新しく作成したオブジェクトに `sound` プロパティを追加し、引数 `specificSound` の値を設定してください。
  // TODO: 作成したオブジェクトを返してください。
  return null; // この行を修正してください
}