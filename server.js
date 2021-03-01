/*const path = require('path');
const serveImageFile=require('./index');*/
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressSession= require('express-session');
const connectMongo = require('connect-mongo');
const morgan = require('morgan');
/*const createUserController= require('./controllers/createUser');
const storeUserController = require('./controllers/storeUser');
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser');
const showUserController = require('./controllers/showUser');
const logoutController = require('./controllers/logout');*/
const route = require('./routes');
// start a express app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
mongoose.connect('mongodb://localhost/ABHISHEK_PROJECT',{ useNewUrlParser: true,useUnifiedTopology: true  });
const mongoStore = connectMongo(expressSession);
app.use(expressSession({
   secret:'secret',
   resave: true,
    saveUninitialized: true,
    store: new mongoStore({
       mongooseConnection: mongoose.connection
    })
}))
app.use(morgan('dev'));
//app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',route);

/*const auth = require('./middleware/auth');
const redirectifAuthenticated = require('./middleware/redirectifAuthenticated');*/
/*app.get('/showuser',auth,showUserController);
app.get('/',(request,response)=>{
  // console.log(path.resolve(__dirname,'login.html'));
    response.send("This is the home page");
  /// response.sendFile(path.resolve(__dirname,'login.html'));
})

app.get('/login',redirectifAuthenticated,(request,response)=>{
   response.sendFile(path.resolve(__dirname,'login.html')); 
})
app.get('/auth/register',redirectifAuthenticated,createUserController);
app.get('/Registration',(request,response)=>{
   console.log(path.resolve(__dirname,'Registration.html'));
   response.sendFile(path.resolve(__dirname,'Registration.html'));
})
app.get('/Admin',(request,response)=>{
   response.sendFile(path.resolve(__dirname,'Admin.html'));
})
app.post('/users/login',redirectifAuthenticated,loginUserController);
app.get('/logout',(request,response)=>{
   response.sendFile(path.resolve(__dirname,'logout.html'));
});
app.get('/auth/logout',logoutController)
app.get('/auth/login',redirectifAuthenticated,loginController);
app.get('/img/person.png',(request,response)=>{
   serveImageFile(response,"/img/person.png");
})
app.post('/users/register',redirectifAuthenticated,storeUserController)*/

app.listen(process.env.PORT,()=>{
 console.log('App is running on the port 3000');
});