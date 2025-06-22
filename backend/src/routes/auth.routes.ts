import { Router } from "express";
import * as AuthController from "../controller/auth.controller";
import passport from "passport";


const router = Router();


router.post("/register", AuthController.register);

router.post("/login", AuthController.login);


router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);


router.get("/google/callback",
    passport.authenticate("google", { session: false, failureRedirect: "/login" })
)


export default router;