import { Accordion, Box, Button, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import PageCard from '@renderer/components/layout/page-card'
import AccordionSection from '@renderer/components/layout/accordion-section'
import DoubleListerInput, { doubleListItem } from '@renderer/components/form/DoubleListerInput'
import WhatYouWrote from '@renderer/components/WhatYouWrote'
import CollapsingText from '@renderer/components/layout/CollapsingText'
import Privacy from '@renderer/components/Privacy'
import strings from '@renderer/data/serenity.json'

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
        {strings.title}
      </Heading>
      <PageCard>
        <Stack gap={4}>
          <HStack align="start" justifyContent={'space-between'}>
            <Stack gap={4} padding={4} width={'100%'}>
              <Text paddingInlineStart={2}>{strings.subHeading}</Text>
              <CollapsingText>
                <Stack gap={4}>
                  {strings.collapsedText.map((line, i) => (
                    <Text key={`serene-${i}`} paddingInlineStart={2}>
                      {line}
                    </Text>
                  ))}
                </Stack>
              </CollapsingText>
            </Stack>
          </HStack>
          <Accordion allowToggle={true} defaultIndex={[0]}>
            <Stack gap={2}>
              <AccordionSection title={strings.accordionHeading}>
                <DoubleListerInput
                  list={canCannotControl}
                  setList={setCanCannotControl}
                  labels={[strings.labels[0], strings.labels[1]]}
                />
              </AccordionSection>
            </Stack>
          </Accordion>
          <Box fontSize={'large'} padding={4}>
            {strings.prayer.map((line, i) => (
              <Text key={`pray-${i}`}>{line}</Text>
            ))}
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
