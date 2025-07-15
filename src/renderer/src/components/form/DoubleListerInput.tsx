import { DeleteIcon } from '@chakra-ui/icons'
import { Button, Card, HStack, Input, Stack, Text, useColorMode } from '@chakra-ui/react'
import { useCallback, useRef, useState } from 'react'
import useKeyCapture from '../../hooks/useKeyCapture'

export type doubleListItem = [string, string]

interface DoubleListerInputProps {
  list: doubleListItem[]
  setList: (value: [string, string][]) => void
  labels?: [string, string]
}

const DoubleListerInput = ({ list, setList, labels }: DoubleListerInputProps): JSX.Element => {
  const { colorMode } = useColorMode()
  const activeBG = colorMode === 'dark' ? 'pink.800' : 'gray.50'

  const [oneItem, setOneItem] = useState<string>('')
  const [twoItem, setTwoItem] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const addItem = useCallback(() => {
    if (oneItem && twoItem) {
      setList([[oneItem, twoItem], ...list])
      setOneItem('')
      setTwoItem('')
      if (inputRef?.current) {
        inputRef.current.focus()
      }
    }
  }, [oneItem, twoItem, list, setList])

  useKeyCapture({ key: 'Enter', callback: addItem })

  return (
    <Stack gap={2}>
      <Card variant={'outline'} padding={2} backgroundColor={'transparent'}>
        <HStack gap={2} width={'100%'} align={'center'}>
          <Stack gap={2} flexGrow={2}>
            <Input
              ref={inputRef}
              type="text"
              placeholder={labels ? `Add a ${labels[0]}...` : 'Add a item...'}
              onChange={(e) => setOneItem(e.target.value)}
              value={oneItem}
            />
            <Input
              type="text"
              placeholder={labels ? `Add a ${labels[1]}...` : 'Add a item...'}
              onChange={(e) => setTwoItem(e.target.value)}
              value={twoItem}
            />
          </Stack>
          <Button h="1.75rem" size="sm" onClick={addItem}>
            Add
          </Button>
        </HStack>
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
          _hover={{ backgroundColor: activeBG, borderColor: 'purple.300' }}
        >
          <Stack gap={2} flexGrow={2}>
            <Text>
              <b>{labels && labels[0]}:</b> {value[0]}
            </Text>
            <Text>
              <b>{labels && labels[1]}:</b> {value[1]}
            </Text>
          </Stack>
          <Button size="xs" onClick={() => setList(list.filter((_, i) => i !== index))}>
            <DeleteIcon />
          </Button>
        </HStack>
      ))}
    </Stack>
  )
}
export default DoubleListerInput
