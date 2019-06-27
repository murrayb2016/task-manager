const mongoose = require('mongoose');

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'; //Local host 127.0.0.1 due to syntax performance issues

mongoose.connect(connectionURL, {
    useNewUrlParser: true, 
    useCreateIndex: true
});

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
