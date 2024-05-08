import express from "express";
import morgan from "morgan";
import config from "../../config/config";
import RouterManager from "./routes";
import PaymentController from "./controllers/payment";

const app = express();

const paymentController = new PaymentController();

const router = new RouterManager(paymentController);

app.use(morgan(":status - :method :url in :response-time ms"));
app.use(express.json());
app.use(router.getRoutes());

app.listen(config.port, () => console.log(`Server HTTP is running at port ${config.port}`));
