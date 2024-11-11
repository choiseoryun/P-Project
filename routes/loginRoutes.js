const express = require("express");
const router = express.Router();
const { userLogin, checkToken, logout} = require("../controllers/loginController")

router
    .route("/")
    .post(userLogin)

router
    .route("/verify")
    .post(checkToken)

router
    .route("/logout")
    .get(logout)

module.exports = router