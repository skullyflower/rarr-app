import { Accordion, Box, Button, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import PageCard from '@renderer/components/layout/page-card'
import AccordionSection from '@renderer/components/layout/accordion-section'
import DoubleListerInput, { doubleListItem } from '@renderer/components/form/DoubleListerInput'
import WhatYouWrote from '@renderer/components/WhatYouWrote'
import CollapsingText from '@renderer/components/layout/CollapsingText'
import Privacy from '@renderer/components/Privacy'

function SerenityCheckIn(): JSX.Element {
  const [letGo, setLetGo] = useState(false)
  const [canCannotControl, setCanCannotControl] = useState<doubleListItem[]>([])

  const reset = (): void => {
    setLetGo(false)
    setCanCannotControl([])
  }

  if (letGo) {
    return <WhatYouWrote reset={reset} canCannotControl={canCannotControl} />
  }

  return (
    <Stack gap={4} width="100%">
      <Heading as="h2" size="lg" textAlign={'center'} paddingInline={4}>
        Control : Let the Serentiy Prayer free you.
      </Heading>
      <PageCard>
        <Stack gap={4}>
          <HStack align="start" justifyContent={'space-between'}>
            <Stack gap={4} padding={4} width={'100%'}>
              <Text paddingInlineStart={2}>
                All too often, our efforts are directed in the wrong direction.
              </Text>
              <CollapsingText>
                <Stack gap={4}>
                  <Text paddingInlineStart={2}>
                    We want other people to think or act a certain way. We want bright futures and
                    specific outcomes. We want trouble to never find us.
                  </Text>
                  <Text paddingInlineStart={2}>
                    Our extreme willfulness actually works against us. We think so intensely about
                    how things must go, that we neglect to act. Conversely, we sometimes will work
                    very hard towards a specific goal, but our vision is so limited and inflexible
                    that we reject better opportunities.
                  </Text>
                  <Text paddingInlineStart={2}>
                    Example: You want to do well at an interview so badly that you haven&apos;t
                    bathed, studied or slept.
                  </Text>
                </Stack>
              </CollapsingText>
            </Stack>
          </HStack>
          <Accordion allowToggle={true} allowMultiple={true} defaultIndex={[0]}>
            <Stack gap={2}>
              <AccordionSection title="What are you trying to control that you cannot control?">
                <DoubleListerInput
                  list={canCannotControl}
                  setList={setCanCannotControl}
                  labels={['I cannot control', 'But I could ']}
                />
              </AccordionSection>
            </Stack>
          </Accordion>
          <Box fontSize={'large'} padding={4}>
            <Text>Grant me the serenity to accept the things I cannot change.</Text>
            <Text> Courage to change the things I can.</Text>
            <Text> And wisdom to know the difference.</Text>
          </Box>
          <Stack
            width="100%"
            direction="row"
            gap={4}
            justifyContent="center"
            position={'sticky'}
            bottom={2}
          >
            <Button
              isDisabled={canCannotControl.length === 0}
              colorScheme="purple"
              name="letGo"
              onClick={() => setLetGo(true)}
            >
              Be Free!
            </Button>
          </Stack>
        </Stack>
      </PageCard>
      <Privacy />
    </Stack>
  )
}
export default SerenityCheckIn
