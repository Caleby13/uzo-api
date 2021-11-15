import { Dialect, OperatorsAliases } from "sequelize";
import * as dotenv from "dotenv";

const envFile: string =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === undefined
    ? ".env"
    : `.env.${process.env.NODE_ENV}`;

dotenv.config({ path: envFile });

export = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as unknown as number,
  dialect: (process.env.DB_DIALECT || "postgres") as Dialect,
  storage: "./__tests__/database.sqlite",
  // eslint-disable-next-line no-console
  logging: process.env.NODE_ENV === "development" ? console.log : false,
  operatorsAliases: "0" as unknown as OperatorsAliases,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
