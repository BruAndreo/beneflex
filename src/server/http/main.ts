import express from "express";
import routes from "./routes";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log("Server HTTP is running at port 3000"));
