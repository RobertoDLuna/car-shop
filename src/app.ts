import express, { Request, Response } from 'express';
import ErrorHandler from './Middlewares/ErrorMiddleware';
import motorRoute from './Routes/motorcycle.routes';
import carRoute from './Routes';

const app = express();

app.use(express.json());
app.use(carRoute);
app.use(motorRoute);
app.use(ErrorHandler.handle);

app.get('/', async (req: Request, res: Response) => res.status(200).json({ message: 'Conectado' }));

export default app;
