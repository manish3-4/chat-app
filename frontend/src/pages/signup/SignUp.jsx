import GenderBox from "./GenderBox";


const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg
      bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp <span className="text-blue-500">Chat App</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10" />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="JohnDoe" className="w-full input input-bordered h-10" />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input 
              type="text" 
              placeholder="Enter Password" 
              className="w-full input input-bordered h-10" />
          </div>
          
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input 
              type="text" 
              placeholder="Confirm Password" 
              className="w-full input input-bordered h-10" />
          </div>

          {/* GENDER CHECK BOX GOES HERE */}
          <GenderBox/>

          <a href="#" className="text-sm hover:underline hover:text-blue-600 mb-1 inline-block">
            Already have an account?
          </a>
          <div>
          <button className="btn btn-block btn-sm mt-2">SignUp</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default SignUp;


// STARTER  CODE FOR SignUp

// import GenderBox from "./GenderBox";


// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg
//       bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           SignUp <span className="text-blue-500">Chat App</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10" />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input type="text" placeholder="JohnDoe" className="w-full input input-bordered h-10" />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input 
//               type="text" 
//               placeholder="Enter Password" 
//               className="w-full input input-bordered h-10" />
//           </div>
          
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input 
//               type="text" 
//               placeholder="Confirm Password" 
//               className="w-full input input-bordered h-10" />
//           </div>

//           {/* GENDER CHECK BOX GOES HERE */}
//           <GenderBox/>

//           <a href="#" className="text-sm hover:underline hover:text-blue-600 mb-1 inline-block">
//             Already have an account?
//           </a>
//           <div>
//           <button className="btn btn-block btn-sm mt-2">SignUp</button>
//           </div>
//         </form>
//       </div>

//     </div>
//   )
// }

// export default SignUp;
