import { Router } from 'express';
import CarController from '../Controllers/car.controller';

const carRoute = Router();

carRoute.post('/cars', (req, res, next) => new CarController(req, res, next).create());
carRoute.get('/cars', (req, res, next) => new CarController(req, res, next).showAll());
carRoute.get('/cars/:id', (req, res, next) => new CarController(req, res, next).showById());

export default carRoute;