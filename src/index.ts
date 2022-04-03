import * as dotenv from 'dotenv';
import { resolve } from 'path';
import { Server } from './server';

const config =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined
    ? '.env'
    : `.env.${process.env.NODE_ENV}`;

dotenv.config({ path: resolve(__dirname, '..', config) });

const app = new Server();

app.listen(process.env.PORT || 3333);
