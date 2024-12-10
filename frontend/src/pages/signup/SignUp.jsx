import { Link } from "react-router-dom";
import GenderBox from "./GenderBox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";


const SignUp = () => {
    const [ inputs, setInputs] = useState({
      fullname: "",
      username: "",
      password: "",
      confirmpassword:"",
      gender: ""
      });

    const {loading, signup}  = useSignup();
    
    const handleCheckboxChange = (gender) => {
      setInputs((prev) => ({ ...prev, gender }));
    }
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      await signup({inputs});
      // console.log(inputs);
    }
    
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg
      bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp <span className="text-blue-500">Chat App</span>
        </h1>

        <form id="" name="" onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input type="text" placeholder="John Doe" 
              className="w-full input input-bordered h-10"
              value={inputs.fullname}
              onChange={(e) => setInputs({...inputs, fullname: e.target.value})}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="JohnDoe" 
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) => setInputs({...inputs, username: e.target.value})} />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input 
              type="password" 
              placeholder="Enter Password" 
              className="w-full input input-bordered h-10" 
              value={inputs.password}
              onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
          </div>
          
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              className="w-full input input-bordered h-10"
              value={inputs.confirmpassword}
              onChange={(e) => setInputs({...inputs, confirmpassword: e.target.value})} />
          </div>

          {/* GENDER CHECK BOX GOES HERE */}
          <GenderBox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender} />

          <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mb-1 inline-block">
            Already have an account?
          </Link>
          
          <div>
          <button className="btn btn-block btn-sm mt-2" disabled={loading}>
            {
              loading ? <span className="loading loading-spinner"></span> : 'Sign Up'
            }
          </button>
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
