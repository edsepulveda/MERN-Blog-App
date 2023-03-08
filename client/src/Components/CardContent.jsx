import { Link } from 'react-router-dom'
import { format } from 'date-fns'

export const CardContent = ({
  title,
  description,
  category,
  photo,
  createdAt,
  user
}) => {
  return (
    <div className='group overflow-hidden shadow-md rounded-lg transition hover:shadow-lg duration-200'>
      <img
        loading='lazy'
        className='h-56 w-full object-cover'
        src={'http://localhost:4000/' + photo}
        alt=''
      />
      <div className='p-4 sm:p-6 bg-gray-800'>
        <div className='flex justify-between mb-2.5 text-white text-xs'>
          <span className='bg-emerald-900 text-emerald-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full'>
            {category}
          </span>
          <time>{format(new Date(createdAt), 'EEEE, MMM, y')}</time>
        </div>
        <Link to='/'>
          <span className='text-xl lg:text-2xl font-bold text-gray-200'>
            {title}
          </span>
        </Link>
        <div
          className='mt-5 text-sm leading-relaxed text-gray-100 line-clamp-2'
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div role='cell' className='flex justify-between items-center mt-10'>
          <Link
            className='inline-flex items-center gap-1 text-sm font-medium text-emerald-500'
            to='/'
          >
            Ver Post
            <span className='text-lg self-center transition group-hover:translate-x-0.5'>
              &rarr;
            </span>
          </Link>
          <span className='self-center text-xs text-emerald-500'>
            Created by {user}
          </span>
        </div>
      </div>
    </div>
  )
}
