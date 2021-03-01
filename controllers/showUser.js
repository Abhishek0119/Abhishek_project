const User = require('../database/models/user');



module.exports = async (req,res)=>{
    const allusers = await User.find({});
    res.json(allusers);
}