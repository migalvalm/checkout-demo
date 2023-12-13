import Text from '@/components/elements/Text';
import CardNumberInput from '@/components/Checkout/CardNumberInput';

export const PaymentDetails = () => {
  return (
    <div className="space-y-2"> 
      <Text className="text-xl mt-[-18px]">Payment information</Text>

      <CardNumberInput 
        label="Card Details"
        name="card_number"
        type="text"
      /> 
    </div>
  )
}

export default PaymentDetails