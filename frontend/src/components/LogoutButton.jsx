import {BiLogOut} from 'react-icons/bi'
import useLogout from '../hooks/useLogout.js'
const LogoutButton = () => {
  const {loading, logout} = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut className="w-6 h-6 text-white cursor-pointer" 
        onClick= {logout}
        />
        // <button onClick={logout}>Logout</button>
      ) : (
        <span className='loading loading-spinner' />
      )}
    </div>
  )
}

export default LogoutButton