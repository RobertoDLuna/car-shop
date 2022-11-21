import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private seatsQty: number;
  private doorsQty: number;

  constructor(car: ICar) {
    super(car);
    this.seatsQty = car.seatsQty;
    this.doorsQty = car.doorsQty;
  }
}