import CopyButton from '@renderer/components/form/copy-button'
import { Accordion, Box, Button, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import PageCard from '@renderer/components/layout/page-card'
import AccordionSection from '@renderer/components/layout/accordion-section'
import SaveButton from '@renderer/components/form/save-button'
import DoubleListerInput, { doubleListItem } from '@renderer/components/form/DoubleListerInput'
import WhatYouWrote from '@renderer/components/WhatYouWrote'
import CollapsingText from '@renderer/components/layout/CollapsingText'

function Fears(): JSX.Element {
  const [letGo, setLetGo] = useState(false)
  const [fearsList, setFearsList] = useState<doubleListItem[]>([])

  const tocopy = `Today I fear, but am grateful for:
  \t ${fearsList.map((pair) => `Fear: ${pair[0]} - Gratitude: ${pair[1]} \n\t `).join('\n\n')}`

  const reset = (): void => {
    setLetGo(false)
    setFearsList([])
  }

  if (letGo) {
    return <WhatYouWrote reset={reset} fearsList={fearsList} />
  }

  return (
    <Stack gap={4}>
      <Heading as="h2" size="lg" textAlign={'center'} paddingInline={4}>
        What Frightens You Today?
      </Heading>
      <PageCard>
        <Stack gap={4}>
          <HStack align="start" justifyContent={'space-between'}>
            <Box padding={4}>
              <Stack gap={4}>
                <Text fontWeight={700} fontSize={'lg'}>
                  Fear was &quot;an evil and corrosive thread&quot; weaving through our lives.
                </Text>
                <CollapsingText>
                  <Stack gap={4}>
                    <Text>
                      Fears can grow in the dark corners of our minds, coloring our lives and
                      limiting our options.
                    </Text>
                    <Text>
                      It can help to put things into perspective and get you back in the present if
                      admit your fears out and pair them with a related gratitude.
                    </Text>
                    <Text>
                      Example: I&apos;m afraid of dying alone. I&apos;m grateful for my full healthy
                      life.
                    </Text>
                  </Stack>
                </CollapsingText>
              </Stack>
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
                      labels={['I am afraid of', 'but gradteful that']}
                      setList={setFearsList}
                    />
                  </AccordionSection>
                </Stack>
              </Accordion>
            </Stack>
          </Accordion>
          <Stack
            width="100%"
            direction="row"
            gap={4}
            justifyContent="center"
            position={'sticky'}
            bottom={2}
          >
            <Button
              isDisabled={fearsList.length === 0}
              colorScheme="purple"
              name="letGo"
              onClick={() => setLetGo(true)}
            >
              Be Free!
            </Button>
          </Stack>
        </Stack>
      </PageCard>
    </Stack>
  )
}
export default Fears
