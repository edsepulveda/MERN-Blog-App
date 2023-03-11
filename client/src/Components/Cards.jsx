/* eslint-disable multiline-ternary */
import { Loading } from '../helpers/Loading'
import { CardContent } from './CardContent'
import { getData } from './hooks/useFetch'
import { Link } from 'react-router-dom'

export const Cards = () => {
  const DEV_URL = 'http://localhost:4000/posts'

  const { posts, loading } = getData(DEV_URL)

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
      <h1 className='text-center mb-10 text-2xl lg:text-4xl font-extrabold uppercase text-white'>
        Latest Blogs
      </h1>
      {loading && <Loading />}
      <article className='p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10'>
        {posts ? (
          posts.map((post) => <CardContent key={post._id} {...post} />)
        ) : (
          <h1 className='text-center'>No Posts Found</h1>
        )}
      </article>
      {posts && (
        <div className='flex justify-center items-center mt-5 lg:mt-10'>
          <Link
            onClick={scrollTop}
            to='/posts'
            className='px-4 py-2 bg-emerald-700 font-semibold text-white rounded-md text-sm hover:bg-emerald-800 hover:cursor-pointer'
          >
            See all posts
          </Link>
        </div>
      )}
    </div>
  )
}
