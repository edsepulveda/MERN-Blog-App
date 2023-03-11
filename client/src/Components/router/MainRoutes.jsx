import { Route, Routes } from 'react-router-dom'
import { NotFound } from '../../helpers/NotFound'
import { Home, CreatePost, Footer, Posts, SinglePost } from '../index'

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' index element={<Home />} />
        <Route exact path='/CreatePost' element={<CreatePost />} />
        <Route exact path='/posts' element={<Posts />} />
        <Route exact path='*' element={<NotFound />} />
        <Route exact path='/post/:id' element={<SinglePost />} />
      </Routes>
      <Footer />
    </>
  )
}
