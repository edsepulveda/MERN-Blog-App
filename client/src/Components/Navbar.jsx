import { Disclosure } from '@headlessui/react'
import Logo from '../assets/img/logo.svg'
import { navLinks } from '../constant/data'
import { InnerNavbar } from './InnerNavbar'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { HiXMark } from 'react-icons/hi2'
import { MobileNavbar } from './MobileNavbar'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header
      id='home'
      aria-label='site-navbar'
      className='shadow-md'
    >
      <div>
        {/* This Disclosure from HeadlessUI allow us to get ride of an useState */}
        <Disclosure as='nav' className='bg-gray-800'>
          {({ open }) => {
            return (
              <div className='mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8'>
                <div className='flex h-20 justify-between items-center'>
                  <div className='flex items-center'>
                    <div className='flex-shrink'>
                      <img
                        className='h-8 w-8 text-emerald-500'
                        src={Logo}
                        alt='SVG Blog Logo'
                      />
                    </div>

                    <div className='hidden md:block'>
                      <div className='ml-10 flex items-stretch space-x-2'>
                        {navLinks.map((item) => (
                          <NavLink
                            className={({
                              isActive
                            }) => `px-3 py-2 rounded-md text-sm font-bold
                            ${
                              isActive
                                ? 'bg-gray-800 rounded-md text-emerald-500'
                                : 'text-white'
                            }`}
                            key={item.id}
                            to={item.path}
                          >
                            {item.link}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <InnerNavbar />
                  <div className='-mr-2 flex md:hidden'>
                    <Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white '>
                      <span className='sr-only'>Main Menu</span>
                      {open
                        ? (
                          <HiXMark className='block h-6 w-6' aria-hidden='true' />
                          )
                        : (
                          <HiOutlineMenuAlt4
                            className='block h-6 w-6'
                            aria-hidden='true'
                          />
                          )}
                    </Disclosure.Button>
                  </div>
                </div>
                <MobileNavbar />
              </div>
            )
          }}
        </Disclosure>
      </div>
    </header>
  )
}
