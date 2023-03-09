import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { formatISO9075 } from 'date-fns'
import { Options } from '../helpers/Options'

export const SinglePost = () => {
  const { id } = useParams()
  const DEV_URL = `http://localhost:4000/post/${id}`
  const [singlePost, setSinglePost] = useState(null)

  useEffect(() => {
    const getPosts = async () => {
      const resp = await axios.get(DEV_URL)
      const data = await resp.data
      setSinglePost(data)
    }
    getPosts()
  }, [])

  return (
    <div className='mx-auto max-w-screen-xl mt-10'>
      <div className='flex flex-col justify-center items-center'>
        {singlePost && (
          <>
            <div className='p-6 lg:p-0 flex justify-center items-center my-4'>
              <img
                className='max-h-[450px] overflow-hidden object-contain'
                src={singlePost.data.photo}
                alt={singlePost.data.title}
              />
            </div>

            <section className='overflow-hidden flex flex-col'>
              <div className='p-8 md:p-12 lg:px-16 lg:py-24'>
                <div className='mx-auto max-w-xl text-left'>
                  <p className='mb-3 lg:mb-5  bg-emerald-900 text-emerald-300 text-xs font-medium px-2.5 py-0.5 rounded-full w-fit'>
                    {singlePost.data.category}
                  </p>
                  <h2 className='capitalize text-3xl font-bold leading-relaxed md:text-4xl text-white'>
                    {singlePost.data.title}
                  </h2>
                  <div className='flex flex-col lg:flex-row mt-2 md:mt-4 gap-5'>
                    <p className='text-white md:self-center'>
                      Created by:{' '}
                      <span className='uppercase text-emerald-500 font-bold'>
                        {singlePost.data.user}
                      </span>
                    </p>
                    <Options />
                  </div>
                  <p className='text-white text-xs font-semibold mt-5 lg:mt-4'>
                    {formatISO9075(new Date(singlePost.data.createdAt))}
                  </p>
                  <div
                    className='text-white mt-20'
                    dangerouslySetInnerHTML={{
                      __html: singlePost.data.description
                    }}
                  />
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  )
}
