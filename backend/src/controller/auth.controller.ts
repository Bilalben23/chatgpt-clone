import { User } from "@/models/user.mode";
import type { Request, Response } from "express-serve-static-core";
import bcrypt from "bcrypt";
import { ENV_VARS } from "@/config/envVars";
import { createAccessToken, createRefreshToken } from "@/utils/jwt";



export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(409).json({
                success: false,
                message: "Email already registered"
            })
            return;
        }


        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword
        })
        await user.save();

        const accessToken = createAccessToken(user._id.toString());
        const refreshToken = createRefreshToken(user._id.toString());

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: ENV_VARS.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                name: user.name,
                email: user.email,
                image: user.image
            },
            accessToken
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err instanceof Error ? err.message : "Something went wrong"
        })
    }
}



export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || user.provider !== "local") {
            res.status(401).json({
                success: false,
                message: "Invalid credentials"
            })
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password!);

        if (!isMatch) {
            res.status(401).json({
                success: false,
                message: "Invalid credentials"
            })
            return;
        }

        const accessToken = createAccessToken(user._id.toString());
        const refreshToken = createRefreshToken(user._id.toString());


        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: ENV_VARS.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.status(200).json({
            success: false,
            message: "User registered successfully",
            user: {
                name: user.name,
                email: user.email,
                image: user.image
            },
            accessToken
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err instanceof Error ? err.message : "Something went wrong"
        })
    }
}