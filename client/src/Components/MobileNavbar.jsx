import { Disclosure } from '@headlessui/react'
import { navLinks } from '../constant/data'
import Login from '../assets/img/login.svg'
import Register from '../assets/img/register.svg'
import { NavLink } from 'react-router-dom'

export const MobileNavbar = () => {
  // Boiler Plate until we connect to our Backend
  const user = false

  return (
    <Disclosure.Panel className='md:hidden'>
      <div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
        {navLinks.map((item) => (
          <Disclosure.Button
            key={item.id}
            className='block px-3 py-2 rounded-md text-sm font-bold text-gray-300 transition-colors duration-200'
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-bold
                ${
                  isActive
                    ? 'bg-gray-800 rounded-md text-emerald-500'
                    : 'text-white'
                }`}
            >
              {item.link}
            </NavLink>
            {/* See this link only if the user is logged in */}
          </Disclosure.Button>
        ))}
      </div>

      <div className='border-t border-gray-700 pt-4 pb-3'>
        <div className='flex flex-col px-5 text-md font-bold gap-5 mb-5'>
          {!user && (
            <>
              <a className='rounded-md inline-flex justify-center text-white bg-emerald-500 py-2.5 px-3'>
                Login
                <img className='block ml-3 h-5 w-5' src={Login} />
              </a>
              <a className='rounded-md inline-flex justify-center bg-white py-2.5 px-3'>
                Register
                <img className='block ml-3 h-5 w-5' src={Register} />
              </a>
            </>
          )}

          {user && (
            <NavLink className='rounded-md inline-flex justify-center bg-white py-2.5 px-3'>
              Log Out
            </NavLink>
          )}
        </div>
      </div>
    </Disclosure.Panel>
  )
}
