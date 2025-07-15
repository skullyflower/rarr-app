import { Heading, HStack, ListItem, OrderedList, Stack } from '@chakra-ui/react'
import { steps } from './steps-constants.mjs'
import useProgramDropDown from '@renderer/components/form/useProgramDropDown'
import PageCard from '@renderer/components/layout/page-card'
import ColorBox from '@renderer/components/layout/color-box'

const programOptions = Object.keys(steps)

function TheStepsPage(): JSX.Element {
  const { ProgramDropDown, selectedProgram } = useProgramDropDown(programOptions)

  return (
    <Stack gap={4} width="100%">
      <HStack align={'center'} justify={'center'} gap={4}>
        <Heading textAlign="center" as="h1" size="xl">
          The 12 Steps of
        </Heading>
        <ProgramDropDown />
      </HStack>
      <PageCard>
        <ColorBox>
          <OrderedList p={4}>
            <Stack>
              {steps[selectedProgram].map((step, idx) => (
                <ListItem key={idx} maxW={700} fontSize="xl">
                  {step}
                </ListItem>
              ))}
            </Stack>
          </OrderedList>
        </ColorBox>
      </PageCard>
    </Stack>
  )
}

export default TheStepsPage
