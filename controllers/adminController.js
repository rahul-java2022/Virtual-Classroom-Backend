const userModel = require("../models/Admin");
const bcrypt = require("bcrypt");
class User {
  constructor() {
    return {
      // registerUser: this.registerUser.bind(this),
      login: this.login.bind(this),
    };
  }

  // /**
  //  * register user function
  //  * @param {*} req
  //  * @param {*} res
  //  * @param {*} next
  //  * @returns
  //  */
  // async registerUser(req, res, next) {
  //   try {
  //       const checkUser = await userModel.findOne({ username: req.body.username });
  //       if (checkUser) {
  //         return res.json({ message: "User already exist!!" });
  //       }
  //       let bodyData = req.body.data ? JSON.parse(req.body.data) : req.body;
  //       console.log(bodyData);
  //       const userData = {
  //         first_name: bodyData.first_name,
  //         last_name: bodyData.last_name,
  //         username: bodyData.username,
  //         password: bodyData.password,
  //         mobile: bodyData.mobile
  //       }
  
  //     const result = await userModel.create(userData);
  //     return res.json({
  //       message: "user register successfully!!",
  //       status: 200,
  //       data: result,
  //     });
  //   } catch (e) {
  //       console.log(e);
  //     return res.json({
  //       message: "something went wrong!!",
  //       status: 500,
  //       data: [],
  //     });
  //   }
  // }

  /**
   * login function
   * @param {*} req
   * @param {*} res
   * @param {*} nex
   * @returns
   */
  async login(req, res, next) {
    try {
      const { username, password } = req.body;
      console.log(username,password);
      const checkUser = await userModel.findOne({ username: username });
      if (!checkUser) {
        return res.json({ message: "Invalid User!!" });
      }
      const passwordCheck = await bcrypt.compare(password, checkUser.password);
      if (!passwordCheck) {
        return res.json({ message: "Incorrect username or password!!" });
      }
      delete checkUser.password;
      return res.json({
        message: "login successfully!!",
        code: 200,
        data: checkUser,
      });
    } catch (e) {
      return res.json({
        message: "something went wrong!!",
        status: 500,
        data: [],
      });
    }
  }
}
module.exports = new User();


















// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// var express = require('express');



// const User = require("../models/Admin");
// const router = express.Router();

// module.exports = router.post('/login',(req,res,next)=>{
//     console.log("hello",req.body.username);
//     User.find({username:req.body.username})
//     // exec()
//     .then(user=>{
//         if(user.length < 1){
//             return res.status(401).json({
//                 msg: 'user not exist'
//             })            
//         }
//         bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
//             if(!result){
//                 return res.status(401).json({
//                     msg: "password is not matching"
//                 })
//             }
            
//             if(result){
//                 const token = jwt.sign({
//                     username:user[0].username,
//                     userType:user[0].userType

//                 },
//                 "this is my dummy text",
//                 {
//                     expiresIn:'24hr'
//                 }
//                 )
//                 res.status(200).json({
//                     username:user[0].username,
//                     userType:user[0].userType,
//                     token: token
//                 })
//             }
//         })
//     })
//     .catch(err=>{
//         res.status(500).json({
//             err:err
//         })
//     })
// })
 