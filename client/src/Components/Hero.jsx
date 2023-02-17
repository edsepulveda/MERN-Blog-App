import Search from '../assets/img/search.svg'

export const Hero = () => {
  return (
    <section className='container'>
      <div className='relative mx-auto px-4 py-32 lg:flex lg:h-screen lg:items-center'>
        <div className='mx-auto text-center'>
          <h1 className='bg-gradient-to-r from-emerald-300 to-teal-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl'>
            The Art of Programming:
            <span className='sm:block'> Solutions for Common Problems</span>
          </h1>

          <p className='mx-auto mt-10 max-w-xl sm:text-xl sm:leading-relaxe text-white font-bold'>
            Learn to overcome obstacles and maximize programming tools in this
            limitless exploration
          </p>
          <div className='flex flex-col gap-y-2 mt-10 relative'>
            <div className='relative'>
              <img
                src={Search}
                alt='SVG Search Icon'
                className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6'
              />
              <input
                type='text'
                placeholder='Find an Interesting Article'
                className='placeholder:font-extrabold font-semibold text-black placeholder:text-gray-300 placeholder:text-sm rounded-md pl-12 pr-3 w-full py-3 focus:outline-none focus:ring-1 focus:ring-emerald-500'
              />
            </div>
            <button className='group w-full bg-emerald-500 hover:bg-emerald-700 text-white font-semibold rounded-md px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2'>
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
