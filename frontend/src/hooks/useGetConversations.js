import { useEffect, useState } from 'react';
import toast from 'react-hot-toast'

const useGetConversations = () => {
    const [loading, setloading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setloading(true);
            try {
                const res = await fetch('/api/users');
                const data = await res.json();
                if(data.error) { 
                    throw new Error(data.error);
                }
                // console.log(data);
                setConversations(data);
                // console.log(conversations);
            } catch (error) {
                toast.error(error.message);
            }finally{
                setloading(false);
            }
        }

        getConversations();
        
    },[]);
    // console.log("Conversation :",conversations);

    return { loading, conversations };
}

export default useGetConversations;