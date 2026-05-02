import { Router, Request, Response } from "express";
import { getMenu, getMenuCats } from "../db/queries.js";

const router: Router = Router();

router.post("/get", async (req: Request, res: Response) => {
  const catId = req.body.cat_id;
  const results = await getMenu(catId);
  res.status(200).send(results);
});

router.get("/menucats", async (req: Request, res: Response) => {
  const cats = await getMenuCats();
  res.status(200).json(cats);
});

export default router;
