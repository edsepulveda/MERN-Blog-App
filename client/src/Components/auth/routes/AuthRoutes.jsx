import { Route, Routes } from 'react-router-dom'
import { Home } from '../../Home'
import { Navbar } from '../../Navbar'
import { MainRoutes } from '../../router/MainRoutes'
import { Register, Login } from '../index'

export const AuthRoutes = () => {
  // Validate if the user is logged in [boilerplate code for now]
  const userisLogged = false

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={!userisLogged ? <Login /> : <Home />} />
        <Route exact path='/register' element={!userisLogged ? <Register /> : <Home />} />

        <Route path='/*' element={<MainRoutes />} />
      </Routes>
    </>
  )
}
