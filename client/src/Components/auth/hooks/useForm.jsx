import axios from 'axios'
import { useState } from 'react'
import { FormContext } from '../context/FormContext'

function Form ({ children, formInitalValues, endpoint }) {
  const [form, setForm] = useState(formInitalValues)

  const handleFormChange = (e) => {
    const { name, value } = e.target

    const clonedForm = { ...form, [name]: value }

    console.log('Form has changed', clonedForm)
    setForm(clonedForm)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const resp = await axios.post(endpoint, form)
      console.log(resp.data)
      setForm(formInitalValues)
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className='mt-8 grid grid-cols-6 gap-6' autoComplete='off'>
        <FormContext.Provider value={{ form, handleFormChange }}>
          {children}
        </FormContext.Provider>
      </form>
    </>
  )
}

export default Form
