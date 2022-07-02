import cors from "cors";
import express, { Express } from "express";
import { routes } from "./routes";

const app: Express = express();

const port = process.env.PORT || 3333;

// middleware
app.use(cors({}));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(
    "\nServer started on port 3333\nOpen in the browser: http://localhost:3333"
  );
});
