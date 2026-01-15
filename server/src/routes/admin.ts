import { Router } from "express";
import multer from "multer";

import { getMenuCats } from "../db/queries.ts";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name + ".avif");
    }
})
const upload = multer({ storage: storage })
const router: Router = Router();

router.post("/add", upload.single("img"), (req, res) => {
    res.redirect("/admin");
})

router.get("/menucats", async (req, res) => {
    const cats = await getMenuCats();
    res.json(cats);
})

export default router;