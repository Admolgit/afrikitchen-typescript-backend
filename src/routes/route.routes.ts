import express from "express";
import {
  createDishes,
  getDishes,
  getDish,
  updateDish,
  deleteDish,
} from "../controllers/dishes.controller";
import { createOrder, getOrder, getOrders, updateOrder, deleteOrder } from "../controllers/order.controller";

const router = express.Router();

// Dishes Routes
router.post("/dish", createDishes);
router.get("/dishes", getDishes);
router.get("/dish/:id", getDish);
router.put("/dish/:id", updateDish);
router.delete("/dish/:id", deleteDish);

// Order Routes
router.post("/order", createOrder);
router.get("/orders", getOrders);
router.get("/order/:id", getOrder);
router.patch("/order/:id", updateOrder);
router.delete("/order/:id", deleteOrder);

export default router;
