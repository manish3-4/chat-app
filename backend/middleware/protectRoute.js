import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
    try {
        
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({msg: 'unauthorized - no token'});
        }

        const decode = jwt.verify(token,  process.env.JWT_SECRET);

        if(!decode){
            return res.status(401).json({msg: 'unauthorized - invalid token'});
        }

        const user = await User.findById(decode.userId).select("-password");
        if(!user){
            return res.status(401).json({msg: 'unauthorized - user not found'});
        }
        req.user = user;
        next();

    } catch (error) {
        console.log("Error in protectRoute middleware", error.message);
        res.status(500).json({error: 'Error protecting route'});
    }
};

export default protectRoute;