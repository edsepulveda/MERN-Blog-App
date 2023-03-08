/* eslint-disable multiline-ternary */
import { useEffect, useState } from 'react'
import { CardContent } from './CardContent'
import axios from 'axios'

export const Cards = () => {
  const DEV_URL = 'http://localhost:4000/posts'
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const resp = await axios.get(DEV_URL)
    const data = await resp.data
    console.log(data)
    setPosts(data)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
      <h1 className='text-center mb-10 text-2xl lg:text-4xl font-extrabold uppercase text-white'>
        Latest Blogs
      </h1>
      <article className='p-5 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10'>
        {posts.length > 0 ? (
          posts.map((post) => <CardContent key={post._id} {...post} />)
        ) : (
          <h1 className='text-center'>No Posts Found</h1>
        )}
      </article>
    </div>
  )
}
