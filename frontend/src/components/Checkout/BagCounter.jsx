import Counter from '@/components/elements/Counter'
import Text from '@/components/elements/Text'

export const BagCounter = ({count, setCount}) => {
  return (
    <div className="flex flex-row justify-between"> 
      <Text className="text-xl"> Number of bags </Text>
      <Counter count={count} setCount={setCount} />
    </div>
  )
}

export default BagCounter