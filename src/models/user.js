const mongoose = require('mongoose');
const validator = require('validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        trim: true
    } , 
    email: {
        type: String, 
        required: true,
        trim: true, 
        unique: true, 
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
    tokens:[
        {
            token: {
                type: String, 
                required: true
            }
        }
    ],
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

userSchema.methods.generateAuthToken = async function (){ //instance method
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse');

    user.tokens = user.tokens.concat({token});
    await user.save();
    
    return token; 
} 

userSchema.statics.findByCredentials = async (email, password) =>  { //static method
    const user = await User.findOne({email:  email});

    if(!user){
        throw new Error('Unable to login.')
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        throw new Error('Unable to login.');
    }

    return user;
}

//Hash the plain text password before saving 
userSchema.pre('save', async function(next){
    const user = this; 
        
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;