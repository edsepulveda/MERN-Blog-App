import React from 'react'

export const Button = ({ children, type }) => {
  return (
    <button
      className='inline-block shrink-0 mt-4 rounded-md border border-emerald-600 bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-800 focus:outline-none focus:ring active:ring-emerald-500'
      type={type}
    >
      {children}
    </button>
  )
}
