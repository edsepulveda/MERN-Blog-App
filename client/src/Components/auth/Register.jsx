import Logo from './logo.svg'
import { Link } from 'react-router-dom'
import { NewTitle } from '../../utils/ChangeTitle'
import { FormLabel, InputLabel } from './FormLabel'
import Form from './hooks/useForm'
import { Button } from '../../helpers/Button'

export const Register = () => {
  NewTitle('Blog | Register')

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
          <div className='max-w-xl lg:max-w-3xl mt-10'>
            <Link to='/' className='block text-emerald-500'>
              <span className='sr-only'>Homepage</span>
              <img
                className='block h-10 lg:h-16'
                src={Logo}
                alt='SVG Blog Logo'
              />
            </Link>

            <h1 className='text-3xl mt-2 font-extrabold text-white md:text-4xl'>
              Registrarse
            </h1>
            <Form
              formtype='register'
              formInitalValues={{
                username: '',
                email: '',
                password: ''
              }}
            >
              <div className='col-span-12'>
                <FormLabel htmlFor='username' label='Nombre' />
                <InputLabel type='name' id='username' name='username' />
              </div>
              <div className='col-span-12'>
                <FormLabel htmlFor='email' label='Correo' />
                <InputLabel type='email' id='email' name='email' />
              </div>
              <div className='col-span-12'>
                <FormLabel htmlFor='password' label='Contraseña' />
                <InputLabel type='password' id='password' name='password' />
              </div>
              <div className='col-span-6 flex items-start flex-col  sm:gap-4'>
                <Button type='submit'>Registrarse</Button>
              </div>
            </Form>
            <div className='flex flex-col md:mt-5 md:gap-5'>
              <p className='mt-5 text-xs text-white sm:mt-0'>
                ¿Ya tienes una cuenta?
                <Link to='/login' className='text-emerald-500 hover:underline'>
                  {' '}
                  Logearse
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
          </div>
        </main>
      </div>
    </section>
  )
}
