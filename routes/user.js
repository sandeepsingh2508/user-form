const express = require("express");
const {
  registerUser,
  loginUser,
  logOut,
  updatePassword,
} = require("../controller/user");
const { isAuthenticationUser} = require("../middleware/auth");
const {registerValidate, loginValidate}=require('../validation/auth')
const router = express.Router();

router.route("/register").post(registerValidate, registerUser);

router.route("/login").post(loginValidate, loginUser);

router.route("/logOut").get(logOut);

router.route("/password/update").put(isAuthenticationUser, updatePassword);

module.exports = router;
