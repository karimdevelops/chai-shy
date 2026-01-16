import { Router } from "express";
import { getMenuCats } from "../db/queries.ts";

const router: Router = Router();

router.get("/menucats", async (req, res) => {
    const cats = await getMenuCats();
    res.json(cats);
})

export default router;