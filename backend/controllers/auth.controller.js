import User from "../models/user.model.js";
import  bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async(req, res) => {
    try {
        const {fullname, username, password, confirmpassword, gender} = req.body;

        if(password !== confirmpassword){
            return res.status(400).json({message: "Passwords do not match."})
        }

        const user = await  User.findOne({username});
        if(user){
            return res.status(400).json({message: "Username already exists."});
        }
        //Hashed password here
        const salt =  await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar-placeholder.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar-placeholder.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic

        })

        if(newUser){
            //Generate JWT token here
            generateTokenAndSetCookie(newUser._id, res);
            await  newUser.save();
        res.status(201).json({
            id:  newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            profilePic: newUser.profilePic

        });
        }else{
            res.status(400).json({message: "Failed to create user."})
        }


    } catch (error) {
        console.log("Error in Signup",error.message);
        res.status(500).json({message: "Internal Server Error in signup"});
    }
};

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user  = await User.findOne({username});
        const  isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user  || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid username or password in login."});
        }  

        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            id: user._id,
            fullname:  user.fullname,
            username: user.username,
            profilePic: user.profilePic,

        });

    } catch (error) {
        console.log("Error in Login",error.message);
        res.status(500).json({message: "Internal Server Error in login"});
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "Logged out successfully."});

    } catch (error) {
        console.log("Error in Logout",error.message);
        res.status(500).json({message: "Internal Server Error in logout"});
    }
};