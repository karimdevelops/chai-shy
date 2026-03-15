import { Router } from "express";
import { getMenu, getMenuCats } from "../db/queries.ts";

const router: Router = Router();

router.post("/get", async (req, res) => {
    const catId = req.body.cat_id;
    const results = await getMenu(catId);
    res.status(200).send(results);
})

router.get("/menucats", async (req, res) => {
    const cats = await getMenuCats();
    res.status(200).json(cats);
})

export default router;