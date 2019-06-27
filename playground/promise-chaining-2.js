require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5d14dff3659cc83d1824d30c').then((res)=>{
//     return Task.countDocuments({completed: false});
// }).then((count)=>{
//     console.log(count);
// }).catch((e)=>{
//     console.log(e);
// }); 

const DeleteTaskAndCount = async (id)=>{
    const deleteTask = await Task.findByIdAndDelete(id);
    const incompleteTaskCount = await Task.countDocuments({completed:false}); 

    return incompleteTaskCount; 
};

DeleteTaskAndCount('5d14fcc36943122b5cc3c5d2').then((count)=>{
    console.log(count);
}).catch((error)=>{
    console.log(error);
});