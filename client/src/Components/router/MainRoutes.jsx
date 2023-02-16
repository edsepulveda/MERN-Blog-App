import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from '../../helpers/NotFound'
import { Home, Write, Contact, Navbar, Footer } from '../index'

export const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className='container'>Loading....</div>}>
        <Routes>
          <Route exact path='/' index element={<Home />} />
          <Route exact path='/write' element={<Write />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}
