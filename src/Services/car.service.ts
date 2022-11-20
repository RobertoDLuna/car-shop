import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarsODM';

export default class CarService {
  private carODM: CarODM;
  constructor() {
    this.carODM = new CarODM();
  }
  public async getAll() {
    const cars = await this.carODM.getAll();
    const carDomain = cars.map((car) => new Car(car));
    return carDomain;
  }

  public async create(car: ICar) {
    const newCar = await this.carODM.create(car);
    return new Car(newCar);
  }
}