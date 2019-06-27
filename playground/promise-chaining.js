require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('5d14dba4fb36391d64ca2c48', {age: 1}).then((user)=>{
    console.log(user);
    return User.countDocuments({age:1});
}).then((result) =>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
});
