export const Label = ({ children, htmlFor }) => {
  return <label className='block mb-5 text-md md:text-sm font-bold text-white' htmlFor={htmlFor}>{children}</label>
}
