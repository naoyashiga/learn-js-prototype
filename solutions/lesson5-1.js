export class Character {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }

  attack() {
    return `${this.name} attacks!`;
  }
}

export class Mage extends Character {
  constructor(name, hp, mp) {
    super(name, hp);
    this.mp = mp;
  }

  castSpell() {
    return `${this.name} casts a spell!`;
  }
}
