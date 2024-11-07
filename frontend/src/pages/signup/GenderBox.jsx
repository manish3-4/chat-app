

const GenderBox = () => {
  return (
    <div className="flex">
        <div className="form-control"> 
            <label className="label gap-2 cursor-pointer">
                <span className="label-text">Male</span>
                <input type="checkbox" className="checkbox border-slate-900" name="" id="" />
            </label>
        </div>

        <div className="form-control"> 
            <label className="label gap-2 cursor-pointer">
                <span className="label-text">Female</span>
                <input type="checkbox" className="checkbox border-slate-900" name="" id="" />
            </label>
        </div>
    </div>
  )
}

export default GenderBox

// STARTER CODE FOR GENDERBOX


// const GenderBox = () => {
//     return (
//       <div className="flex">
//           <div className="form-control"> 
//               <label className="label gap-2 cursor-pointer">
//                   <span className="label-text">Male</span>
//                   <input type="checkbox" className="checkbox border-slate-900" name="" id="" />
//               </label>
//           </div>
  
//           <div className="form-control"> 
//               <label className="label gap-2 cursor-pointer">
//                   <span className="label-text">Female</span>
//                   <input type="checkbox" className="checkbox border-slate-900" name="" id="" />
//               </label>
//           </div>
//       </div>
//     )
//   }
  
//   export default GenderBox
