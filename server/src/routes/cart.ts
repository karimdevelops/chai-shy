import { addToCart, getCart } from "../db/queries.ts";
import { Router } from "express";
const router: Router = Router();

router.post("/add", (req, res) => {
    const userId = req.body.userId;
    const cart = req.body.cart;
    const cartProducts = cart.map((x) => ({
        user_id: userId,
        menu_id: x.product_id,
        quantity: x.quantity
    }))
    addToCart(cartProducts);
})

router.post("/get", async (req, res) => {
    const userId = req.body.userId;
    const results = await getCart(userId);
    res.json(results);
})

export default router;