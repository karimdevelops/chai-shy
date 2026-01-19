import { addToCart, getCart } from "../db/queries.ts";
import { Router } from "express";
const router: Router = Router();

router.post("/add", (req, res) => {
    const userId = req.body.userId;
    const cart = req.body.cart;
    console.log(cart);
    // addToCart(userId, productId);
})

router.post("/get", async (req, res) => {
    const userId = req.body.userId;
    const results = await getCart(userId);
    res.json(results);
})

export default router;