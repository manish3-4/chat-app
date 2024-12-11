import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../zustand/useConversation";
import useGetCoversations from './../hooks/useGetConversations'
import toast from "react-hot-toast";

const SearchInput = () => {

  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation()
  const { conversations } = useGetCoversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length<3) return toast.error('Length should be more than 3 characters')
    const conversation = conversations.find((c)=> c.fullname.toLowerCase().includes(search.toLowerCase()));

    if(conversation){
      setSelectedConversation(conversation);
      setSearch('')

    }else{
      toast.error('No such user found')
    }
  }

  return (
    <div>
        <form className="flex mt-2" name="#" id="" onSubmit={handleSubmit}>
            <input type="text" name="" id=""
            placeholder="Search..." className=" input input-bordered rounded-full"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            />
            <button type="submit" className="btn btn-circle ml-1 bg-sky-500 text-white">
                <IoSearchSharp className="h-6 w-5 outline-none" />
            </button>
            
        </form>
    </div>
  )
}

export default SearchInput

// Started code snippet
// import { IoSearchSharp } from "react-icons/io5";
// const SearchInput = () => {
//   return (
//     <div>
//         <form className="flex mt-2">
//             <input type="text" name="" id=""
//             placeholder="Search..." className="input input-bordered rounded-full"/>
//             <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//                 <IoSearchSharp className="w-6 h-6 outline-none" />
//             </button>
            
//         </form>
//     </div>
//   )
// }

// export default SearchInput