import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/car.service';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    try {
      const car = await this.service.create(this.req.body);
      this.res.status(201).json(car);
    } catch (err) {
      this.next(err);
    }
  }

  public async showAll() {
    try {
      const allCars = await this.service.getAll();
      this.res.status(200).json(allCars);
    } catch (err) {
      this.next(err);
    }
  }

  public async showById() {
    const { id } = this.req.params;
    try {
      const car = await this.service.findById(id);
      this.res.status(200).json(car);
    } catch (err) {
      this.next(err);
    }
  }
}