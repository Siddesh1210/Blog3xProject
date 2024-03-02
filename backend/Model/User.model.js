import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unqiue:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    blog:{
        type:Array,
        default:[]
    }
})

userSchema.pre('save', async function(next) {
    const user = this;

    // Check if the password field is modified
    if (user.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, salt);
        user.password = hashPassword;
    }

    next();
});

const User = mongoose.model('User',userSchema);
export default User;