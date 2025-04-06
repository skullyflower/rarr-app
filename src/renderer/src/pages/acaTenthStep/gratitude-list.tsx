import CopyButton from '@renderer/components/form/copy-button'
import { DeleteIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text
} from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import useKeyCapture from '@renderer/components/hooks/useKeyCapture'

function GratitudeList(): JSX.Element {
  const [listOfGrats, setListOfGrats] = useState<string[]>([])
  const [oneGrat, setOneGrat] = useState<string>()
  const tocopy = `Today I am grateful for:\n- ${listOfGrats.join(', \n- ')}`

  const addGrat = useCallback(() => {
    if (oneGrat) {
      setListOfGrats([...listOfGrats, oneGrat])
      setOneGrat('')
    }
  }, [oneGrat, listOfGrats])

  useKeyCapture('Enter', addGrat)

  return (
    <Card
      bg="pink.900"
      //color="purple.200"
      border={['none', '1px solid']}
    >
      <CardBody>
        <Stack gap={4}>
          <HStack justifyContent={'space-between'}>
            <Text>What are you feeling grateful for today?</Text>
            <CopyButton text={tocopy} disabled={listOfGrats.length === 0} />
          </HStack>
          <Box borderRadius={6} p={4}>
            <Stack gap={2}>
              {listOfGrats.map((value, index) => (
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
                  <Button
                    size="xs"
                    onClick={() => setListOfGrats(listOfGrats.filter((_, i) => i !== index))}
                  >
                    <DeleteIcon />
                  </Button>
                </HStack>
              ))}
            </Stack>
          </Box>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type="text"
              placeholder="Something to be grateful for"
              onChange={(e) => setOneGrat(e.target.value)}
              value={oneGrat}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={addGrat}>
                Add
              </Button>
            </InputRightElement>
          </InputGroup>
        </Stack>
      </CardBody>
    </Card>
  )
}
export default GratitudeList
