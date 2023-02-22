import axios from 'axios'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { FormContext } from '../context/FormContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Form ({ children, formInitalValues, endpoint }) {
  const [form, setForm] = useState(formInitalValues)
  // const navigate = useNavigate()

  const handleFormChange = (e) => {
    const { name, value } = e.target

    const clonedForm = { ...form, [name]: value }
    setForm(clonedForm)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const resp = await axios.post(endpoint, form)
      setForm(formInitalValues)
      // if (resp.status === 200) {
      //   if (window.location.pathname === '/register') {
      //     navigate('/login')
      //   } else if (window.location.pathname === '/login') {
      //     navigate('/')
      //   }
      // }
      toast.success(resp.data)
    } catch (err) {
      console.error(err)
      toast.error(err)
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='mt-8 grid grid-cols-6 gap-6'
        autoComplete='off'
      >
        <FormContext.Provider value={{ form, handleFormChange }}>
          {children}
        </FormContext.Provider>
      </form>
      <ToastContainer />
    </>
  )
}

export default Form
