import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../Navbar'
import { MainRoutes } from '../../router/MainRoutes'
import { Register, Login } from '../index'

export const AuthRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />

        <Route path='/*' element={<MainRoutes />} />
      </Routes>
    </>
  )
}
