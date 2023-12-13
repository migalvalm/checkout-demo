export const Button = ({ children, className = '', onClick, ...props}) => {
  const style = !props.disabled 
    ? `${className} bg-normal hover:bg-blue-300 text-black cursor-pointer rounded` 
    : `${className} bg-grey text-grey cursor-not-allowed rounded`
  
  const errorStyle = `${className} bg-error hover:bg-red-300 text-black cursor-pointer rounded`

  return(
    <button
      className={!props.error ? `${style}` : `${errorStyle}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button