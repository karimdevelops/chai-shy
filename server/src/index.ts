import "dotenv/config";
import path from "node:path";
import express from "express";
import adminRouter from "./routes/admin.ts";
import menuRouter from "./routes/menu.ts";

const app = express();
const PORT = process.env.PORT;
const __dirname = import.meta.dirname;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/uploads", express.static(path.join(__dirname, "..", "uploads")));
console.log(path.join(__dirname, "uploads"));
app.use("/api/admin", adminRouter);
app.use("/api/menu", menuRouter);

app.listen(PORT, () =>
    console.log(`Listening on port ${PORT}`)
)