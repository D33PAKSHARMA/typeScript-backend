import { NextFunction, Request, Response } from "express";
import { LoginRequestBody, RegisterRequestBody } from "../types/userTypes.js";
import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/ApiError.js";

const registerUser = catchAsync(
  async (
    req: Request<{}, {}, RegisterRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return next(new ApiError(501, "All fields are required!"));
    }
    console.log("name, email, password====<>>>", name, email, password);
    res.send({ msg: " Hey" });
  }
);

const loginUser = catchAsync(
  async (
    req: Request<{}, {}, LoginRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { email, password } = req.body;
    console.log("email, password====<>>>", email, password);
    res.send({ msg: " user login success" });
  }
);

const AuthController = {
  registerUser,
  loginUser,
};

export default AuthController;
