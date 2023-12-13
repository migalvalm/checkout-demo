import Text from '@/components/elements/Text'
import Button from '@/components/elements/Button'

export const Counter = ({count, setCount}) => {
  const increment = () => {
    setCount(count + 1)
  }
  
  const decrement = () => {
    const newValue = count - 1

    if (newValue < 0) {
      setCount(0)
    } else {
      setCount(newValue)
    }
  }

  return (
    <div className='flex justify-between space-x-6'>
      <Button 
        className='px-2.5 py-0.5'
        type='button'
        onClick={decrement}
      > 
        <Text className="text-sm font-semibold">
          -
        </Text>
      </Button>
      <Text className='pt-0.5 text-xl'> {count} </Text>
      <Button 
        className='px-2.5 py-0.5'
        type='button'
        onClick={increment}
      > 
        <Text className='text-sm font-semibold'>
          +
        </Text>
      </Button>
    </div>
  )
}

export default Counter