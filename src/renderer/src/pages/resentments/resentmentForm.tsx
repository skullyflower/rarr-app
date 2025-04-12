import {
  Accordion,
  Box,
  Button,
  FormControl,
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
import { affects, myParts, sucesses } from '@renderer/pages/resentments/resentment-constants.d'
import useProgramDropDown from '@renderer/components/form/useProgramDropDown'
import ResentBeGone from './resentment-be-gone'
import PageCard from '@renderer/components/layout/page-card'
import AccordionSection from '@renderer/components/layout/accordion-section'

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
          Anger is a wierd thing.
        </Heading>
        <ProgramDropDown />
      </HStack>
      <PageCard>
        <Text textAlign={'center'} fontWeight={'bold'} fontSize="lg" marginBlock={4}>
          {`So, why don't you write about it?`}
        </Text>

        <Text>
          We feel that someone or something has wronged us. We feel they should be punished or
          stopped.
        </Text>
        <Text>
          And yet, most of the time, we do nothing but punish ourselves with our angry thoughts.
        </Text>
        <Text mb={4}>
          It is <i>we</i> who suffer, not the wrong doer, from our anger.
        </Text>
        <Accordion allowToggle={true}>
          <Stack gap={2}>
            <AccordionSection title="Who or what is bothering you?">
              <Stack gap={4}>
                <FormControl isRequired>
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
            </AccordionSection>
            <AccordionSection title="And why? What did they do? Not do?">
              <FormControl isRequired>
                <StyledTextInput value={because} setter={setBecause} />
              </FormControl>
            </AccordionSection>
            <AccordionSection title="How did it affect you? What did it threaten?">
              <FormControl isRequired>
                <CheckboxGroupBox
                  valuesList={affectsMy}
                  options={affects[selectedProgram as keyof typeof affects]}
                  setter={setAffectsMy}
                />
              </FormControl>
            </AccordionSection>
            <AccordionSection title="What part did you play in this?">
              <FormControl isRequired>
                <CheckboxGroupBox
                  valuesList={myPart}
                  options={myParts[selectedProgram as keyof typeof myParts]}
                  setter={setMyPart}
                />
              </FormControl>
            </AccordionSection>
            <AccordionSection title="What did you do well?">
              <FormControl isRequired>
                <CheckboxGroupBox
                  valuesList={didWell}
                  options={sucesses[selectedProgram as keyof typeof sucesses]}
                  setter={setDidWell}
                />
              </FormControl>
            </AccordionSection>
            <AccordionSection title="Do you see the situation differently now?">
              <FormControl isRequired>
                <StyledTextInput value={learned} setter={setLearned} />
              </FormControl>
            </AccordionSection>
            <Stack width="100%" direction="row" gap={4} justifyContent="center">
              <Button isDisabled={incomplete} colorScheme="purple" name="letGo" onClick={letItGo}>
                Be Free!
              </Button>{' '}
              <Button colorScheme="purple" onClick={neverLetItGo}>
                NEVER!!
              </Button>
            </Stack>
          </Stack>
        </Accordion>
      </PageCard>
      <Box p={4}>
        <Text>
          <b>Your answers can NOT be viewed by anyone but you</b>. When you hit submit, your answers
          will be formatted so that you can copy or print them if you like, and share them with
          whomever you choose.
        </Text>
      </Box>
      <NeverLetGo isOpen={isNever} onClose={onNeverMind} />
    </Stack>
  )
}
export default ResentmentsForm
