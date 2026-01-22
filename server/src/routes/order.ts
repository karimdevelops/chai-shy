import { addOrder } from "../db/queries.ts";
import { Router } from "express";

const router: Router = Router();

router.post("/add", async (req, res) => {
    const userId = req.body.userId;
    const results = await addOrder(userId);
    res.status(200).json(results);
})

export default router;