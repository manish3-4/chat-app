import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authroutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.post("/", (req, res) => {
    //root route http://localhost:5000/
    res.send("hello world!");
});

app.use(express.json()); //to parse the  json data
app.use(cookieParser()); //to parse the  cookies


app.use("/api/auth", authroutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);



app.listen(PORT, ()=> 
{
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`);

});