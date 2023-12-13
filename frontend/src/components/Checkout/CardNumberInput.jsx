import { useField } from 'formik';

import Input from '@/components/elements/Input';

import { formatCardNumber } from '@/utils/Card'

export const CardNumberInput = ({...props}) => {
  const [field, meta] = useField(props);

  const onChange = (event) => {
    formatCardNumber(field, event)
  };
 
  return (
    <Input
      field={field}
      meta={meta}
      maxLength={19} // 16 Digits + 3 Whitespaces
      onChange={onChange}
      {...props}
    /> 
  )
}

export default CardNumberInput