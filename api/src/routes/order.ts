import { addOrder } from "../db/queries.js";
import { Request, Response, Router } from "express";

const router: Router = Router();

router.post("/add", async (req: Request, res: Response) => {
  const userId = req.body.userId;
  const results = await addOrder(userId);
  res.status(200).json(results);
});

export default router;
