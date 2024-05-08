import { Router } from "express";
import PaymentController from "./controllers/payment";

export default class RouterManager {

    private routes: Router
    private paymentController: PaymentController

    constructor(paymentController: PaymentController) {
        this.routes = Router();
        this.paymentController = paymentController;
    }

    public getRoutes(): Router {
        this.routes.get("/health", (req, res) => res.status(200).json({"status": "OK"}));

        this.routes.post("/payment", this.paymentController.payTransaction);

        this.routes.use((req, res) => res.status(404).json({"error": "not found"}));
        
        return this.routes;
    }
}
