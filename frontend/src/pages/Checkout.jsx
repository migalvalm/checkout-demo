import Form from '@/components/Checkout/Form'
import Header from '@/components/Checkout/Header'

export const Checkout = () => {
  return (
    <div className='px-12 py-10 space-y-8'>
      <Header location="Cody's Cookie Store" />
      <Form />
    </div>
  )
}

export default Checkout