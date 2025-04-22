import { Accordion, Heading, Stack, Text } from '@chakra-ui/react'
import TraitsSection from './traits-section'
import ChoiceSection from './choice-section'
import ToolsUsedToday from './tools-today'
import FeelingsStatement from './feelings-statement'
import AssetsSection from './assets-section'
import GratitudeList from './gratitude-list'
import AccordionSection from '@renderer/components/layout/accordion-section'
import PageCard from '@renderer/components/layout/page-card'

function AcaTenthStep(): JSX.Element {
  return (
    <Stack gap={4} width="100%">
      <Heading textAlign="center" as="h1" size="xl">
        ACA Step 10
      </Heading>
      <PageCard>
        <Stack gap={4}>
          <Text textAlign={'center'} fontWeight={'bold'}>
            Spiritual Principles: Honesty and Discernment
          </Text>
          <Text>
            This is a tool for doing daily inventory. You can fill out all the sections, or just the
            ones that speak to you. <br />
            You can copy your answers, for each section, to send to your fellow traveller, sponsor
            or for your journal.
          </Text>
          <Accordion allowToggle={true}>
            <Stack gap={2}>
              <AccordionSection title="Exercise 1: Traits">
                <TraitsSection />
              </AccordionSection>
              <AccordionSection title="Exercise 2: Choice Continuum">
                <ChoiceSection />
              </AccordionSection>
              <AccordionSection title="Exercise 3: Tools">
                <ToolsUsedToday />
              </AccordionSection>
              <AccordionSection title="Exercise 4: Feelings">
                <FeelingsStatement />
              </AccordionSection>
              <AccordionSection title="Exercise 5: Affirmation">
                <AssetsSection />
              </AccordionSection>
              <AccordionSection title="Exercise 6: Gratitude">
                <GratitudeList />
              </AccordionSection>
            </Stack>
          </Accordion>
        </Stack>
      </PageCard>
    </Stack>
  )
}
export default AcaTenthStep
