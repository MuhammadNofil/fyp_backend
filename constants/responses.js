module.exports = {
    USER_REGISTRATION_SUCCESS: {
      fail: false,
      success: true,
      message: "User created successfully",
    },
    FAILED: "Something went wrong!",
    USERS_NOT_FOUND: "Users are not available",
    USER_NOT_FOUND: "User is not registered",
    ALREADY_ACCEPTED: "The user is already activated",
    SUCCESS: "Success",
    EMAIL_ALREADY_EXISTS: "Email address already exists.",
    CLIENT_REGISTERED_SUCCESS: "Your account has been created successfully",
    CLIENT_ACCEPTED: "Your account has been activated.",
    LOGIN_SUCCESS: "successfully login",
    SUCCESS_UPDATE: "successfully updated!",
    SUCCESS_DELETE: "successfully deleted!",
    genericResponse: (status, success, data, error) => {
      return {
        status: {
          code: status,
          success: success,
        },
        data: data,
        error: error,
      };
    },
  };
  