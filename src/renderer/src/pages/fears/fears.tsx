import CopyButton from '@renderer/components/form/copy-button'
import { Accordion, Box, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import PageCard from '@renderer/components/layout/page-card'
import AccordionSection from '@renderer/components/layout/accordion-section'
import SaveButton from '@renderer/components/form/save-button'
import DoubleListerInput, { doubleListItem } from '@renderer/components/form/DoubleListerInput'

function Fears(): JSX.Element {
  const [fearsList, setFearsList] = useState<doubleListItem[]>([])

  const tocopy = `Today I fear, but am grateful for:
  \t ${fearsList.map((pair) => `Fear: ${pair[0]} - Gratitude: ${pair[1]} \n\t `).join('\n\n')}`

  return (
    <Stack gap={4}>
      <Heading as="h2" size="lg" textAlign={'center'} paddingInline={4}>
        What Frightens You, Today?
      </Heading>
      <PageCard>
        <Stack gap={4}>
          <HStack align="start" justifyContent={'space-between'}>
            <Box padding={2}>
              <Text>
                Fear was &apos;an evil and corrosive thread&apos; weaving through our lives.
              </Text>
            </Box>
            <HStack align="start">
              <CopyButton text={tocopy} disabled={!fearsList.length || !fearsList.length} />
              <SaveButton text={tocopy} disabled={!fearsList.length || !fearsList.length} />
            </HStack>
          </HStack>
          <Accordion allowToggle={true} allowMultiple={true} defaultIndex={[0]}>
            <Stack gap={2}>
              <Accordion allowToggle={true} allowMultiple={true} defaultIndex={[0]}>
                <Stack gap={2}>
                  <AccordionSection title="I'm afraid of..., but grateful that...">
                    <DoubleListerInput
                      list={fearsList}
                      labels={['fear', 'gratitude']}
                      setList={setFearsList}
                    />
                  </AccordionSection>
                </Stack>
              </Accordion>
            </Stack>
          </Accordion>
        </Stack>
      </PageCard>
    </Stack>
  )
}
export default Fears
