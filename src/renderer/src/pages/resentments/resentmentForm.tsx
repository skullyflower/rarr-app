import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import StyledTextInput from '@renderer/components/form/styledTextInput/StyledTextInput'
import CheckboxGroupBox from '@renderer/components/form/CheckBoxGroupBox'
import { useState } from 'react'
import NeverLetGo from '@renderer/components/form/never-let-go'
import { affects, myParts, sucesses } from '@renderer/pages/resentments/resentment-constants'
import useProgramDropDown from '@renderer/components/form/useProgramDropDown'
import ResentBeGone from './resentment-be-gone'
const programOptions = Object.keys(affects)

function ResentmentsForm(): JSX.Element {
  const [Iresent, setIresent] = useState('')
  const [because, setBecause] = useState('')
  const [affectsMy, setAffectsMy] = useState<string[]>([])
  const [myPart, setMyPart] = useState<string[]>([])
  const [didWell, setDidWell] = useState<string[]>([])
  const [learned, setLearned] = useState('')

  const incomplete =
    !Iresent || !because || !affectsMy.length || !myPart.length || !didWell.length || !learned
  const [letGo, setLetGo] = useState(false)

  const { isOpen: isLettingGo, onOpen: onLettingGo, onClose: onCloseLetGo } = useDisclosure()
  const { isOpen: isNever, onOpen: onNever, onClose: onNeverMind } = useDisclosure()

  const { ProgramDropDown, selectedProgram } = useProgramDropDown(programOptions)

  function letItGo(): void {
    setLetGo(true)
    onLettingGo()
  }

  function neverLetItGo(): void {
    onNever()
  }

  if (letGo) {
    return (
      <ResentBeGone
        Iresent={Iresent}
        because={because}
        affectsMy={affectsMy}
        myPart={myPart}
        didWell={didWell}
        learned={learned}
        isLettingGo={isLettingGo}
        onLettingGo={onLettingGo}
        onCloseLetGo={onCloseLetGo}
      />
    )
  }

  return (
    <Stack gap={4}>
      <HStack align="center" justify={'center'} gap={4}>
        <Heading as="h2" size="lg">
          {`So, why don't you write about it?`}
        </Heading>
        <ProgramDropDown />
      </HStack>
      <Card bg="whiteAlpha.300" border={['none', '1px solid']}>
        <CardBody>
          <Stack gap={4}>
            <Card bg="pink.900" border={['none', '1px solid']}>
              <CardBody>
                <Stack gap={4}>
                  <FormControl isRequired>
                    <FormLabel fontWeight={700}>Who or what is bothering you?</FormLabel>
                    <Input
                      _focus={{ borderColor: 'purple.200' }}
                      name="Iresent"
                      type="text"
                      value={Iresent}
                      placeholder="I resent..."
                      onChange={(e) => setIresent(e.target.value)}
                      maxLength={30}
                    />
                  </FormControl>
                </Stack>
              </CardBody>
            </Card>
            <Card bg="pink.900" border={['none', '1px solid']}>
              <CardBody>
                <Stack gap={4}>
                  <FormControl isRequired>
                    <FormLabel fontWeight={700}>And why? What did they do? Not do?:</FormLabel>
                    <StyledTextInput value={because} setter={setBecause} />
                  </FormControl>
                </Stack>
              </CardBody>
            </Card>
            <Card bg="pink.900" border={['none', '1px solid']}>
              <CardBody>
                <Stack gap={4}>
                  <FormControl isRequired>
                    <FormLabel fontWeight={700}>
                      How did it affect you? What did it threaten.
                    </FormLabel>
                    <CheckboxGroupBox
                      valuesList={affectsMy}
                      options={affects[selectedProgram as keyof typeof affects]}
                      setter={setAffectsMy}
                    />
                  </FormControl>
                </Stack>
              </CardBody>
            </Card>
            <Card bg="pink.900" border={['none', '1px solid']}>
              <CardBody>
                <Stack gap={4}>
                  <FormControl isRequired>
                    <FormLabel fontWeight={700}>
                      Now really, what part did you play in all of this?
                    </FormLabel>
                    <CheckboxGroupBox
                      valuesList={myPart}
                      options={myParts[selectedProgram as keyof typeof myParts]}
                      setter={setMyPart}
                    />
                  </FormControl>
                </Stack>
              </CardBody>
            </Card>
            <Card bg="pink.900" border={['none', '1px solid']}>
              <CardBody>
                <Stack gap={4}>
                  <FormControl isRequired>
                    <FormLabel fontWeight={700}>What did you do well?</FormLabel>
                    <CheckboxGroupBox
                      valuesList={didWell}
                      options={sucesses[selectedProgram as keyof typeof sucesses]}
                      setter={setDidWell}
                    />
                  </FormControl>
                </Stack>
              </CardBody>
            </Card>
            <Card bg="pink.900" border={['none', '1px solid']}>
              <CardBody>
                <Stack gap={4}>
                  <Heading as="h3" size="md">
                    Do you see the situation differently now?
                  </Heading>
                  <FormControl isRequired>
                    <FormLabel fontWeight={700}>
                      What might you have done differently? What might make things better? What did
                      you do right?
                    </FormLabel>
                    <StyledTextInput value={learned} setter={setLearned} />
                  </FormControl>
                  <Heading textAlign="center">Are you ready to let it go?</Heading>
                </Stack>
              </CardBody>
              <CardFooter>
                <Stack width="100%" direction="row" gap={4} justifyContent="center">
                  <Button
                    isDisabled={incomplete}
                    colorScheme="purple"
                    name="letGo"
                    onClick={letItGo}
                  >
                    Be Free!
                  </Button>{' '}
                  <Button colorScheme="purple" onClick={neverLetItGo}>
                    NEVER!!
                  </Button>
                </Stack>
              </CardFooter>
            </Card>
          </Stack>
        </CardBody>
      </Card>
      <Box p={4}>
        <Text>
          <b>Your answers can NOT be viewed by anyone but you</b>. When you hit submit, your answers
          will be formatted so that you can copy or print them if you like, and share them with whom
          you choose.
        </Text>
      </Box>
      <NeverLetGo isOpen={isNever} onClose={onNeverMind} />
    </Stack>
  )
}
export default ResentmentsForm
