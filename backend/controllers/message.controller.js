import Conversation from "../models/conversation.model.js";
import Message  from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const {id : receiverId} = req.params;
        const senderId =  req.user._id;

        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            }
        });

        if(!conversation){
            conversation =  await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        let newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        //Socket IO FUNCTIONALITY WILL GO HERE


        // await conversation.save();
        // await newMessage.save();

        //this will run parallely
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(200).json({newMessage});

    }

     catch (error) {
        console.log("ERROR IN SENDMESSAGE",error.message);
        res.status(500).json({error: "server error in  sending message"});

    }
}

export  const getMessage = async (req, res) => {
    try {
        
        const {id : userToChatId} = req.params;
        const senderId =  req.user._id;

        const  conversation = await Conversation.findOne({
            participants: {
                $all : [senderId, userToChatId] 
            }
        }).populate("messages");

        if(!conversation) return res.status(200).json([]);

        res.status(200).json(conversation.messages);


    } catch (error) {
        console.log("ERROR IN GETMESSAGE",error.message);
        res.status(500).json({error: "server error in  getting message"});
    }
}
