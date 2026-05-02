import { Request, Response, Router } from "express";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  req.user
    ? res.json({
        user: req.user,
      })
    : res.json({
        user: "empty",
      });
});

export default router;
