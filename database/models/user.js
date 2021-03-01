const bcrypt = require('bcrypt');
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
     Name:{
          type:String,
          required: true
     },
     Username :{ 
        type:String,
        required:true,
        unique:true
     },
     Email : {
          type:String,
          required:true,
          unique:true
     },
     Phone_number:{
          type:String,
          required:true,
          unique:true
     },
     Address:{
          type:String,
          required:true
     },
     Password:{
          type:String,
          required:true,
          unique:true
     }
})
UserSchema.pre('save',function(next){
     const user= this
     bcrypt.hash(user.Password,10,function(error,encrypted){
      console.log(error,encrypted);
        user.Password= encrypted;
        next();
     })
  });

const User = mongoose.model('User',UserSchema);


module.exports = User;