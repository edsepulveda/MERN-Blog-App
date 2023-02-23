/* eslint-disable multiline-ternary */
import Login from '../assets/img/login.svg'
import Register from '../assets/img/register.svg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from './auth/context/LoginContext'

export const InnerNavbar = () => {
  const { user, dispatch } = useContext(LoginContext)

  const PROFILE_PICTURE = 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80'

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    console.log(user)
  }

  return (
    <div className='flex gap-4 items-center'>
      {!user ? (
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
      ) : (
        <>
          <div className='hidden md:flex md:flex-row items-center'>
            <img src={PROFILE_PICTURE} className='w-10 h-10 rounded-full mr-6' alt={`${user.username} Profile picture`} />
            <p className='text-sm text-white font-bold'>
              Welcome,{' '}
              <span className='text-emerald-600 uppercase'>
                {user?.username}
              </span>
            </p>
          </div>
          <Link
            onClick={handleLogout}
            className='hidden rounded-md bg-white text-black font-bold px-8 py-3 text-sm font-bol sm:inline-flex focus:outline-transparent focus:ring-2 focus:ring-emerald-500'
          >
            Log Out
          </Link>
        </>
      )}
    </div>
  )
}
