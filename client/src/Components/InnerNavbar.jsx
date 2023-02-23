import Login from '../assets/img/login.svg'
import Register from '../assets/img/register.svg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from './auth/context/LoginContext'

export const InnerNavbar = () => {
  const { user, dispatch } = useContext(LoginContext)

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    console.log(user)
  }

  return (
    <div className='flex gap-4 items-center'>
      {!user
        ? (
          <>
            <Link
              className='hidden items-center rounded-md bg-emerald-500 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-700 duration-300 sm:inline-flex focus:outline-transparent focus:ring-2 focus:ring-white'
              to='/login'
            >
              Login
              <img className='hidden ml-3 h-5 w-5 md:block' src={Login} />
            </Link>
            <Link
              className='hidden rounded-md bg-white text-black font-bold px-8 py-3 text-sm font-bol sm:inline-flex focus:outline-transparent focus:ring-2 focus:ring-emerald-500'
              to='/register'
            >
              Register
              <img className='hidden ml-3 h-5 w-5 md:block' src={Register} />
            </Link>
          </>
          )
        : (
          <Link onClick={handleLogout} className='hidden rounded-md bg-white text-black font-bold px-8 py-3 text-sm font-bol sm:inline-flex focus:outline-transparent focus:ring-2 focus:ring-emerald-500'>
            Log Out
          </Link>
          )}
    </div>
  )
}
