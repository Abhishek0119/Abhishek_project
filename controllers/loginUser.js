const bcrypt= require('bcrypt');
const User = require('../database/models/user');
const path = require('path');

module.exports =(req,res)=>{

    const {Email,Password} = req.body;
       console.log(req.body);
    User.findOne({Email},(error,user)=>{
        console.log(user);
           if(user){
               bcrypt.compare(Password,user.Password,(error,same)=>{
                       if(same){
                            req.session.userId = user._id;
                         
                          // res.redirect('/showuser');
                          res.sendFile(path.resolve(__dirname,'Userfunction.html'));
                       }
                       else
                       {
                           //res.redirect('/auth/login');
                           res.send('Invalid Password');
                       }
               })
           }
           else{
               //return res.redirect('/auth/login');
               return res.send('NO SUCH USER EXIST');
            
           }
    })
    
}