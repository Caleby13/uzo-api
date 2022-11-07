import cors from 'cors';
import express, { Application } from 'express';
import routes from './api';
import './app/database';

export class Server {
  private app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes(): void {
    this.app.use(routes);
  }

  listen(port: number | string): void {
    this.app.listen(port);
    console.log(`server running in port ${port}`);
  }
}
