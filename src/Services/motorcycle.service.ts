import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private motorcycleODM: MotorcycleODM;
  constructor() {
    this.motorcycleODM = new MotorcycleODM();
  }

  public async getAll() {
    const motorcycles = await this.motorcycleODM.getAll();
    const motorcyclesDomain = motorcycles.map((motorcycle) => new Motorcycle(motorcycle));
    return motorcyclesDomain;
  }

  public async create(data: IMotorcycle) {
    const motorcycle = await this.motorcycleODM.create(data);
    return new Motorcycle(motorcycle);
  }
}