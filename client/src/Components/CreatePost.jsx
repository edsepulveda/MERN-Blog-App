/* eslint-disable multiline-ternary */
import { NewTitle } from '../utils/ChangeTitle'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'
import { useContext, useState } from 'react'
import { Label } from '../helpers/Label'
import { FileHandler } from '../utils/handlers'
import { Categories } from '../constant/data'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from './auth/context/LoginContext'
import { modules } from '../helpers/toolbar'
import toast, { Toaster } from 'react-hot-toast'
import { Button } from '../helpers/Button'

export const CreatePost = () => {
  NewTitle('Blog | New Post')
  const navigate = useNavigate()

  const postURL = 'http://localhost:4000/post'

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(false)
  const { user } = useContext(LoginContext)

  const { file, preview, handleFileChange, handleCancel } = FileHandler()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', title.trim())
    formData.append('description', description.trim())
    formData.append('category', category)
    formData.append('file', file)
    formData.append('user', user?.username)
    if (file) {
      try {
        setLoading(true)
        const resp = await axios.post(postURL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        if (resp.status === 200) {
          navigate('/')
        }
        console.log(resp.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    } else {
      toast.error('Please, Provide a valid Image', {
        duration: 2000,
        icon: '❌'
      })
    }
  }

  return (
    <section>
      <div className='py-8 px-4 mx-auto max-w-2xl lg:py-20 mt-20 lg:mt-24 rounded-md'>
        {preview ? (
          <div className='flex justify-center flex-col text-center text-white'>
            <span className='block text-sm font-semibold mb-2'>
              Preview Image
            </span>
            <img
              src={preview}
              className='w-64 self-center object-cover mb-10'
            />
          </div>
        ) : null}
        <h2 className='mb-4 text-3xl font-bold text-center uppercase text-white'>
          Create a Post
        </h2>
        <form
          onSubmit={handleSubmit}
          className='p-3'
          encType='multipart/form-data'
        >
          <div className='grid gap-6 sm:grid-cols-2 sm:gap-6'>
            <div className='w-full col-span-6 sm:col-span-3'>
              <Label htmlFor='title'>
                Title <span className='text-red-600'>*</span>
              </Label>
              <input
                placeholder='Title...'
                className='form-input bg-gray-50 border border-gray-300 placeholder:text-black rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-600 block w-full p-2.5'
                type='text'
                name='title'
                id='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='w-full col-span-6 sm:col-span-3'>
              <Label htmlFor='file'>
                Photo <span className='text-red-600'>*</span>
              </Label>
              <input
                className='form-input bg-transparent text-white file:rounded-full text-sm file:bg-emerald-500 file:text-white file:text-sm file:p-2.5 file:mr-5 file:border-none border border-none hover:file:bg-emerald-700 hover:file:cursor-pointer focus:ring-1 focus:ring-emerald-500 focus:border-emerald-600 block w-full p-2.5 file:transition file:duration-200'
                type='file'
                name='file'
                accept='img/*'
                onChange={handleFileChange}
                id='file'
              />
            </div>

            <div className='w-full col-span-6 sm:col-span-3'>
              <Label htmlFor='category'>
                Select a Category <span className='text-red-600'>*</span>
              </Label>
              <select
                className='form-input bg-gray-50 border border-gray-300 placeholder:text-black rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-600 block w-full p-2.5'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                name='category'
                id='category'
              >
                {Categories.map((item) => (
                  <option value={item.name} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className='w-full col-span-6 sm:col-span-3'>
              <Label htmlFor='desc'>
                Description <span className='text-red-600'>*</span>
              </Label>
              <ReactQuill
                id='desc'
                name='desc'
                theme='snow'
                modules={modules}
                className='w-full block mb-2 mt-4 text-sm text-gray-900 bg-gray-50'
                value={description}
                onChange={(value) => setDescription(value)}
              />
            </div>
          </div>
          <div className='flex flex-row gap-5 justify-between'>
            <button
              type='submit'
              className='inline-flex py-2.5 px-4 mt-4 sm:mt-10 font-medium text-center text-white bg-emerald-500 rounded-lg hover:bg-emerald-700 transition-all duration-200'
            >
              {loading ? 'Creating Post...' : 'Create Post'}
            </button>
            {preview && <Button onClick={handleCancel}>Clear Preview</Button>}
          </div>
          <Toaster position='top-left' />
        </form>
      </div>
    </section>
  )
}
