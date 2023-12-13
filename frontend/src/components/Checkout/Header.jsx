import Text from '@/components/elements/Text'

export const Header = ({location}) => {
  return (
    <div className="py-2">
      <Text className="text-sm">
        Booking storage at:
      </Text>
      <Text className="font-bold">
        {location}
      </Text>
    </div>
  )
}

export default Header