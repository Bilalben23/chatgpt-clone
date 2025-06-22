import { ENV_VARS } from "@/config/envVars";
import jwt from "jsonwebtoken";


/**
 * Create access token (short-lived)
 */
export function createAccessToken(userId: string): string {
    return jwt.sign({ id: userId }, ENV_VARS.ACCESS_TOKEN_SECRET, {
        expiresIn: "15m"
    })
}


/**
 * create refresh token (long-lived)
 */
export function createRefreshToken(userId: string): string {
    return jwt.sign({ id: userId }, ENV_VARS.REFRESH_TOKEN_SECRET, {
        expiresIn: "7d"
    })
}