import { Router } from "express";
import { addToCart } from "../db/queries.ts";

const router: Router = Router();

router.post("/add", (req, res) => {
    const userId = req.body.userId;
    const productId = req.body.productId;
    addToCart(userId, productId);
})

export default router;