const UserSession = require("../models/user.session");
const errorResponses = require("../constants/ErrorResponses");
const responses = require("../constants/Responses");

const createUserSession = async (userId, refreshToken, rememberMe) => {
  try {
    const session = await UserSession.create({
      refreshToken: refreshToken,
      _id: userId,
      rememberMe: !!rememberMe,
    });

    if (!session) {
      return errorResponses.FAILURE;
    }

    return responses.LOGIN_SUCCESS;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createUserSession,
};
