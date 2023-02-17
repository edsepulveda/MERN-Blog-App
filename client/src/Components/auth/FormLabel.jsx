import { useContext } from 'react'
import { FormContext } from './context/FormContext'

export const FormLabel = ({ label, htmlFor }) => {
  return (
    <label className='text-sm font-bold text-emerald-500' htmlFor={htmlFor}>
      {label}
    </label>
  )
}

export const InputLabel = ({ type, id, name }) => {
  const formContext = useContext(FormContext)
  const { form, handleFormChange } = formContext

  return (
    <input
      type={type}
      id={id}
      name={name}
      value={form[name]}
      onChange={handleFormChange}
      required
      className='form-input mt-4 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
    />
  )
}
