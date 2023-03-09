import { Route, Routes } from 'react-router-dom'
import { NotFound } from '../../helpers/NotFound'
import { Home, Write, Footer, Posts, SinglePost } from '../index'

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' index element={<Home />} />
        <Route exact path='/write' element={<Write />} />
        <Route exact path='/posts' element={<Posts />} />
        <Route exact path='*' element={<NotFound />} />
        <Route exact path='/post/:id' element={<SinglePost />} />
      </Routes>
      <Footer />
    </>
  )
}
