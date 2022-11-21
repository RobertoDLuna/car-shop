import { Router } from 'express';
import MotorcycleController from '../Controllers/motorcycle.controller';

const motorRoute = Router();

motorRoute.post('/motorcycles', (req, res, next) => new 
MotorcycleController(req, res, next).create());

motorRoute.get('/motorcycles', (req, res, next) => new
MotorcycleController(req, res, next).showAll());

export default motorRoute;