import job from "../model/job.js"

export const getAllJobs = async(req , res) => {
    try{
        const getjobs = await job.find();
        res.send(getjobs);
    }catch(error){
        res.status(500).json({
        message: "Error Fetching Jobs",
        error: error
    });
    }
}

export const createJobs = async(req , res) => {
    try{
        const {title, company, location, type, salary, description, skills, responsibilities, requirements, benefits } = req.body;
        const newJob = new job({
            title, company, location, type, salary, description, skills, responsibilities, requirements, benefits
        })
        await newJob.save();
        res.status(201).json({
        message: "Job Added Successfully!",
        data: newJob
        });
    }catch(error){
        res.status(500).json({
        message: "Error creating job",
        error: error
    });
    }
}

export const deleteJobs = async(req, res) => {
try{
    const id = req.params.id;
    const deletejob =await job.findByIdAndDelete(id);
    res.status(201).json({
    message: "Job Deleted Successfully!",
    data: deletejob
});
}catch(error){
   res.status(500).json({
   message: "Error deleting job",
   error: error
});
}
}

export const updateJobs = async(req, res) => {
try{
    const id = req.params.id;
    const update = req.body;
    const {title, company, location, type, salary} = req.body;
    const updatejob =await job.findByIdAndUpdate(id, update,{new: true});
    res.status(201).json({
    message: "Job Updated Successfully!",
    data: updatejob
});
}catch(error){
    res.status(500).json({
    message: "Error updated job",
    error: error
});
}
}

export const getJobbyId = async(req , res) => {
try{
    const id = req.params.id;
    const jobdetails = await job.findById(id);
    if (!jobdetails) {
      return res.status(404).json({
      message: "Job not found"
    });
    }
    res.status(200).json({
      message: "Job fetched successfully",
      data: jobdetails
    });
}catch(error){
    res.status(500).json({
      message: "Error fetching job by ID",
      error: error
    });
}
}