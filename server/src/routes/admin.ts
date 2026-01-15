import { Router } from "express";
import multer from "multer";

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

router.post("/add", upload.single("img"), (req, res, next) => {
    res.redirect("/admin");
})

export default router;