import React from 'react'

export const EditableTitle = ({ placeholder, onChange, value }) => {
  return (
    <input
      autoFocus
      placeholder={placeholder}
      value={value}
      required
      className='form-input bg-gray-50 border border-gray-300 placeholder:text-black rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-600 block w-full p-2.5'
      onChange={onChange}
    />
  )
}
