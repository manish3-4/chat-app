import { useState } from 'react';
import { BsSend } from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage';
const MessageInput = () => {
    const [message, setMessage] = useState('');
    const { loading, sendMessage } = useSendMessage();
    const handleSubmit = async (e) => {
        // console.log("hiiii")
        e.preventDefault();
        if(!message) return;
        await sendMessage(message);
        setMessage("");
    };
  return (
    <form action="" className=" px-4 my-3" onSubmit={handleSubmit}>
        <div className=" w-full relative">
            <input type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-900
            border-gray-600 text-white " value={message}
            placeholder=" Send a message" name="" id="" onChange={(e)=> setMessage(e.target.value)} />
            <button type="submit" className=" mr-2 absolute inset-y-0 end-0 flex items-center pe-3 ">
                {loading ? <div className=' loading loading-spinner'></div> : <BsSend/> }
            </button>
        </div>
    </form>
)
}

export default MessageInput;


// CODE
// import { BsSend } from 'react-icons/bs'
// const MessageInput = () => {
//   return (
//     <form action="" className=" px-4 my-3">
//         <div className=" w-full relative">
//             <input type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-900
//             border-gray-600 text-white "
//             placeholder=" Send a message" name="" id="" />
//             <button type="submit" className=" mr-2 absolute inset-y-0 end-0 flex items-center pe-3 ">
//                 <BsSend />
//             </button>
//         </div>
//     </form>
// )
// }

// export default MessageInput;