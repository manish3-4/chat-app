// import { TbLogout2 } from "react-icons/tb";
import img from '../assets/react.svg'
const Conversation = () => {
  return (
<>
    <div className=" flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className={"avatar online"}>
            <div className="w-12 rounded-full">
                <img src={img} alt="user avaatar" />
            </div>
        </div>
    

        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className=" font-bold text-gray-200 ">John Doe</p>
                <span className="text-xl">☻</span>
            </div>
        </div>
    </div>

    <div className=" divide my-0 py-0 h-1">
    {/* <TbLogout2 /> */}
    </div>
</>  )
}

export default Conversation


// Started code
// // import { TbLogout2 } from "react-icons/tb";
// import img from '../assets/react.svg'
// const Conversation = () => {
//   return (
// <>
//     <div className=" flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//         <div className={"avatar online"}>
//             <div className="w-12 rounded-full">
//                 <img src={img} alt="user avaatar" />
//             </div>
//         </div>
    

//         <div className="flex flex-col flex-1">
//             <div className="flex gap-3 justify-between">
//                 <p className=" font-bold text-gray-200 ">John Doe</p>
//                 <span className="text-xl">☻</span>
//             </div>
//         </div>
//     </div>

//     <div className=" divide my-0 py-0 h-1">
//     {/* <TbLogout2 /> */}
//     </div>
// </>  )
// }

// export default Conversation