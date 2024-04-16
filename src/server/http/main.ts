import express from "express";
import routes from "./routes";
import morgan from "morgan";
import config from "../../config/config";

const app = express();

app.use(morgan(":status - :method :url in :response-time ms"));
app.use(express.json());
app.use(routes);

app.listen(config.port, () => console.log(`Server HTTP is running at port ${config.port}`));
