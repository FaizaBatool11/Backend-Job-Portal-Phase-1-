import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    phonenum: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    jobtitle: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
},{timestamps : true});
const Users = mongoose.model('users',userSchema);
export default Users;

