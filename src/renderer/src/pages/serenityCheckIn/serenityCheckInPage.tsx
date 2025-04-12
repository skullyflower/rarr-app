import CopyButton from '@renderer/components/form/copy-button'
import { DeleteIcon } from '@chakra-ui/icons'
import {
  Accordion,
  Box,
  Button,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text
} from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import useKeyCapture from '@renderer/components/hooks/useKeyCapture'
import PageCard from '@renderer/components/layout/page-card'
import AccordionSection from '@renderer/components/layout/accordion-section'

function SerenityCheckIn(): JSX.Element {
  const [canNotControl, setCanNotControl] = useState<string[]>([])
  const [canControl, setCanControl] = useState<string[]>([])
  const [oneControl, setOneControl] = useState<string>()
  const [oneNotControl, setOneNotControl] = useState<string>()

  const tocopy = `Today I am trying to control that I cannot control:
  \t- ${canNotControl.join(', \n\t- ')}
  While I could and probably should be: 
  \t- ${canControl.join(', \n\t- ')}`

  const addControl = useCallback(() => {
    if (oneControl) {
      setCanControl([...canControl, oneControl])
      setOneControl('')
    }
  }, [oneControl, canControl])

  const addNotControl = useCallback(() => {
    if (oneNotControl) {
      setCanNotControl([...canNotControl, oneNotControl])
      setOneNotControl('')
    }
  }, [oneNotControl, canNotControl])

  useKeyCapture('Enter', oneControl ? addControl : addNotControl)

  return (
    <Stack gap={4}>
      <Heading as="h2" size="lg" textAlign={'center'} paddingInline={4}>
        Let the Serentiy Prayer lead the way.
      </Heading>
      <PageCard>
        <Stack gap={4}>
          <HStack align="start" justifyContent={'space-between'}>
            <Box padding={2}>
              <Text>Grant me the serenity to accept the things I cannot change.</Text>
              <Text> Courage to change the things I can.</Text>
              <Text> And wisdom to know the difference.</Text>
            </Box>
            <CopyButton text={tocopy} disabled={!canControl.length || !canNotControl.length} />
          </HStack>
          <Accordion allowToggle={true} allowMultiple={true}>
            <Stack gap={2}>
              <AccordionSection title="What are you trying to control that you cannot control?">
                <Box borderRadius={6} p={4}>
                  <Stack gap={2}>
                    {canNotControl.map((value, index) => (
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
                          onClick={() =>
                            setCanNotControl(canNotControl.filter((_, i) => i !== index))
                          }
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
                    placeholder="Something I cannot control..."
                    onChange={(e) => setOneNotControl(e.target.value)}
                    value={oneNotControl}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={addNotControl}>
                      Add
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </AccordionSection>
              <AccordionSection title="What are avoiding that you actually could do?">
                <Box borderRadius={6} p={4}>
                  <Stack gap={2}>
                    {canControl.map((value, index) => (
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
                          onClick={() => setCanControl(canControl.filter((_, i) => i !== index))}
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
                    placeholder="Something I could do is"
                    onChange={(e) => setOneControl(e.target.value)}
                    value={oneControl}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={addControl}>
                      Add
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </AccordionSection>
            </Stack>
          </Accordion>
        </Stack>
      </PageCard>
    </Stack>
  )
}
export default SerenityCheckIn
