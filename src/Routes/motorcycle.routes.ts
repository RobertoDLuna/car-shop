import { Router } from 'express';
import MotorcycleController from '../Controllers/motorcycle.controller';

const motorRoute = Router();

motorRoute.post('/motorcycles', () => new MotorcycleController(req, res, next).create());