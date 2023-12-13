import Text from '@/components/elements/Text'

export const Loading = () => {
 return (
   <div className="fixed inset-0 z-50
      flex flex-col items-center justify-center
      font-bold text-white text-3xl
      bg-black bg-opacity-60
      backdrop-blur-sm
      cursor-wait"
   >
     <Text>
        Placing
     </Text>
     <Text>
        Booking
     </Text>
     <Text>
        <span className="ml-1 animate-pulse">.</span>
        <span className="ml-1 animate-pulse">.</span>
        <span className="ml-1 animate-pulse">.</span>
     </Text>
   </div>
 )
}

export default Loading