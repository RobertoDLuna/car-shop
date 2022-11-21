import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import CustomizedError from '../Utils/CustomizedError';

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

  public async findById(id: string) {
    const motorcycle = await this.motorcycleODM.getById(id);
    if (!motorcycle) throw new CustomizedError('Motorcycle not found', 404);
    return new Motorcycle(motorcycle);
  }
}