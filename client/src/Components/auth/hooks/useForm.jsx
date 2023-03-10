import axios from 'axios'
import { useContext, useState } from 'react'
import { FormContext } from '../context/FormContext'
import { LoginContext } from '../context/LoginContext'

function Form ({ children, formInitalValues, formtype }) {
  const [form, setForm] = useState(formInitalValues)
  const { dispatch } = useContext(LoginContext)

  const REGISTER_FORM_ENDPOINT = 'https://mern-blog-app-express.onrender.com/register'
  const LOGIN_FORM_ENDPOINT = 'https://mern-blog-app-express.onrender.com/login'

  const handleFormChange = (e) => {
    const { name, value } = e.target

    const clonedForm = { ...form, [name]: value }
    setForm(clonedForm)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const endpoint =
      formtype === 'register' ? REGISTER_FORM_ENDPOINT : LOGIN_FORM_ENDPOINT
    try {
      dispatch({ type: 'LOGIN_START' })
      const resp = await axios.post(endpoint, form)
      setForm(formInitalValues)
      dispatch({ type: 'LOGIN_SUCCESS', payload: resp.data })
    } catch (err) {
      dispatch({ type: 'LOGIN_ERROR' })
      console.error(err)
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='mt-8 grid gap-6'
        autoComplete='off'
      >
        <FormContext.Provider value={{ form, handleFormChange }}>
          {children}
        </FormContext.Provider>
      </form>
    </>
  )
}

export default Form
