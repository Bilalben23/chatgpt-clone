import { Router } from "express";
import * as AuthController from "../controller/auth.controller";
import passport from "passport";
import { validate } from "@/middlewares/validate";
import { loginSchema, registerSchema } from "@/validation/auth.schema";


const router = Router();

/**
 * @route POST /auth/register
 * @desc Register a new user with name, email, and password
 * @access Public
 * @body { name: string, email: string, password: string}
 */
router.post(
    "/register",
    validate({ body: registerSchema }),
    AuthController.register
);


/**
 * @route POST /auth/login
 * @desc Log in an existing user and return access & refresh tokens
 * @access Public
 * @body { email: string, password: string }
 */
router.post(
    "/login",
    validate({ body: loginSchema }),
    AuthController.login
);


/**
 * @route GET /auth/google
 * @desc Start Google OAuth flow
 * @access Public
 * @note Redirects to Google for authentication
 */
router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);


/**
 * @route GET /auth/google/callback
 * @desc Google OAuth callback URL
 * @access Public
 * @note On success, authentication continues; on failure, redirects to /login
 */
router.get("/google/callback",
    passport.authenticate("google", { session: false, failureRedirect: "/login" })
)


export default router;