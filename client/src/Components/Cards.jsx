import React from 'react'

export const Cards = () => {
  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
      <h1 className='text-center mb-10 text-3xl border-t-2 border-t-gray-200 pt-10 font-extrabold uppercase'>Latest Blogs</h1>
      <article className='p-5 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10'>
        <div className='overflow-hidden shadow-md rounded-lg transition hover:shadow-lg duration-200'>
          <img className='h-56 w-full object-cover' src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />

          <div className='p-4 sm:p-6'>
            {/* <time dateTime={date} className='block text-xs text-emerald-500 mb-3'>
              {day}
            </time> */}
            <a href="#">
              <span className='text-xl lg:text-2xl font-bold text-gray-800'>
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </a>
            <p className='mt-5 text-sm leading-relaxed text-gray-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, accusamus.
            </p>
            <a className='group mt-10 inline-flex items-center gap-1 text-sm font-medium text-emerald-500' href="#">
              Ver Post
              <span className='block transition group-hover:translate-x-0.5'>&rarr;</span>
            </a>
          </div>
        </div>
      </article>
      
    </div>
  )
}
