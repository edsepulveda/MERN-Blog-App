import { useState } from 'react'
import { FormContext } from '../context/FormContext'

function Form ({ children, formInitalValues }) {
  const [form, setForm] = useState(formInitalValues)

  const handleFormChange = (e) => {
    const { name, value } = e.target

    const clonedForm = { ...form, [name]: value }

    console.log('Form has changed', clonedForm)
    setForm(clonedForm)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setForm(formInitalValues)
    console.log(form)
  }
  return (
    <>
      <form onSubmit={handleSubmit} className='mt-8 grid grid-cols-6 gap-6'>
        <FormContext.Provider value={{ form, handleFormChange }}>
          {children}
        </FormContext.Provider>
      </form>
    </>
  )
}

export default Form
