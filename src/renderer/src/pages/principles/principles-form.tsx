import { useState } from 'react'
import {
  Slider,
  SliderFilledTrack,
  SliderTrack,
  SliderThumb,
  HStack,
  Text,
  Heading,
  Stack,
  Box,
  Textarea,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SliderMark
} from '@chakra-ui/react'
import { copyContents } from '@renderer/pages/resentments/copyContents.mjs'
import { OneStep, StepCheckList } from './principles-constants'
import { steps } from '@renderer/pages/steps/steps-constants.mjs'
import useProgramDropDown from '@renderer/hooks/useProgramDropDown'

interface stepValue {
  percent: number
  more: string
}

interface StepBoxProps extends OneStep {
  stepString?: string
  onChange: (newValue: { percent: number; more: string }) => () => void
  value: stepValue
}

const programOptions = Object.keys(StepCheckList)

const initialState: Record<string, stepValue> = {
  '1': { percent: 50, more: '' },
  '2': { percent: 50, more: '' },
  '3': { percent: 50, more: '' },
  '4': { percent: 50, more: '' },
  '5': { percent: 50, more: '' },
  '6': { percent: 50, more: '' },
  '7': { percent: 50, more: '' },
  '8': { percent: 50, more: '' },
  '9': { percent: 50, more: '' },
  '10': { percent: 50, more: '' },
  '11': { percent: 50, more: '' },
  '12': { percent: 50, more: '' }
}

const StepBox = ({
  step,
  stepString,
  principle,
  opposite,
  value,
  onChange
}: StepBoxProps): JSX.Element => {
  const { percent, more } = value

  return (
    <Box bgColor={'blackAlpha.100'} borderRadius={6} p={2}>
      <Stack gap={4}>
        <HStack
          maxW={'70%'}
          marginInline={'auto'}
          justifyItems={'start'}
          alignItems={'flex-start'}
          gap={4}
        >
          <Heading minW="fit-content" size={'md'}>
            Step {step} :
          </Heading>{' '}
          <Box flexShrink={2}>{stepString}</Box>
        </HStack>
        <HStack gap={4}>
          <Stack gap={2} textAlign={'center'}>
            <Button
              w="90%"
              marginInline={'auto'}
              padding={2}
              m={2}
              fontSize={20}
              borderRadius={10}
              colorScheme="green"
              onClick={onChange({ ...value, percent: percent + 5 })}
              textAlign="center"
            >
              {principle}
            </Button>
            <Text textAlign="center">{percent}%</Text>
          </Stack>
          <Slider
            aria-label="slider-ex-5"
            step={5}
            value={percent}
            onChange={(val) => onChange({ ...value, percent: val })()}
          >
            <SliderMark
              value={percent}
              textAlign="center"
              bg="purple.500"
              color="white"
              mt="-10"
              ml="-3"
              w="12"
            >
              {percent}%
            </SliderMark>

            <SliderTrack backgroundColor="red.400" w={3}>
              <SliderFilledTrack backgroundColor="green.400" />
            </SliderTrack>
            <SliderThumb w={6} h={6} />
          </Slider>
          <Stack gap={2} textAlign={'center'}>
            <Button
              w="90%"
              marginInline={'auto'}
              padding={2}
              m={2}
              fontSize={14}
              borderRadius={10}
              colorScheme="red"
              onClick={onChange({ ...value, percent: percent - 5 })}
              textAlign="center"
            >
              {opposite}
            </Button>
            <Text>{100 - percent}%</Text>
          </Stack>
        </HStack>
        <Textarea
          colorScheme="purple"
          value={more}
          onChange={({ target }) => onChange({ ...value, more: target.value })()}
          placeholder="Tell me more..."
        />
      </Stack>
    </Box>
  )
}

const SpotCheckForm = (): JSX.Element => {
  const [values, setValues] = useState(initialState)
  const [done, setDone] = useState(false)
  const [copied, setCopied] = useState(false)
  const { ProgramDropDown, selectedProgram } = useProgramDropDown(programOptions)
  const stepText = steps[selectedProgram]
  const updateOneStep =
    (step: number) => (newValue: { percent: number; more: string }) => (): void => {
      setValues({ ...values, [`${step}`]: newValue })
    }

  if (done) {
    return (
      <Card
        bg="pink.900"
        color="purple.300"
        border="1px solid"
        size="lg"
        maxW={800}
        marginInline="auto"
        marginBlock={4}
      >
        <CardHeader>
          <HStack justifyContent="space-between">
            <Text>Here is what you wrote.</Text>
            <Button onClick={() => setCopied(copyContents())}>{copied ? 'copied' : 'copy'}</Button>
          </HStack>
        </CardHeader>
        <CardBody border="1px solid">
          <Stack gap={4} id="ToCopy">
            {Object.entries(values).map((value) => {
              const step = StepCheckList[selectedProgram].find(
                (step) => String(step.step) === value[0]
              )
              return (
                <Box key={step?.principle}>
                  <Text>{`Step ${step?.step}: ${value[1].percent}% ${step?.principle}`}</Text>
                  <Text>{value[1].more}</Text>
                </Box>
              )
            })}
          </Stack>
        </CardBody>
        <CardFooter>
          <Button onClick={() => window.location.reload()}>Start Over</Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Stack gap={4}>
      <HStack align="center" justify={'center'} gap={4}>
        <Heading as="h2" size="lg">
          The principles of the Steps
        </Heading>
        <ProgramDropDown />
        <Text>{`So, how'd we do today?`}</Text>
      </HStack>
      <Box backgroundColor="blue.900" border={['none', '1px solid']} borderRadius={15} p={4}>
        <Stack gap={4}>
          {StepCheckList[selectedProgram].map((step) => (
            <StepBox
              key={step.step}
              step={step.step}
              stepString={stepText[step.step - 1]}
              principle={step.principle}
              opposite={step.opposite}
              value={values[String(step.step)]}
              onChange={updateOneStep(step.step)}
            />
          ))}
        </Stack>
        <HStack width="100%" gap={4} justifyContent="center">
          <Button
            disabled={false}
            colorScheme="primary"
            name="letGo"
            onClick={() => {
              setDone(true)
            }}
          >
            See Results
          </Button>{' '}
          <Button
            colorScheme="red"
            onClick={() => {
              setValues(initialState)
            }}
          >
            Reset
          </Button>
        </HStack>
      </Box>
    </Stack>
  )
}
export default SpotCheckForm
