import User from "../models/user.js"
import bcrypt from "bcrypt"
const registerUser=async(req,res)=>{
    try {
        const {email,name,password}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"Email already exists, try different one."})
        }
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        const newUser=await User.create({
            name,
            email,
            password:hashedPassword
        })
        res.status(201).json({message:"Verification email sent to your email. Please check and verify your account"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
};
const loginUser=async(req,res)=>{
      try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
};
export {registerUser,loginUser}