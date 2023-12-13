import Text from '@/components/elements/Text';
import FormikInput from '@/components/formik/FormikInput';

export const PersonalDetails = () => {
  return (
    <div className="flex flex-col space-y-4"> 
      <Text className="text-xl mt-[-30px]" >Personal Details:</Text>

      <FormikInput
        label="Name"
        name="name"
        type="text"
      />

      <FormikInput
        label="Email"
        name="email"
        type="email"
      />
    </div>
  )
}

export default PersonalDetails