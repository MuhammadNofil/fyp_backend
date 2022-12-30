const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// const env=require('..')

// Generate and save password hash
const hashPassword = async (password) => {
  try {
    password = await bcrypt.hash( password, 10)
    return password
  } catch (error) {
    console.error(error);
  }
};
const comparePassword = async (password, passwordToCompareWith) => {
    try {
      pass=await bcrypt.compare(password, passwordToCompareWith);
        return pass
    } catch (error) {
      console.error(error);
    }
  };
  const getJwt = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: user.rememberMe
        ? process.env.SESSION_EXPIRY_LONG
        : eval(process.env.SESSION_EXPIRY),
    });
  };
  const getRefreshToken = (user) => {
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: user.rememberMe
        ? process.env.SESSION_EXPIRY_LONG
        : eval(process.env.REFRESH_TOKEN_EXPIRY),
    });
    return refreshToken;
  };
  const verifyUserOnLogin = passport.authorize("local", {
    failureRedirect: "/user/session/loginFailed",
  });
//   const verifyUserOnLogin =passport.authenticate('local', { failureRedirect: '/login' }),
module.exports = {
    verifyUserOnLogin,
    hashPassword,
    comparePassword,
    getJwt,
    getRefreshToken,
}
