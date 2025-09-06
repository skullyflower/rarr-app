import { Accordion, Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import PageCard from '@renderer/components/layout/page-card'
import AccordionSection from '@renderer/components/layout/accordion-section'
import DoubleListerInput, { doubleListItem } from '@renderer/components/form/DoubleListerInput'
import WhatYouWrote from '@renderer/components/WhatYouWrote'
import CollapsingText from '@renderer/components/layout/CollapsingText'
import ListerInput from '@renderer/components/form/ListerInput'
import Privacy from '@renderer/components/Privacy'
import fearText from '@renderer/data/fears.json'

function Fears(): JSX.Element {
  const [letGo, setLetGo] = useState(false)
  const [fearsList, setFearsList] = useState<doubleListItem[]>([])
  const [grateful, setGrateful] = useState<string[]>([])

  const reset = (): void => {
    setLetGo(false)
    setFearsList([])
    setGrateful([])
  }

  if (letGo) {
    return <WhatYouWrote reset={reset} fearsList={fearsList} gradteful={grateful} />
  }

  return (
    <Stack width={'100%'} gap={4}>
      <Heading as="h2" size="lg" textAlign={'center'} paddingInline={4}>
        {fearText.title}
      </Heading>
      <PageCard>
        <Stack gap={4}>
          <Box padding={4}>
            <Stack gap={4}>
              <Text fontWeight={700} fontSize={'lg'}>
                {fearText.subHeading}
              </Text>
              <CollapsingText>
                <Stack gap={4}>
                  {fearText.collapsedText.map((line, i) => (
                    <Text key={`line-${i}`}>{line}</Text>
                  ))}
                </Stack>
              </CollapsingText>
            </Stack>
          </Box>
          <Accordion allowToggle={true} allowMultiple={true} defaultIndex={[0]}>
            <Stack gap={2}>
              <AccordionSection title={fearText.accordionHeading}>
                <DoubleListerInput
                  list={fearsList}
                  labels={[fearText.labelsText[0], fearText.labelsText[1]]}
                  setList={setFearsList}
                />
                <ListerInput
                  list={grateful}
                  placeholder={fearText.placeholder}
                  setList={setGrateful}
                />
              </AccordionSection>
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
      <Privacy />
    </Stack>
  )
}
export default Fears
