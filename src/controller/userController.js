import { data } from "react-router-dom";
import bcrypt from 'bcrypt';
import Users from '../model/user.js';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();
export const signup = async(req, res) => {
try{
    const {firstname,lastname, email, phonenum, password, jobtitle, experience, location, skills} = req.body;
    const existingUser = await Users.findOne({email});
    console.log("Found user:", existingUser);
    if(existingUser) return res.status(409).json({mesaage: "User already exist!", data: existingUser});
    console.log("Existing user: ", existingUser);
    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = new Users({
      firstname,lastname, email, phonenum, password: hashedpassword, jobtitle, experience, location, skills
    });
    await newUser.save(); 
    console.log("User created:", newUser);
    res.status(201).json({
    message: "User creating successfully!",
    data: {firstname, email}
})
}catch(error){
    res.status(500).json({
    message: "Error creating user",
    error: error
    });
}
}

export const login = async(req , res) => {
  try{
    const {email, password} = req.body;
    // const email = req.body.email.toLowerCase();
    // const password = req.body.password;
    console.log("Email: ", email);
    console.log("password: ", password);
    
    const existingUser = await Users.findOne({email});
    console.log("Found user:", existingUser);
    if(!existingUser) return res.status(409).json({message: "Email not found"});
    console.log("Existing user: ", existingUser);
    
    const isUser = await bcrypt.compare(password, existingUser.password);
    if(!isUser) return res.status(409).json({message: "Invalid Password"});
    console.log("is user: ", isUser);
    
    const JWT_SECRET = process.env.JWT_SECRET;
    const token = jwt.sign({id: existingUser._id , email: existingUser.email}, JWT_SECRET,{ expiresIn: "1h" }); //token banany ka liya sign ka method use kar rahy hn
    console.log("Token: ", token);
    
    res.status(200).json({
       mesaage: "User Loged in Successfully!",
       data: {token, email: existingUser.email}
    })
  }catch(error){
    res.status(500).json({
       message: "Error creating user",
       error: error
    });
  }
}


// export function authMiddleware(req, res, next) {
// const authHeader = req.headers.authorization; //headers ma hum content type bataty hn json ha. authorization means token login sy generate hota ha
// if(!authHeader) 401
// const token = authHeader.split(' ')[1];
// try{
//   const decoded = jwt.verify(token, process.env.JWT_SECRET);
//   req.user = decoded; 
//   next();
// }catch()
// 403
// }