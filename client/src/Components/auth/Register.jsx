import { Link } from 'react-router-dom'
import Logo from './logo.svg'

export const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section>
      <div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
        <aside className='relative block h-16 lg:col-span-5 lg:h-full xl:col-span-6'>
          <img
            src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
            alt='image'
            className='absolute inset-0 w-full h-full'
          />
        </aside>
        <main className='min-h-screen flex items-center justify-center sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6'>
          <div className='max-w-xl lg:max-w-3xl'>
            <Link to='/' className='block text-emerald-500 mt-14'>
              <span className='sr-only'>Homepage</span>
              <img className='h-10 lg:h-16' src={Logo} alt='SVG Blog Logo' />
            </Link>

            <h1 className='mt-6 text-3xl font-extrabold text-gray-900 md:text-4xl'>
              Bienvenido de Vuelta
            </h1>
            <form
              onSubmit={handleSubmit}
              className='mt-8 grid grid-cols-6 gap-6'
              action='#'
            >
              <div className='col-span-6'>
                <label
                  className='text-sm font-bold text-emerald-700'
                  htmlFor='name'
                >
                  Nombre
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='form-input p-3 mt-4 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                />
              </div>
              <div className='col-span-6'>
                <label
                  className='text-sm font-bold text-emerald-700'
                  htmlFor='email'
                >
                  Correo
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='form-input p-3 mt-4 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                />
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='password'
                  className='text-sm font-bold text-emerald-700'
                >
                  Contraseña
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  className='form-input mt-4 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                />
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='password'
                  className='text-sm font-bold text-emerald-700'
                >
                  Confirmar Contraseña
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  className='form-input mt-4 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                />
              </div>
              <div className='col-span-6 flex items-start flex-col  sm:gap-4'>
                <button
                  type='submit'
                  className='inline-block shrink-0 mt-4 rounded-md border border-emerald-600 bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-emerald-600 focus:outline-none focus:ring active:text-emerald-500'
                >
                  Registrarse
                </button>
                <p className='mt-5 text-sm text-gray-500 sm:mt-0'>
                  ¿Ya tienes una cuenta?
                  <Link to='/login' className='text-gray-800 hover:underline'>
                    {' '}
                    Ingresar
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  )
}
