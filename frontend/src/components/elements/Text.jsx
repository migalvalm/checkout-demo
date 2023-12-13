export const Text = ({ children, className }) => {
  return <p className={`text-left ${className}`}>{children}</p>;
};
 
export default Text;