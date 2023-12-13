import { useField } from 'formik';

export const Input = ({...props}) => {
  return (
    <div className='flex flex-col space-y-1'>
      <label className="text-sm	font-thin" htmlFor={props.id || props.name}>{props.label}</label>
      <input className="text-input font-thin border border-grey rounded w-4/5 p-1 pl-2" {...props.field} {...props} />
      {props.meta.touched && props.meta.error ? (
        <div className="text-sm font-light text-error">{props.meta.error}</div>
      ) : null}
    </div>
  );
};

export default Input