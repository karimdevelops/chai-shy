import { Router } from "express"

const router: Router = Router();

router.get("/", async (req, res) => {
    res.json({
        user: req.user
    });
})

export default router;