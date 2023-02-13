import Login from '../assets/img/login.svg'
import Register from '../assets/img/register.svg'

export const InnerNavbar = () => {
  return (
    <div className='flex gap-4 items-center'>
      <a className='hidden items-center rounded-md bg-emerald-500 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-700 duration-300 sm:inline-flex' href="#">
        Login
        <img className='hidden ml-3 h-5 w-5 md:block' src={Login}/>
      </a>
      <a className='hidden rounded-md bg-white text-black font-bold px-8 py-3 text-sm font-bol sm:inline-flex' href="#">
        Register
        <img className='hidden ml-3 h-5 w-5 md:block' src={Register}/>
      </a>
    </div>
  )
}
