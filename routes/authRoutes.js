const router = require("express").Router();
const {loginController, registerUser} = require("../Controller/authController");


router.post("/login",loginController);
router.post("/register", registerUser);


module.exports = router;