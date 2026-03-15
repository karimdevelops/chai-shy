import "dotenv/config";
import path from "node:path";
import express from "express";
import passport from "passport";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";

import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import adminRouter from "./routes/admin.js";
import menuRouter from "./routes/menu.js";
import cartRouter from "./routes/cart.js";
import orderRouter from "./routes/order.js";
import pool from "./db/pool.js";

const app = express();
const PgSession = connectPgSimple(session);
const PORT = process.env.PORT;
const __dirname = import.meta.dirname;

if (!process.env.SECRET) throw new Error("SECRET .env variable not set!");
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 5 * 24 * 60 * 60 * 1000 },
    store: new PgSession({
      createTableIfMissing: true,
      pool: pool,
    }),
  }),
);
app.use(passport.authenticate("session"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/menu", menuRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

if (process.env.PROD != "true")
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

export default app;
