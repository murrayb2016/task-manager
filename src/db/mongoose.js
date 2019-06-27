const mongoose = require('mongoose');
const validator = require('validator');

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'; //Local host 127.0.0.1 due to syntax performance issues

mongoose.connect(connectionURL, {
    useNewUrlParser: true, 
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String, 
        required: true, 
        trim: true
    } , 
    email: {
        type: String, 
        required: true,
        trim: true, 
        lowercase: true, 
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid!');
            }
        }
    },
    age: {
        type: Number, 
        default: 0,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positive number.');
            }
        }
    }, 
    password: {
        type: String, 
        trim: true, 
        minlength: 7, 
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Cannot contain password keyword')
            }
        }
    }
});

// const me = new User({
//     name: ' Brad ',
//     email: ' Billy.Bob@gmail.com ', 
//     password: 'Password'
// });

// me.save().then(()=>{
//     console.log(me);
// }).catch((error)=>{
//     console.log('Error'+ error);
// });

const Task = mongoose.model('Task', {
    description: {
        type: String, 
        trim: true, 
        required: true
    }, 
    completed: {
        type: Boolean,
        default: false
    }
});

const myTask = new Task({
    description: 'Fix Boat', 
})

myTask.save().then(()=>{
    console.log(myTask);
}).catch((error)=>{
    console.log(error);
});