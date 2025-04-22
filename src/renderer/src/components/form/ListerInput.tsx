import { DeleteIcon } from '@chakra-ui/icons'
import { Button, HStack, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import useKeyCapture from '../hooks/useKeyCapture'

interface ListerInputProps {
  list: string[]
  setList: (value: string[]) => void
  placeholder?: string
}
const ListerInput = ({ list, setList, placeholder }: ListerInputProps): JSX.Element => {
  const [oneItem, setOneItem] = useState<string>('')
  const addItem = useCallback(() => {
    if (oneItem) {
      setList([...list, oneItem])
      setOneItem('')
    }
  }, [oneItem, list])

  useKeyCapture('Enter', addItem)

  return (
    <Stack gap={2}>
      {list.map((value, index) => (
        <HStack
          key={index}
          padding={2}
          border={'1px solid'}
          borderColor="purple.700"
          borderRadius={6}
          justifyContent={'space-between'}
          _hover={{ backgroundColor: 'pink.800', borderColor: 'purple.300' }}
        >
          <Text key={index}>{value}</Text>
          <Button size="xs" onClick={() => setList(list.filter((_, i) => i !== index))}>
            <DeleteIcon />
          </Button>
        </HStack>
      ))}
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type="text"
          placeholder={placeholder || 'Add an item...'}
          onChange={(e) => setOneItem(e.target.value)}
          value={oneItem}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={addItem}>
            Add
          </Button>
        </InputRightElement>
      </InputGroup>
    </Stack>
  )
}
export default ListerInput
