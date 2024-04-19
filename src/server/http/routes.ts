import { Router } from "express";
import PaymentController from "./controllers/payment";

const routes = Router();
const paymentController = new PaymentController();

routes.get("/health", (req, res) => res.status(200).json({"status": "OK"}));

routes.post("/payment", paymentController.payTransaction);

routes.use((req, res) => res.status(404).json({"error": "not found"}))

export default routes;