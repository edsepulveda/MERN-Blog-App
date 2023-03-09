import { Link } from 'react-router-dom'
import { format } from 'date-fns'

// localhost:4000/uploads/urlphoto.[png,jpeg,webp..]
// res.cloudinary....
export const CardContent = ({
  title,
  description,
  category,
  photo,
  createdAt,
  user,
  _id
}) => {
  return (
    <Link to={`/post/${_id}`}>
      <div className='group overflow-hidden shadow-md rounded-lg transition hover:shadow-lg duration-200'>
        <img
          loading='lazy'
          className='h-56 w-full object-cover group-hover:scale-105 transition-all duration-200'
          src={photo}
          alt={title}
        />
        <div className='p-4 sm:p-6 bg-gray-800'>
          <div className='flex justify-between mb-2.5 text-white text-xs'>
            <span className='bg-emerald-900 text-emerald-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full'>
              {category}
            </span>
            <time className='self-center text-emerald-200'>
              {format(new Date(createdAt), 'EEEE, MMM, y')}
            </time>
          </div>
          <span className='text-xl lg:text-2xl font-bold text-gray-200'>
            {title}
          </span>
          <div
            className='mt-5 text-sm leading-relaxed text-gray-100 line-clamp-2'
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div role='cell' className='flex justify-between items-center mt-10'>
            <span className='inline-flex items-center gap-1 text-sm font-medium text-emerald-500'>
              Ver Post
              <span className='text-lg self-center transition group-hover:translate-x-0.5'>
                &rarr;
              </span>
            </span>
            <span className='self-center text-xs text-emerald-500'>
              Created by {user}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
