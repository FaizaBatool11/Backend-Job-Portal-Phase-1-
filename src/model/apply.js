import mongoose from "mongoose";
const applyjobSchema = new mongoose.Schema({
    fullname: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    phonenum: {
        type: Number,
    },
    resume: {
        type: String,
    },
    coverletter: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    github: {
        type: String,
    },
    portfolio: {
        type: String,
    },
    startdate: {
        type: Date,
    },
    question: {
        type: String,
    },
    willingToRelocate: {
        type: Boolean,
    },
}, { timestamps: true }); //timestamp generate created at, posted at
const apply = mongoose.model('apply', applyjobSchema);
export default apply;