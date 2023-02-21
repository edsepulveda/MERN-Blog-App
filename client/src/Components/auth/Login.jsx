import Logo from './logo.svg'
import { Link } from 'react-router-dom'
import { FormLabel, InputLabel } from './FormLabel'
import { NewTitle } from '../../utils/ChangeTitle'
import Form from './hooks/useForm'

export const Login = () => {
  NewTitle('Blog | Login')

  const URL = 'http://localhost:4000'

  return (
    <section>
      <div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
        <aside className='relative block h-16 lg:col-span-5 lg:h-full xl:col-span-6'>
          <img
            src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
            alt='image'
            className='hidden md:block inset-0 w-full h-full object-cover'
          />
        </aside>
        <main className='min-h-screen flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6'>
          <div className='max-w-xl lg:max-w-3xl'>
            <Link to='/' className='block text-emerald-500'>
              <span className='sr-only'>Homepage</span>
              <img className='h-10 lg:h-16' src={Logo} alt='SVG Blog Logo' />
            </Link>

            <h1 className='mt-6 text-3xl font-extrabold text-white md:text-4xl'>
              Bienvenido de Vuelta
            </h1>
            <Form
              endpoint={`${URL}/login`}
              formInitalValues={{
                name: '',
                password: ''
              }}
            >
              <div className='col-span-6'>
                <FormLabel htmlFor='name' label='Nombre' />
                <InputLabel type='name' id='name' name='name' />
              </div>
              <div className='col-span-6'>
                <FormLabel htmlFor='password' label='Contraseña' />
                <InputLabel type='password' id='password' name='password' />
              </div>
              <div className='col-span-6 flex items-start flex-col  sm:gap-4'>
                <button
                  type='submit'
                  className='inline-block shrink-0 mt-4 rounded-md border border-emerald-600 bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-800 focus:outline-none focus:ring active:ring-emerald-500'
                >
                  Ingresar
                </button>
                <p className='mt-5 text-sm text-white sm:mt-0'>
                  ¿No tienes una cuenta?
                  <Link
                    to='/register'
                    className='text-emerald-500 hover:underline'
                  >
                    {' '}
                    Registrarse
                  </Link>
                </p>
                <p className='mt-5 text-xs text-white sm:mt-0'>
                  ¿Olvidaste tu contraseña?
                  <Link className='text-emerald-500 hover:underline'>
                    {' '}
                    Recuperar Contraseña
                  </Link>
                </p>
              </div>
            </Form>
          </div>
        </main>
      </div>
    </section>
  )
}
