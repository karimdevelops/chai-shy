import "dotenv/config";
import express from "express";
import adminRouter from "./routes/admin.ts";

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use("/api/admin", adminRouter);

app.listen(PORT, () =>
    console.log(`Listening on port ${PORT}`)
)