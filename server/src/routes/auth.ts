import { Router } from "express"
import passport from "passport"
import { Strategy as LocalStrategy } from "passport-local";
import { getUser, getUserById, createUser } from "../db/queries.ts";
import type { IUser } from "../types/user.ts";

declare global {
    namespace Express {
        interface User extends IUser { }
    }
}

const router: Router = Router();

router.post("/login", passport.authenticate('local', {
    successRedirect: "/menu",
    failureRedirect: "/login"
}))

router.post("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        res.redirect("/");
    })
})

router.post("/signup", async (req, res, next) => {
    try {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const password = req.body.password;
        const user = await createUser(firstName, lastName, email, password);

        if (user) {
            req.login(user, (err) => {
                if (!err) console.error(err);
                return res.redirect("/");
            })
        }
    }
    catch (err) {
        console.error(`Sign up error: ${err}`)
    }
})

passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password"
}, async (email: string, password: string, cb) => {
    const user = await getUser(email);
    try {
        if (!user) { return cb(null, false, { message: "Incorrect username or password." }); }
        else if (user.password !== password) {
            return cb(null, false, { message: "Incorrect password" });
        }
    } catch (err) {
        console.error(`Error getting user by email: ${err}`);
    }
    return cb(null, user);
}))

passport.serializeUser((user: IUser, cb) => {
    cb(null, user.id);
})

passport.deserializeUser(async (id: number, cb) => {
    try {
        const user = await getUserById(id);
        return cb(null, user);
    } catch (err) {
        console.error(`Error getting user by id: ${err}`);
    }
})

export default router;