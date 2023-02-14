import { Link } from 'react-router-dom'

export const Cards = () => {
  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
      <h1 className='text-center mb-10 text-2xl lg:text-4xl border-t-2 border-t-gray-200 pt-10 font-extrabold uppercase'>Latest Blogs</h1>
      <article className='p-5 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10'>
        <div className='group overflow-hidden shadow-md rounded-lg transition hover:shadow-lg duration-200'>
          <img onError={() => ( <img src='https://picsum.photos/200'/> )} className='h-56 w-full object-cover' src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />

          <div className='p-4 sm:p-6'>
            <div className='flex justify-between items-center mb-4'>
              <span className='text-xs'>14 feb. 2023</span>
              <span className='px-2 py-1 font-bold rounded text-xs'>Category</span>
            </div>
            <Link to='/'>
              <span className='text-xl lg:text-2xl font-bold text-gray-800'>
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </Link>
            <p className='mt-5 text-sm leading-relaxed text-gray-500 line-clamp-4'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam placeat eveniet obcaecati facilis itaque vel. Placeat, adipisci quibusdam commodi error tempore facere vel suscipit, sequi distinctio sapiente, quae ipsam consectetur.
            </p>
            <div className='flex justify-between items-center mt-10'>
              <Link className='inline-flex items-center gap-1 text-sm font-medium text-emerald-500' to='/'>
                Ver Post
                <span className='text-lg self-center transition group-hover:translate-x-0.5'>&rarr;</span>
              </Link>
              <span className='self-center text-xs text-emerald-500 group-hover:text-teal-600 transition duration-100'>Created by Jules</span>
            </div>
          </div>
        </div>
      </article>
      
    </div>
  )
}
