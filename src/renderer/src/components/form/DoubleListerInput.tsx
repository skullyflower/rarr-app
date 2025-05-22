import { DeleteIcon } from '@chakra-ui/icons'
import { Button, Card, HStack, Input, InputGroup, Stack, Text } from '@chakra-ui/react'
import { useCallback, useRef, useState } from 'react'
import useKeyCapture from '../hooks/useKeyCapture'

export type doubleListItem = [string, string]

interface DoubleListerInputProps {
  list: doubleListItem[]
  setList: (value: [string, string][]) => void
  labels?: [string, string]
}

const DoubleListerInput = ({ list, setList, labels }: DoubleListerInputProps): JSX.Element => {
  const [oneItem, setOneItem] = useState<string>('')
  const [twoItem, setTwoItem] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const addItem = useCallback(() => {
    if (oneItem && twoItem) {
      setList([...list, [oneItem, twoItem]])
      setOneItem('')
      setTwoItem('')
      if (inputRef?.current) {
        inputRef.current.focus()
      }
    }
  }, [oneItem, twoItem, list])

  useKeyCapture('Enter', addItem)

  return (
    <Stack gap={2}>
      <Card variant={'outline'} padding={2} backgroundColor={'transparent'}>
        <InputGroup size="md">
          <HStack gap={2} wrap={'wrap'}>
            <Input
              ref={inputRef}
              pr="4.5rem"
              type="text"
              placeholder={labels ? `Add a ${labels[0]}...` : 'Add a item...'}
              onChange={(e) => setOneItem(e.target.value)}
              value={oneItem}
            />
            <Input
              pr="4.5rem"
              type="text"
              placeholder={labels ? `Add a ${labels[1]}...` : 'Add a item...'}
              onChange={(e) => setTwoItem(e.target.value)}
              value={twoItem}
            />
            <Button h="1.75rem" size="sm" onClick={addItem}>
              Add
            </Button>
          </HStack>
        </InputGroup>{' '}
      </Card>
      {list.map((value, index) => (
        <HStack
          key={index}
          padding={2}
          border={'1px solid'}
          borderColor="purple.700"
          borderRadius={6}
          justifyContent={'space-between'}
          gap={2}
          wrap={'wrap'}
          _hover={{ backgroundColor: 'pink.800', borderColor: 'purple.300' }}
        >
          <Text>
            {labels && labels[0].toLocaleUpperCase()}: {value[0]}
          </Text>
          <Text>
            {labels && labels[1].toUpperCase()}: {value[1]}
          </Text>
          <Button size="xs" onClick={() => setList(list.filter((_, i) => i !== index))}>
            <DeleteIcon />
          </Button>
        </HStack>
      ))}
    </Stack>
  )
}
export default DoubleListerInput
