import { Router } from "express";
import multer from "multer";
import { addMenu } from "../db/queries.ts";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name.toLowerCase() + ".avif");
    }
})
const upload = multer({ storage: storage })
const router: Router = Router();

router.post("/add", upload.single("img"), (req, res) => {
    const cat_id = req.body.menu_category;
    const name = req.body.name;
    const price = req.body.price;
    const imgLoc = "";
    const desc = req.body.desc;
    addMenu(cat_id, name, price, imgLoc, desc)
    res.redirect("/admin");
})

export default router;