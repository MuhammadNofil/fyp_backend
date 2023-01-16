const  passport=require('passport')
const GoogleStrategy=require('passport-google-oauth20').Strategy

passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:"http://localhost:5000/google/callback",
    passReqToCallback:true,
},function(accessToken, refreshToken, profile, cb,done) {
    console.log(profile)
    return done(null,profile)
}))