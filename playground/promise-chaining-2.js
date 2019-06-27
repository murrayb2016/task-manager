require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5d14dff3659cc83d1824d30c').then((res)=>{
    return Task.countDocuments({completed: false});
}).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})