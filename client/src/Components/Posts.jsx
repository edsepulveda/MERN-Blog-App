/* eslint-disable multiline-ternary */
import { NewTitle } from '../utils/ChangeTitle'
import { CardContent } from './CardContent'
import Search from '../assets/img/search.svg'
import { getData } from './hooks/useFetch'

export const Posts = () => {
  NewTitle('Blog | All Posts')

  const DEV_URL = 'http://localhost:4000/all-posts'
  const posts = getData(DEV_URL)

  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
      <h1 className='text-center mb-10 text-2xl lg:text-4xl font-extrabold uppercase text-white'>
        All Posts
      </h1>
      <div className='flex flex-col gap-y-2 mt-10 relative mb-20'>
        <div className='relative'>
          <img
            src={Search}
            alt='SVG Search Icon'
            className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6'
          />
          <input
            type='text'
            placeholder='Find an Interesting Article'
            className='placeholder:font-extrabold font-semibold text-black placeholder:text-gray-300 placeholder:text-sm rounded-md pl-12 pr-3 w-full py-3 focus:outline-none focus:ring-1 focus:ring-emerald-500'
          />
        </div>
        <button className='group w-full bg-emerald-500 hover:bg-emerald-700 text-white font-semibold rounded-md px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2'>
          Search
        </button>
      </div>
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
