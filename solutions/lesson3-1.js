export const animalPrototype = {
  sound: '...',
  makeSound() {
    return `This animal says ${this.sound}`;
  }
};

export function createSpecificAnimal(specificSound) {
  const animal = Object.create(animalPrototype);
  animal.sound = specificSound;
  return animal;
}
