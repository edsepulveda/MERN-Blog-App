export const Hero = () => {
  return (
    <section className='container'>
      <div className='relative mx-auto px-4 py-32 lg:flex lg:h-screen lg:items-center'>
        <div className='mx-auto text-center'>
          <h1 className='text-left md:text-center bg-gradient-to-r from-emerald-300 to-teal-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl'>
            The Art of Programming:
            <span className='sm:block'> Solutions for Common Problems</span>
          </h1>

          <p className='mx-auto text-left md:text-center mt-10 max-w-xl sm:text-xl sm:leading-relaxe text-white font-bold'>
            Learn to overcome obstacles and maximize programming tools in this
            limitless exploration
          </p>
        </div>
      </div>
    </section>
  )
}
