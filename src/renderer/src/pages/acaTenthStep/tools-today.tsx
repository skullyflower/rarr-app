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

const ToolsUsedToday = () => {
  const [listOfTools, setListOfTools] = useState<string[]>([])
  const [oneTool, setOneTool] = useState<string>()
  const tocopy = `Recovery Tools just for today:\n- ${listOfTools.join(', \n- ')}`

  const addTool = useCallback(() => {
    if (oneTool) {
      setListOfTools([...listOfTools, oneTool])
      setOneTool('')
    }
  }, [oneTool, listOfTools])

  useKeyCapture('Enter', addTool)

  return (
    <Card
      bg="pink.900"
      //color="purple.200"
      border={['none', '1px solid']}
    >
      <CardBody>
        <Stack gap={4}>
          <HStack justifyContent={'space-between'}>
            <Text>
              What are the tools of recovery you are using to help you live life in the moment?
            </Text>
            <CopyButton text={tocopy} disabled={listOfTools.length === 0} />
          </HStack>
          <Box borderRadius={6} p={4}>
            <Stack gap={2}>
              {listOfTools.map((value, index) => (
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
                    onClick={() => setListOfTools(listOfTools.filter((_, i) => i !== index))}
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
              placeholder="Describe a tool you used today"
              onChange={(e) => setOneTool(e.target.value)}
              value={oneTool}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={addTool}>
                Add
              </Button>
            </InputRightElement>
          </InputGroup>
        </Stack>
      </CardBody>
    </Card>
  )
}
export default ToolsUsedToday
