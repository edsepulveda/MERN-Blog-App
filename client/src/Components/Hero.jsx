import React from 'react'

export const Hero = () => {
  return (
    <section className='relative bg-[url(https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80)] bg-cover bg-center bg-no-repeat'>
      <div className='relative mx-auto px-4 py-32 lg:flex lg:h-screen lg:items-center'>
        <div className='mx-auto text-center'>
          <h1 className='bg-gradient-to-r from-emerald-300 to-teal-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl'>
            The Art of Programming:
            <span className='sm:block'> Solutions for Common Problems</span>
          </h1>

          <p className='mx-auto mt-20 max-w-xl sm:text-xl sm:leading-relaxe text-white font-bold'>
            Learn to overcome obstacles and maximize programming tools in this
            limitless exploration
          </p>
        </div>
      </div>
    </section>
  )
}
