const router = require("express").Router();
var passport = require("../config/passport/passport.js");
//const authController = require("../controller/authController");
//const userController = require("../controller/userController")
const taskController = require("../controller/taskController")

router.use(function(req,res,next){
	console.log("*****",req.method,req.url,"*****");
	next();
});

router.get("/check",function(req,res){
	res.send("check passed!")
});

router.post("/addTasks",taskController.create);
router.get("/userTasks/:id",taskController.findById);


function isLoggedIn(req, res, next) {
	console.log("req.isAuthenticated()",req.isAuthenticated());
 
    if (req.isAuthenticated())
        
        return next();
         
    res.redirect('/signin');
 
}

module.exports = router;
