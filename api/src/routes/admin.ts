import { Router, Request, Response } from "express";
import multer from "multer";
import { addMenu } from "../db/queries.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name.toLowerCase().replaceAll(" ", "") + ".avif");
  },
});
const upload = multer({ storage: storage });
const router: Router = Router();

router.post(
  "/add",
  upload.single("img"),
  async (req: Request, res: Response) => {
    const cat_id = req.body.menu_category;
    const name = req.body.name;
    const price = req.body.price;
    const desc = req.body.desc;
    await addMenu(cat_id, name, price, desc);
    res.redirect("/admin");
  },
);

export default router;
