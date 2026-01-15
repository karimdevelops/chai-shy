import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT;

app.get("/api", (req, res) => {
    res.send("Working!?!!??!");
})

app.listen(PORT, () =>
    console.log(`Listening on port ${PORT}`)
)