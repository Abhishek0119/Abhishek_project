const fs=require('fs');

module.exports =(req,res) =>{
    console.log(req.session.registrationErrors);
    const Registration = fs.readFileSync('Registration.html');
    return res.end(Registration);
}