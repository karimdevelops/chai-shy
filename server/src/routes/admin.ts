import { Router } from "express";
import multer from "multer";
import { addMenu } from "../db/queries.ts";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name.toLowerCase().replaceAll(" ", "") + ".avif");
    }
})
const upload = multer({ storage: storage })
const router: Router = Router();

router.post("/add", upload.single("img"), (req, res) => {
    const cat_id = req.body.menu_category;
    const name = req.body.name;
    const price = Number(req.body.price).toFixed(1);
    const desc = req.body.desc;
    addMenu(cat_id, name, price, desc)
    res.redirect("/admin");
})

export default router;