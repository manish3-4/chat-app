import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";

const useSignup = () => {
  const [loading, setloading] = useState(false);
  const {setAuthUser} = useAuthContext;

  const signup = async({inputs}) => {
    const {fullname, username, password, confirmpassword, gender} = inputs;
   

   const success = handleInputErrors({fullname, username, password, confirmpassword, gender});
    if (!success) return;
    setloading(true);
    try {
        const res = await fetch("/api/auth/signup",
            {
                method : "POST",
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify({ fullname, username, password, confirmpassword, gender })
            }
         );

        const data = await res.json();
        

        //localstorage
        localStorage.setItem("chat-app", JSON.stringify(data))
        setAuthUser(data);
        if(data.error){
            throw new Error(data.error);
            
        }
        // context
        if(data.status === 400){
            toast.error(data.message);
        }
        
        

        if (data.status === 201 ) {
            toast.success("Signup Successfull");
            setloading(false);
        }

        
    } catch (error) {
        toast.error(error.message);
    } finally {
        setloading(false);
    }
  };
  return { loading, signup };
}

export default useSignup;

function handleInputErrors({fullname,username, password, confirmpassword, gender}) {
    if(!fullname || !username || !password || !confirmpassword || !gender) {
        toast.error('Please fill all fields')
        return false
    }

    if(password !== confirmpassword) {
        toast.error('Passwords do not match')
        return false
    }

    if(password.length < 6){
        toast.error('Password must be at least 6 characters')
        return false;
    }

    return true;
}