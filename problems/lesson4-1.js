export function Vehicle() {
  // インスタンス固有のプロパティはここに定義します
}

// すべてのVehicleインスタンスで共有されるデフォルトのプロパティをプロトタイプに定義します
Vehicle.prototype.fuelType = 'gasoline';

// すべてのVehicleインスタンスで共有されるメソッドをプロトタイプに定義します
Vehicle.prototype.getFuelType = function() {
  return this.fuelType;
};

/**
 * 特定の燃料タイプを持つVehicleインスタンスを作成します。
 * @param {string} specificFuelType
 * @returns {Vehicle}
 */
export function createSpecializedVehicle(specificFuelType) {
  const vehicle = new Vehicle();
  // TODO: vehicleインスタンスに、プロトタイプにあるものと同じ `fuelType` という名前のプロパティを直接追加してください。
  // 値には引数 `specificFuelType` を設定します。

  return vehicle;
}