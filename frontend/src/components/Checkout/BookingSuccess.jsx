import Text from '@/components/elements/Text'

export const BookingSuccess = () => {
 return (
   <div className="fixed inset-0 z-50
    flex flex-col items-center justify-center
    font-bold text-black text-5xl
   bg-white"
   >
     <Text className="animate-pulse">
        Booking
     </Text>
     <Text className="animate-pulse">
        Placed!
     </Text>
   </div>
 )
}

export default BookingSuccess