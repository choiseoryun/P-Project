const express = require("express");
const router = express.Router();
const { getAllUsers, addUser, deleteUser} = require("../controllers/userController");

router
    .route("/")
    .get(getAllUsers)
    
router
    .route("/add")
    .post(addUser)

router
    .route("/:id")
    .delete(deleteUser)

module.exports = router
