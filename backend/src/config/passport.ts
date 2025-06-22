import passport from "passport";
import { Strategy as JWTStrategy, ExtractJwt, } from "passport-jwt";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { User } from "@/models/user.mode";
import { ENV_VARS } from "./envVars";


const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: ENV_VARS.ACCESS_TOKEN_SECRET
} as const


const googleOptions = {
    clientID: ENV_VARS.GOOGLE_CLIENT_ID,
    clientSecret: ENV_VARS.GOOGLE_CLIENT_SECRET,
    callbackURL: ENV_VARS.GOOGLE_CALLBACK_URL
} as const

export function configurePassport() {

    // JWT Strategy
    passport.use(
        new JWTStrategy(jwtOptions, async (payload, done) => {
            try {
                const user = await User.findById(payload.id);
                if (user) return done(null, user);
                return done(null, false);
            } catch (err) {
                return done(err, false);
            }
        })
    )

    // Google OAuth Strategy
    passport.use(
        new GoogleStrategy(googleOptions, async (_accessToken, _refreshToken, profile, done) => {
            try {
                const email = profile.emails?.[0]?.value;
                const image = profile.photos?.[0]?.value || null;

                if (!email) return done(null, false);

                let user = await User.findOne({ email });

                if (!user) {
                    user = new User({
                        name: profile.displayName,
                        email,
                        image,
                        googleId: profile.id,
                        provider: "google"
                    })
                    await user.save();
                }

                return done(null, user);
            } catch (err) {
                return done(err, false);
            }
        })
    )
}




