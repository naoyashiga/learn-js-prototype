export function Vehicle() {}

Vehicle.prototype.fuelType = 'gasoline';

Vehicle.prototype.getFuelType = function() {
  return this.fuelType;
};

export function createSpecializedVehicle(specificFuelType) {
  const vehicle = new Vehicle();
  vehicle.fuelType = specificFuelType;
  return vehicle;
}
