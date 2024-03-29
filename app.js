//DECLARATION
var express = require('express');
var bodyParser = require('body-parser');
var expSession = require('express-session');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
var login = require('./controllers/login');
var home = require('./controllers/home');
var user = require('./controllers/user');
var register = require('./controllers/register').default;
var logout = require('./controllers/logout');
var app = express();
var Homepage=require('./controllers/Homepage');



//CONFIGURATION
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended:true}));
app.use(expSession({secret:'my top secret value', saveUninitialized:true, resave: false}));
app.use(cookieParser());
app.use('/Style', express.static('Css'));
app.use('/login', login);
app.use('/home', home);
app.use('/Homepage',Homepage);
app.use('/user', user);
app.use('/logout', logout);
app.use('/register',register);



//ROUTER
app.get('/', function(request, response){
	//response.send('index page!');
	response.render('Homepage/index');
});
app.post('/',function(request,response){
response.render('register/register');
});



//SERVER STARTUP
app.listen(3000, function(){
	console.log('server started at 3000...');
});