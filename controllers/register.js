var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
    response.render("register/register");
});
router.post('/register', function(request, response){

	var user = {
		username: request.body.username,
		password: request.body.password,
		type: request.params.type
	};

	userModel.insert1(user,function(status){
        if(status){
			response.redirect('/user/userlist');
		}else{
			response.redirect('/user/edit/');
		}

    });
	
});

module.exports = router;