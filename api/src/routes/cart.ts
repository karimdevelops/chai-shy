import { addToCart, deleteFromCart, deleteAllFromCart, getCart } from "../db/queries.ts";
import { Router } from "express";
import type { Product, Products } from "../types/user.js";

const router: Router = Router();

router.post("/add", (req, res) => {
    const userId = req.body.userId;
    const cart = req.body.cart;

    const cartProducts: Products[] = cart.map((product: Product) => ({
        user_id: userId,
        menu_id: product.product_id,
        quantity: product.quantity
    }));

    addToCart(cartProducts);
    res.sendStatus(201);
})

router.post("/delete", (req, res) => {
    const productId = req.body.productId;
    deleteFromCart(productId);
    res.sendStatus(204);
})

router.post("/deleteAll", (req, res) => {
    const userId = req.body.userId;
    const orderId = req.body.orderId;
    deleteAllFromCart(userId, orderId);
    res.sendStatus(204);
})

router.post("/get", async (req, res) => {
    const userId = req.body.userId;
    const results = await getCart(userId);
    res.status(200).json(results);
})

export default router;