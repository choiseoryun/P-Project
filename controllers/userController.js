const asyncHandler = require('express-async-handler')
const path = require("path")
const db = require("../models/index").db
const CryptoJS = require('crypto-js');

const getAllUsers = asyncHandler(async(req,res)=>{
    try {
        const users = await db.user.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: '서버 오류', error: error.message });
    }
})

const addUser = asyncHandler(async(req,res)=>{
    try {
        const userInfo = req.body
        db.user.create({
            name: userInfo.name,
            id: userInfo.id,
            email:userInfo.email,
            phonenum: userInfo.phonenum,
            address: userInfo.address,
            // 거리?
            who: userInfo.who,
            password: CryptoJS.SHA256(userInfo.password).toString(),
        })
        res.send("성공하였습니다")
    } catch (error) {
        res.status(500).json({ message: '서버 오류', error: error.message });
    }
})

const deleteUser = asyncHandler(async(req,res)=>{
    try {
        console.log(req.params.id)
        await db.user.destroy({ where: { user_num: req.params.id } });
        console.log("삭제완료")

    } catch (error) {
        res.status(500).json({ message: '서버 오류', error: error.message });
    }
})



module.exports = {getAllUsers, addUser, deleteUser};