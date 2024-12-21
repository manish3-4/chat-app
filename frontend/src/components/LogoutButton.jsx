import {BiLogOut} from 'react-icons/bi'
import useLogout from '../hooks/useLogout.js'
import { useAuthContext } from '../context/AuthContext.jsx';
const LogoutButton = () => {
  const {loading, logout} = useLogout();

  const {authUser} = useAuthContext();

  return (
    <div className='flex flex-row-reverse justify-between mt-2 -mb-3'>
      <div className="mt-1">
      {!loading ? (
        <BiLogOut className="w-6 h-6 text-white cursor-pointer" 
        onClick= {logout}
        />
        // <button onClick={logout}>Logout</button>
      ) : (
        <span className='loading loading-spinner' />
      )}
      </div>
      <div className='flex mt-auto'>
      <img className="w-8 mx-3  items-end" src={authUser.profilePic} alt="pic"></img>
      <p className='mx-2 my-auto  '>{authUser?.fullname?.toUpperCase()} </p>

    </div>
    </div>
  )
}

export default LogoutButton