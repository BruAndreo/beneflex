import { Router } from "express";

const routes = Router();

routes.get("/health", (req, res) => res.status(200).json({"status": "OK"}));

routes.use((req, res) => res.status(404).json({"error": "not found"}))

export default routes;