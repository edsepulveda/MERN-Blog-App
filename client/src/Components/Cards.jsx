/* eslint-disable multiline-ternary */
import { CardContent } from './CardContent'
import { getData } from './hooks/useFetch'

export const Cards = () => {
  const DEV_URL = 'http://localhost:4000/posts'

  const posts = getData(DEV_URL)

  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
      <h1 className='text-center mb-10 text-2xl lg:text-4xl font-extrabold uppercase text-white'>
        Latest Blogs
      </h1>
      <article className='p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10'>
        {posts.length > 0 ? (
          posts.map((post) => <CardContent key={post._id} {...post} />)
        ) : (
          <h1 className='text-center'>No Posts Found</h1>
        )}
      </article>
    </div>
  )
}
