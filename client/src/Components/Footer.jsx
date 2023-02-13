import { AiOutlineArrowUp } from 'react-icons/ai'
import Logo from '../assets/img/logo.svg'


export const Footer = () => {

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <footer className='bg-gray-800'>
      <div className='relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-20'>
        <div className='absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8'>
          <button onClick={scrollTop} className='inline-block rounded-full bg-emerald-600 p-2 text-white transition hover:bg-emerald-500 duration-200 sm:p-3 lg:p-5'>
            <AiOutlineArrowUp size={20}/>
            <span className='sr-only'>Back to Top</span>
          </button>
        </div>
        <div className='lg:flex lg:items-end text-emerald-500 lg:justify-between'>
          <div>
            <div className='flex justify-center lg:justify-start'>
              <img className='h-11' src={Logo} alt="Logo svg" />
            </div>
              <p className='mx-auto text-sm mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left'>Learn to overcome obstacles and maximize programming tools in this limitless exploratio</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
