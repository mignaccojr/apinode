import express, { Express, Request, Response } from 'express';

const app: Express = express();
const PORT: number = 4040;

app.get('/', (req: Request, res: Response): void => {
  res.send('Deus seja louvado');
});

export { app };