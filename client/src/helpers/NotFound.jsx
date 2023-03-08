import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className='grid h-screen px-4 bg-gray-900 place-content-center'>
        <div className='text-left lg:text-center'>
          <h1 className='font-extrabold text-emerald-500 text-5xl lg:text-9xl mb-5'>
            ¡Uh Oh!
          </h1>
          <p className='text-2xl font-bold tracking-relaxed text-gray-500'>
            Parece que la página que buscas no se encuentra disponible
          </p>
          <button
            onClick={() => navigate(-1)}
            className='inline-block px-5 py-3 mt-6 text-sm font-bold text-white bg-emerald-600 rounded-md focus:ring focus:outline-transparent'
          >
            Volver
          </button>
        </div>
      </div>
    </>
  )
}
