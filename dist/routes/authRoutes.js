import express from "express";
import AuthController from "../controllers/authController.js";
import validate from "../middleware/validate.js";
import authValidation from "../validations/authValidation.js";
const router = express.Router();
router
    .route("/register")
    .post(validate(authValidation.register), AuthController.registerUser);
router
    .route("/login")
    .post(validate(authValidation.login), AuthController.loginUser);
export default router;
