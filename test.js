const mongoose = require('mongoose');
const { getMaxListeners } = require('./database/models/user');

const user = require('./database/models/user');
mongoose.connect('mongodb://localhost/test_file',{ useNewUrlParser: true,useUnifiedTopology: true  });


/*user.find({},(error,post)=>{
    console.log(error,post);
})*/
/*user.findById('60291e2dd354d341508cbac3',(error,post)=>{
    console.log(error,post);
})*/
/*user.findByIdAndUpdate('60291e2dd354d341508cbac3',{
    title:'My fifth account in the database'
},(error,post)=>{
    console.log(error,post);
})*/
user.create({
    Name:'Abhishek',
    Username : 'Abhishek_99',
     email : 'abhishektopno63@gmail.com',
     Phone_number:'9205848520',
     Address: 'cvbnm,',
     password: 'Pacifier@90'

},(error,post)=>{
     console.log(error,post);
})