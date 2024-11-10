const asyncHandler = require('express-async-handler')
const path = require("path")
const db = require("../models/index").db
const CryptoJS = require('crypto-js');
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET

const userLogin = asyncHandler(async(req, res) => {
    const userId = req.body.id;
    const userPw = CryptoJS.SHA256(req.body.password).toString();
    const user = await db.user.findOne({where: { id: userId }});
    if (!user){
        res.send("유저 이름이 존재하지 않습니다")
    }
    console.log(user.password)
    console.log(userPw)
    if (user.password === userPw){
        console.log("로그인이 성공하였습니다")
        const token = jwt.sign({id: user.id}, jwtSecret, { expiresIn: '1h' })
        res.cookie("token", token,{httpOnly:true})
        return res.redirect("/")
    }
    res.send("다시 시도해 주세요")
})

const checkToken = (req, res, next) => {
    res.setHeader("Cache-Control", 'no-cache, no-store, must-revalidate');
    const token = req.cookies.token;
    console.log(token)
    if (!token) {
        return res.redirect("/login");
    }
    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.username = decoded.username;
        next();
    } catch (error) {
        return res.status(401).send("로그인 필요");
    }
};


module.exports = {userLogin, checkToken}