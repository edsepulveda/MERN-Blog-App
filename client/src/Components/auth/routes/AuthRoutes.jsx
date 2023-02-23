import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../../Home'
import { Navbar } from '../../Navbar'
import { MainRoutes } from '../../router/MainRoutes'
import { LoginContext } from '../context/LoginContext'
import { Register, Login } from '../index'

export const AuthRoutes = () => {
  // Validate if the user is logged in [boilerplate code for now]
  // const userisLogged = false
  const { user } = useContext(LoginContext)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={!user ? <Login /> : <Home />} />
        <Route exact path='/register' element={!user ? <Register /> : <Home />} />

        <Route path='/*' element={<MainRoutes />} />
      </Routes>
    </>
  )
}
