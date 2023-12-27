// import User from '../Models/Users.js';
// import connectdb from '../db/connectDB.js';

const User = require('../Models/Users.js');
const bcrypt = require('bcryptjs');


const registerUser = async(req,res)=>{
    try {
        
        const {email, password, name} = req.body;
        const user = await new User({email, password, name});
        await user.save();
        res.status(200).json({message:"User Registered Successfully"});
    } catch (error) {
        console.log(error);
        const message = error._message;
        res.status(500).json({message:message});
    }
}

const loginUser = async (req,res)=>{
    try {
        const email= req.body?.email;
        const password= req.body?.password;
        const data = await User.findOne({email});
        if(!data){
            res.status(404).json({message:"User Not Found"});
        }
        const isValid = await data.isValidPassword(password);
        // const isValid = await bcrypt.compare(password, data.password);
        if(!isValid){
            res.status(401).json({message:"Invalid Password"});
        }
        const token = await data.GenerateToken();
        res.status(200).json({token});
        
    } catch (error) {
        
    }
}

module.exports = {registerUser, loginUser}