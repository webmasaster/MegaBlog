import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn

// import React from 'react'
// import { useDispatch } from 'react-redux'
// import authService from '../../appwrite/auth'
// import { logout } from '../../store/authSlice'

// function LogoutBtn() {
//   const dispatch = useDispatch()

//   const logoutHandler = () => {
//     authService.logout().then(() => {
//       dispatch(logout())
//     })
//   }

//   return (
//     <button
//       onClick={logoutHandler}
//       className="
//         inline-block px-5 py-2
//         text-sm font-semibold text-blue-700
//         bg-blue-100 rounded-full
//         shadow-sm
//         transition
//         duration-200
//         hover:bg-blue-200 hover:text-blue-800 hover:shadow-md
//         focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1
//         cursor-pointer
//       "
//       aria-label="Logout"
//       type="button"
//     >
//       Logout
//     </button>
//   )
// }

// export default LogoutBtn
