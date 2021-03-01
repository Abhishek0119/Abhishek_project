const {Router} = require('express');
const path = require('path');
const serveImageFile=require('./index');
const createUserController= require('./controllers/createUser');
const storeUserController = require('./controllers/storeUser');
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser');
const showUserController = require('./controllers/showUser');
const logoutController = require('./controllers/logout');
const auth = require('./middleware/auth');
const redirectifAuthenticated = require('./middleware/redirectifAuthenticated');


const router = Router();
router.get('/showuser',auth,showUserController);
router.get('/',(request,response)=>{
    response.send("This is the home page");
})

router.get('/login',redirectifAuthenticated,(request,response)=>{
   response.sendFile(path.resolve(__dirname,'login.html')); 
})

router.get('/auth/register',redirectifAuthenticated,createUserController);
router.get('/Registration',(request,response)=>{
   console.log(path.resolve(__dirname,'Registration.html'));
   response.sendFile(path.resolve(__dirname,'Registration.html'));
})

router.post('/users/Userfunction',redirectifAuthenticated,loginUserController);

router.get('/logout',auth,logoutController);
router.get('/auth/login',redirectifAuthenticated,loginController);
router.get('/img/person.png',(request,response)=>{
   serveImageFile(response,"/img/person.png");
})
router.post('/users/register',redirectifAuthenticated,storeUserController);

module.exports = router;