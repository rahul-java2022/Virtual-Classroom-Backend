const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

// Login and Register routes
// router.post("/login/student", studentController.login);



/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.post('/studentRegistration', userController.registerUser);
console.log("Hello router");
router.post('/adminLogin', adminController.login);


module.exports = router;