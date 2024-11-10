const express = require("express");
const router = express.Router();
const { userLogin, checkToken} = require("../controllers/loginController")

router
    .route("/")
    .get
    .post(userLogin)

router
    .route("/verify")
    .post(checkToken)

module.exports = router