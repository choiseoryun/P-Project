const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const { getAllUsers, addUser, deleteUser, getUpdateUser} = require("../controllers/userController");

router.use(cookieParser())
router
    .route("/")
    .get(getAllUsers)
    
router
    .route("/add")
    .post(addUser)

router
    .route("/:id")
    .delete(deleteUser)
    .get(getUpdateUser)

module.exports = router
