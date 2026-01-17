import { Router } from "express";
import { addToCart, getCart } from "../db/queries.ts";
const router: Router = Router();

router.post("/add", (req, res) => {
    const userId = req.body.userId;
    const productId = req.body.productId;
    addToCart(userId, productId);
})

router.post("/get", async (req, res) => {
    const userId = req.body.userId;
    const results = await getCart(userId);
    res.json(results);
})

export default router;