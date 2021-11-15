import * as dotenv from "dotenv";
import app from "./app";

const config =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === undefined
    ? ".env"
    : `.env.${process.env.NODE_ENV}`;

dotenv.config({ path: __dirname + config });

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server is running in port ${port} 👍`);
});
