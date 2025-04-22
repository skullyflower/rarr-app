import CopyButton from '@renderer/components/form/copy-button'
import { Accordion, Box, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import PageCard from '@renderer/components/layout/page-card'
import AccordionSection from '@renderer/components/layout/accordion-section'
import ListerInput from '@renderer/components/form/ListerInput'
import SaveButton from '@renderer/components/form/save-button'

function SerenityCheckIn(): JSX.Element {
  const [canNotControl, setCanNotControl] = useState<string[]>([])
  const [canControl, setCanControl] = useState<string[]>([])

  const tocopy = `Today I am trying to control that I cannot control:
  \t- ${canNotControl.join(', \n\t- ')}
  I could and probably should: 
  \t- ${canControl.join(', \n\t- ')}`

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
            <HStack align="start">
              <CopyButton text={tocopy} disabled={!canControl.length || !canNotControl.length} />
              <SaveButton text={tocopy} disabled={!canControl.length || !canNotControl.length} />
            </HStack>
          </HStack>
          <Accordion allowToggle={true} allowMultiple={true}>
            <Stack gap={2}>
              <AccordionSection title="What are you trying to control that you cannot control?">
                <ListerInput
                  list={canNotControl}
                  setList={setCanNotControl}
                  placeholder="Something you cannot control..."
                />
              </AccordionSection>
              <AccordionSection title="What are avoiding that you actually could do?">
                <ListerInput
                  list={canControl}
                  setList={setCanControl}
                  placeholder="Something you could do..."
                />
              </AccordionSection>
            </Stack>
          </Accordion>
        </Stack>
      </PageCard>
    </Stack>
  )
}
export default SerenityCheckIn
