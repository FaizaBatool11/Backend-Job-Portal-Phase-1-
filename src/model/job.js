import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  company: {
    type: String,
  },
  location: {
    type: String,
  },
  type: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Internship', 'Remote', 'Contract'],
    default: 'Full-time'
  },
  salary: {
    type: Number,
  },
  description: {
    type: String,
  },
  skills: {
    type: [String],
    default: []
  },
  responsibilities: {
    type: [String],
    default: []
  },
  requirements: {
    type: [String],
    default: []
  },
  benefits: {
    type: [String],
    default: []
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  isHot: {
    type: Boolean,
    default: false
  },
  isSaved: {
    type: Boolean,
    default: false
  }
}, { timestamps: true }); //timestamp generate created at, posted at
const job = mongoose.model('job', jobSchema);
export default job;