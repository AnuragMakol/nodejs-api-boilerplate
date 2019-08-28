var express = require('express');
var router = express.Router();
var controllers = require('./app/controllers');

//     ____              __           
//    / __ \____  __  __/ /____  _____
//   / /_/ / __ \/ / / / __/ _ \/ ___/
//  / _, _/ /_/ / /_/ / /_/  __(__  ) 
// /_/ |_|\____/\__,_/\__/\___/____/  
                                   
router.get('/', controllers.UserController.welcome);
router.post('/user/login', controllers.UserController.login);
router.post('/user/register', controllers.UserController.register);
router.post('/user/verifyToken', controllers.UserController.verifyToken);

module.exports = router;