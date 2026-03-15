import { Router } from "express"

const router: Router = Router();

router.get("/", async (req, res) => {
    req.user ?
        res.json({
            user: req.user
        })
        : res.json({
            user: "empty"
        });
})

export default router;