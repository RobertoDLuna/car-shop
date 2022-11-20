import { Router } from 'express';

const carRoute = Router();

carRoute.post('/cars', (req, res, next) => new CarController(req, res, next).create());

export default carRoute;