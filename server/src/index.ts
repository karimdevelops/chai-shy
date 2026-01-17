import "dotenv/config";
import path from "node:path";
import express from "express";
import passport from "passport";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";

import adminRouter from "./routes/admin.ts";
import menuRouter from "./routes/menu.ts";
import pool from "./db/pool.ts";

const app = express();
const PgSession = connectPgSimple(session);
const PORT = process.env.PORT;
const __dirname = import.meta.dirname;

if (!process.env.SECRET)
    throw new Error("SECRET .env variable not set!");
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 5 * 24 * 60 * 60 * 1000 },
    store: new PgSession({
        createTableIfMissing: true,
        pool: pool
    })
}));
app.use(passport.authenticate("session"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use("/api/admin", adminRouter);
app.use("/api/menu", menuRouter);

app.listen(PORT, () =>
    console.log(`Listening on port ${PORT}`)
)