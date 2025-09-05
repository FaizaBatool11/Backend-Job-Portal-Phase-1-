import apply from "../model/apply.js";
export const createJobApplication = async(req , res) => {
    try{
        const { fullname, email, phonenum, resume, coverletter, linkedin, github, portfolio, startdate, question }= req.body;
        const newapply = new apply({
            fullname, email, phonenum, resume, coverletter, linkedin, github, portfolio, startdate, question
        })
        await newapply.save();
        res.status(201).json({
        message: "Job Added Successfully!",
        data: newapply
        });
    }catch(error){
        console.error("Job application creation error:", error);
        res.status(500).json({
        message: "Error creating job",
        error: error
    });
    }
}