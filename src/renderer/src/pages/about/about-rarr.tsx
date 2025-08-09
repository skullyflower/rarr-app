import { Accordion, Heading, Stack, Text } from '@chakra-ui/react'
import AccordionSection from '@renderer/components/layout/accordion-section'
import ColorBox from '@renderer/components/layout/color-box'
import PageCard from '@renderer/components/layout/page-card'

function AboutRarr(): JSX.Element {
  return (
    <Stack gap={2}>
      <Heading as="h2" size="lg" textAlign="center">
        About RARR
      </Heading>
      <PageCard>
        <Stack gap={4}>
          <ColorBox>
            <Text fontSize={'lg'} fontWeight={'bold'}>
              Rarr is a safe place for dangerous creatures.
            </Text>
            <Text></Text>
          </ColorBox>
          <Heading as="h3" size="md">
            Questions and Answers
          </Heading>
          <Accordion allowToggle={true} allowMultiple={true} defaultIndex={[0]}>
            <AccordionSection title="Is RARR an anonymous program?">
              <Text></Text>
            </AccordionSection>
          </Accordion>
        </Stack>
      </PageCard>
    </Stack>
  )
}
export default AboutRarr
