import { useEffect, useState, useCallback, useMemo } from 'react'
import { Formik, Form as FormikForm, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { isEmpty } from 'lodash';

import useSend from '@/hooks/useSend'
import { ENDPOINTS } from '@/api/endpoints'

import BagCounter from '@/components/Checkout/BagCounter';
import PersonalDetails from '@/components/Checkout/PersonalDetails'
import PaymentDetails from '@/components/Checkout/PaymentDetails'
import BookingSuccess from '@/components/Checkout/BookingSuccess'
import Footer from '@/components/Checkout/Footer'

import Divider from '@/components/elements/Divider'
import Loading from '@/components/elements/Loading'
import Text from '@/components/elements/Text'

const INITIAL_VALUES = {
  name: '',
  email: '',
  card_number: '',
  quantity: 0
}

const VALIDATION_SCHEMA = Yup.object({
  name: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  card_number: Yup.string()
    .length(19, 'Must be 16 characters')
    .required('Required'),
})

export const Form = () => {
  const [bags, setBags] = useState(0)
  const [isSuccess, setIsSuccess] = useState(false)
  const { response, error, sendData } = useSend(ENDPOINTS.order.checkout.url)

  const handleSubmit = useCallback((values, { setSubmitting }) => {
    setSubmitting(true)
    sendData({order: {...values, quantity: bags}}).then(() => {
      setTimeout(() => {
        setSubmitting(false)
      }, 5000)
    })
  })

  useEffect(() => {
    if (isEmpty(response)) { return; }

    setIsSuccess(response['state'] === 'success')
  }, [response])

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      validateOnMount={true}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm>
          {isSubmitting && <Loading />}

          <div className='flex flex-col space-y-10'>
            <BagCounter count={bags} setCount={setBags} />
            <Divider />
            <PersonalDetails />
            <Divider />
            <PaymentDetails />
          </div>

          {/* Since we have a blurred background when submitting */}
          {/* To not render error message before the submitting and loading  is finished */}
          {!isSubmitting && <Text className="text-xl mt-36">{error}</Text>}
          <Footer bags={bags} error={error} />

          {/* Since we have a blurred background when submitting */}
          {/* To not render the success screen before the submitting and loading  is finished */}
          {(isSuccess && !isSubmitting) && <BookingSuccess />}
        </FormikForm>
      )}
    </Formik>
  )
}

export default Form