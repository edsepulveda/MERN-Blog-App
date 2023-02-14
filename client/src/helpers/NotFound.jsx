import { useNavigate } from 'react-router-dom'

export const NotFound = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className='grid h-screen px-4 bg-gray-50 place-content-center'>
        <div className='text-center'>
          <h1 className='font-extrabold text-emerald-500 text-5xl lg:text-9xl mb-5'>404!</h1>
          <p className='text-2xl font-bold lg:text-4xl tracking-relaxed text-gray-500'>
            La página que estas buscando no se encuentra disponible en estos momentos
          </p>
          <button onClick={() => navigate(-1)} className='inline-block px-5 py-3 mt-6 text-sm font-bold text-white bg-emerald-600 rounded-md focus:ring focus:outline-transparent'>
            Volver
          </button>
        </div>
      </div>
    </>
  )
}
