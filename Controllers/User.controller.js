const responses = require("../constants/responses");
const errorResponses=require('../constants/errorresponses')
const userService = require("../services/user.services");


const register = async (req, res, next) => {
  try{
    const userInfo = req.body;
    const user =await userService.Register(userInfo)
    if (!user) {
      res.send(
        responses.genericResponse(500, false, null, {
          message: errorResponses.FAILURE,
        })
      );
      return;
    } else if (responses.EMAIL_ALREADY_EXISTS == user) {
      res.send(
        responses.genericResponse(500, false, null, {
          message: responses.EMAIL_ALREADY_EXISTS,
        })
      );
      return;
    }
    res.send(
      responses.genericResponse(
        200,
        true,
        {
          message: responses.CLIENT_REGISTERED_SUCCESS,
        },
        null
      )
    );
  }catch(e)
  {
    next(e)
  }
};
const Get = async (req, res, next) => {
  try {
    const users = await userService.Get();
    if (!users) {
      res.send(
        responses.genericResponse(500, false, null, {
          message: responses.USERS_NOT_FOUND,
        })
      );
      return;
    }
    res.send(responses.genericResponse(200, true, { users }, null));
    return;
  } catch (error) {
    next(error);
  }
};
const GetbyId = async (req, res, next) => {
  const {id}=req.params
  try {
    const users = await userService.GetById(id);
    res.send(responses.genericResponse(200, true, users, null));
  } catch (error) {
    res.send(responses.genericResponse(500, false, null, error));
  }
};
const Update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userInfo = req.body;
    const users = await userService.Update(userInfo,id);
    if (!users) {
      res.send(
        responses.genericResponse(500, false, null, errorResponses.FAILURE)
      );
      return;
    }
    res.send(responses.genericResponse(200, true, {}, null));
  } catch (error) {
    res.send(responses.genericResponse(500, false, null, error));
  }
};
const UpdatePassword = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userInfo = req.body;
    const users = await userService.UpdatePassword(userInfo,id);
    if (!users) {
      res.send(
        responses.genericResponse(500, false, null, errorResponses.FAILURE)
      );
      return;
    }
    res.send(responses.genericResponse(200, true, {}, null));
  } catch (error) {
    res.send(responses.genericResponse(500, false, null, error));
  }
};
module.exports = {
  register,
  Get,
  GetbyId,
  Update,
  UpdatePassword
};
