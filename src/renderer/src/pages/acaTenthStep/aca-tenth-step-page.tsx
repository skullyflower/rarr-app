import { Accordion, Button, Heading, Stack, Text } from '@chakra-ui/react'
import TraitsSection from './traits-section'
import ChoiceSection from './choice-section'
import ToolsUsedToday from './tools-today'
import FeelingsStatement from './feelings-statement'
import AssetsSection from './assets-section'
import AccordionSection from '@renderer/components/layout/accordion-section'
import PageCard from '@renderer/components/layout/page-card'
import { useState } from 'react'
import WhatYouWrote from '@renderer/components/WhatYouWrote'

function AcaTenthStep(): JSX.Element {
  const [letGo, setLetGo] = useState(false)
  const [praise, setPraise] = useState<string[]>([])
  const [freedomText, setFreedomText] = useState<string>('')
  const [feelingsSentence, setFeelingSentence] = useState<string>('')
  const [listOfTools, setListOfTools] = useState<string[]>([])
  const [traitQs, setTraitQs] = useState<string[]>([])

  const incomplete =
    !praise.length && !freedomText && !feelingsSentence && !listOfTools.length && !traitQs.length

  const reset = (): void => {
    setLetGo(false)
    setPraise([])
    setFreedomText('')
    setFeelingSentence('')
    setListOfTools([])
    setTraitQs([])
  }

  if (letGo) {
    return (
      <WhatYouWrote
        reset={reset}
        praise={praise}
        freedomText={freedomText}
        feelingsSentence={feelingsSentence}
        listOfTools={listOfTools}
        traitQs={traitQs}
      />
    )
  }

  return (
    <Stack gap={4} width="100%">
      <Heading textAlign="center" as="h1" size="xl">
        ACA Style Step 10
      </Heading>
      <PageCard>
        <Stack gap={4}>
          <Text textAlign={'center'} fontWeight={'bold'}>
            Spiritual Principles: Honesty and Discernment
          </Text>
          <Text fontSize={'lg'}>
            &quot;Many of us found that we had several characteristics in common as a result of
            being brought up in an alcoholic or dysfunctional household. &quot;
          </Text>
          <Text>
            This is a tool for doing daily inventory to keep current with our recovery from the
            affects of growing up with disfunction. You can fill out all the sections, or just the
            ones that speak to you.
          </Text>
          <Accordion allowToggle={true}>
            <Stack gap={2}>
              <AccordionSection title="Exercise 1: Traits">
                <TraitsSection traitQs={traitQs} setTraitQs={setTraitQs} />
              </AccordionSection>
              <AccordionSection title="Exercise 2: Choice Continuum">
                <ChoiceSection freedomText={freedomText} setFreedomText={setFreedomText} />
              </AccordionSection>
              <AccordionSection title="Exercise 3: Tools">
                <ToolsUsedToday listOfTools={listOfTools} setListOfTools={setListOfTools} />
              </AccordionSection>
              <AccordionSection title="Exercise 4: Feelings">
                <FeelingsStatement setFeelingSentence={setFeelingSentence} />
              </AccordionSection>
              <AccordionSection title="Exercise 5: Affirmation">
                <AssetsSection praise={praise} setSetPraise={setPraise} />
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
              isDisabled={incomplete}
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
export default AcaTenthStep
