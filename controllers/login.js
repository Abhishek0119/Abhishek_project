const fs = require('fs');


module.exports = (req,res)=>{
    const login = fs.readFileSync('login.html');
    return res.end(login);
}