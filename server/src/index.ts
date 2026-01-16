import "dotenv/config";
import express from "express";
import adminRouter from "./routes/admin.ts";
import menuRouter from "./routes/menu.ts";

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/admin", adminRouter);
app.use("/api/menu", menuRouter);

app.listen(PORT, () =>
    console.log(`Listening on port ${PORT}`)
)