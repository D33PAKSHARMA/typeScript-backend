import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/ApiError.js";
const registerUser = catchAsync(async (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return next(new ApiError(501, "All fields are required!"));
    }
    console.log("name, email, password====<>>>", name, email, password);
    res.send({ msg: " Hey" });
});
const loginUser = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    console.log("email, password====<>>>", email, password);
    res.send({ msg: " user login success" });
});
const AuthController = {
    registerUser,
    loginUser,
};
export default AuthController;
