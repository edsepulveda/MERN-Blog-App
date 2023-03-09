import { MdUpdate, MdOutlineDeleteForever } from 'react-icons/md'

export const Options = () => {
  return (
    <>
      <span className='inline-flex divide-x overflow-hidden rounded-md border w-fit'>
        <button
          className='text-xs font-semibold inline-flex gap-2 p-2 bg-emerald-600 text-white'
          title='Update Post'
        >
          Edit <MdUpdate className='self-center' color='white' />
        </button>
        <button
          className='text-xs font-semibold inline-flex p-2 gap-2 bg-red-600 text-white'
          title='Update Post'
        >
          Remove <MdOutlineDeleteForever className='self-center' color='white' />
        </button>
      </span>
    </>
  )
}
