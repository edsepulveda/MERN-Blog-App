import { Route, Routes } from 'react-router-dom'
import { NotFound } from '../../helpers/NotFound'
import { Home, Write, Footer } from '../index'

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' index element={<Home />} />
        <Route exact path='/write' element={<Write />} />
        <Route exact path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
