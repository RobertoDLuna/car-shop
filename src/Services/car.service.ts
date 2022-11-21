import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarsODM';
import CustomizedError from '../Utils/CustomizedError';

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

  public async findById(id: string) {
    const car = await this.carODM.getById(id);
    if (!car) throw new CustomizedError('Car not found', 404);
    return new Car(car);
  }

  public async update(id: string, data: ICar) {
    const updatedCar = await this.carODM.update(id, data);
    if (!updatedCar) throw new CustomizedError('Car not found', 404);
    const car = await this.carODM.getById(id);
    return new Car(car as ICar);
  }
}