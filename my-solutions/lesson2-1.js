/**
 * @param {string} name
 */
export function Person(name) {
  this.name = name;
}

// TODO: Personのプロトタイプに`greet`というメソッドを追加してください。
// このメソッドは「Hello, my name is [name]」という文字列を返すようにします。
// 例: const person = new Person('Alice'); person.greet(); // 'Hello, my name is Alice'
Person.prototype.greet = function() {
  return `Hello, my name is ${this.name}`;
};
