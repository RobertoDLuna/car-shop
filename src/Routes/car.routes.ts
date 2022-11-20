import { Router } from 'express';
import CarController from '../Controllers/car.controller';

const carRoute = Router();

carRoute.post('/cars', (req, res, next) => new CarController(req, res, next).create());
carRoute.get('/cars', (req, res, next) => new CarController(req, res, next).showAll());

export default carRoute;