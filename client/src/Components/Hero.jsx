import React from 'react'

export const Hero = () => {
  return (
    <section>
      <div
        className="mx-auto px-4 py-32 lg:flex lg:items-center"
      >
        <div className="mx-auto text-center">
          <h1
            className="bg-gradient-to-r from-emerald-300 to-teal-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            The Art of Programming: 

            <span className="sm:block"> Solutions for Common Challenges</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed text-gray-500">
            Learn to overcome obstacles and maximize programming tools in this limitless exploration
          </p>

        </div>
        
      </div>
      
    </section>
  )
}
