import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authroutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

app.post("/", (req, res) => {
    //root route http://localhost:3000/
    res.send("hello world!");
});

app.use(express.json()); //to parse the  json data
app.use(cookieParser()); //to parse the  cookies


app.use("/api/auth", authroutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})


server.listen(PORT, ()=> 
{
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`);

});