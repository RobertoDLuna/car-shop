import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/motorcycle.service';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
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
      const cars = await this.service.getAll();
      this.res.status(200).json(cars);
    } catch (err) {
      this.next(err);
    }
  }

  public async showById() {
    const { id } = this.req.params;
    try {
      const motorcycle = await this.service.findById(id);
      this.res.status(200).json(motorcycle);
    } catch (err) {
      this.next(err);
    }
  }
}