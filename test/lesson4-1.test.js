import { describe, it, expect } from 'vitest';
import { Vehicle, createSpecializedVehicle } from '../lesson/lesson4-1';

describe('Lesson 4-1: Prototype Chain and Property Shadowing', () => {
  it('a basic vehicle should inherit fuelType from its prototype', () => {
    const basicVehicle = new Vehicle();
    // インスタンス自身は `fuelType` を持たないことを確認
    expect(basicVehicle.hasOwnProperty('fuelType')).toBe(false);
    // プロトタイプチェーンを遡って `fuelType` を見つけてくることを確認
    expect(basicVehicle.fuelType).toBe('gasoline');
  });

  it('getFuelType should return the prototype\'s fuelType for a basic vehicle', () => {
    const basicVehicle = new Vehicle();
    // `getFuelType` は `this.fuelType` を返すが、`this` は `basicVehicle` を指す。
    // `basicVehicle` 自身に `fuelType` がないので、プロトタイプから探してくる。
    expect(basicVehicle.getFuelType()).toBe('gasoline');
  });

  it('a specialized vehicle should have its own fuelType property', () => {
    const electricCar = createSpecializedVehicle('electric');
    // インスタンス自身が `fuelType` プロパティを持つ（シャドウイング）ことを確認
    expect(electricCar.hasOwnProperty('fuelType')).toBe(true);
    expect(electricCar.fuelType).toBe('electric');
  });

  it('getFuelType should return the instance\'s own fuelType for a specialized vehicle', () => {
    const hydrogenCar = createSpecializedVehicle('hydrogen');
    // `getFuelType` が返す `this.fuelType` は、まずインスタンス自身から探される。
    // インスタンスがプロパティを持っているので、プロトタイプの値ではなく、インスタンスの値が返される。
    expect(hydrogenCar.getFuelType()).toBe('hydrogen');
  });

  it('modifying an instance\'s property should not affect the prototype', () => {
    const basicVehicle = new Vehicle();
    const dieselTruck = createSpecializedVehicle('diesel');

    // インスタンスのプロパティを変更しても...
    dieselTruck.fuelType = 'bio-diesel';
    expect(dieselTruck.getFuelType()).toBe('bio-diesel');

    // ...他のインスタンスやプロトタイプ自体には影響がないことを確認
    expect(basicVehicle.getFuelType()).toBe('gasoline');
    expect(Vehicle.prototype.fuelType).toBe('gasoline');
  });
});
