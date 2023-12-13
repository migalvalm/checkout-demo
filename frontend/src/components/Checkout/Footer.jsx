import { useFormikContext } from 'formik';

import Text from '@/components/elements/Text'
import Button from '@/components/elements/Button'
import Divider from '@/components/elements/Divider'

import { pluralize } from '@/utils/String'
import { formatCurrency } from '@/utils/Price'
import { BASE_PRICE } from '@/utils/Constants'

export const Footer = ({ bags = 0, error = null }) => {
  const { isValid, isSubmitting } = useFormikContext();

  return (
    <div className='fixed bottom-0 w-full bg-white space-y-10'>
      <Divider color='black'/>

      <div className='flex justify-between pb-4'>
        <div className='flex flex-col mx-[-14px]'>
          <Text className='text-xs'>
            {pluralize(bags, 'bag')}
          </Text>
          <Text className='text-xl font-bold'> 
            {formatCurrency(BASE_PRICE * bags)}
          </Text>
        </div>
        
        
        <Button
          className='mr-16 mb-6 px-10 py-2'
          type={'submit'}
          disabled={!isValid}
          // Since we have a blurred background when submitting
          // This is to not render button with the error color before the submitting and loading is finished
          error={!isSubmitting ? error : null} 
        > 
          <Text className='text-xl'> 
            {/* Since we have a blurred background when submitting */}
            {/* To not render button with the Retry text before the submitting and loading is finished */}
            {!isSubmitting && error ? 'Retry' : 'Book'}
          </Text>
        </Button>
      </div>
    </div>
  )
}

export default Footer