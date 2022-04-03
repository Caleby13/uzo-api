import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

const config =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined
    ? '.env'
    : `.env.${process.env.NODE_ENV}`;

dotenv.config({ path: resolve(__dirname, '..', '..', '..', config) });

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const baseURL = `mongodb+srv://${user}:${password}@cluster0.sn1gw.mongodb.net/uzo?retryWrites=true&w=majority`;
mongoose.connect(baseURL);

export default mongoose;
