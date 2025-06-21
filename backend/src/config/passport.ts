import passport from "passport";
import { Strategy as JWTStrategy, ExtractJwt, } from "passport-jwt";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";


const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET!
} as const


const googleOptions = {
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: process.env.GOOGLE_CALLBACK_URL || "/api/auth/google/callback"
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
                if (!email) return done(null, false);

                let user = await User.findOne({ email });

                if (!user) {
                    user = new User({
                        name: profile.displayName,
                        email,
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




