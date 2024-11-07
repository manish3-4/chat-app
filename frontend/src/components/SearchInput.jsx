import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
  return (
    <div>
        <form className="flex mt-2">
            <input type="text" name="" id=""
            placeholder="Search..." className=" input input-bordered rounded-full"/>
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