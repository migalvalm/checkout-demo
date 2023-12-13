import { useField } from 'formik';

import Input from '@/components/elements/Input'

export const FormikInput = ({...props }) => {
  const [field, meta] = useField(props);
  return (
    <Input field={field} meta={meta} {...props} />
  );
};

export default FormikInput