import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { formatISO9075 } from 'date-fns'
import { LoginContext } from './auth/context/LoginContext'
import { MdOutlineDeleteForever, MdUpdate } from 'react-icons/md'
import { useModal } from '../helpers/useModal'
import { Modal } from '../helpers/Modal'

export const SinglePost = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useContext(LoginContext)
  const DEV_URL = `http://localhost:4000/post/${id}`
  const [singlePost, setSinglePost] = useState(null)
  const { modal, handleCancel, handleShow } = useModal()

  useEffect(() => {
    const getPosts = async () => {
      const resp = await axios.get(DEV_URL)
      const data = await resp.data
      setSinglePost(data)
    }
    getPosts()
  }, [])

  const handleDelete = async () => {
    try {
      const resp = await axios.delete(DEV_URL)
      console.log(resp.data)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='mx-auto max-w-screen-xl mt-10'>
      {modal && (
        <Modal
          isOpen={modal}
          onConfirm={handleDelete}
          onCancel={handleCancel}
        />
      )}
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
                    {singlePost.data.user === user?.username && (
                      <span className='inline-flex divide-x overflow-hidden rounded-md border w-fit'>
                        <button
                          className='text-xs font-semibold inline-flex gap-2 p-2 bg-emerald-600 text-white'
                          title='Update Post'
                        >
                          Edit{' '}
                          <MdUpdate className='self-center' color='white' />
                        </button>
                        <button
                          onClick={handleShow}
                          className='text-xs font-semibold inline-flex p-2 gap-2 bg-red-600 text-white'
                          title='Update Post'
                        >
                          Delete{' '}
                          <MdOutlineDeleteForever
                            className='self-center'
                            color='white'
                          />
                        </button>
                      </span>
                    )}
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
