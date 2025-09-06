import { Accordion, Heading, Stack, Text } from '@chakra-ui/react'
import GetImage from '@renderer/components/GetImage'
import AccordionSection from '@renderer/components/layout/accordion-section'
import ColorBox from '@renderer/components/layout/color-box'
import PageCard from '@renderer/components/layout/page-card'
import about from '@renderer/data/about.json'

function AboutRarr(): JSX.Element {
  return (
    <Stack gap={2}>
      <Heading as="h2" size="lg" textAlign="center">
        {about.pageText.title}
      </Heading>
      <PageCard>
        <Stack gap={4}>
          <ColorBox>
            <Text fontSize={'lg'} fontWeight={'bold'}>
              {about.pageText.subTitle}
            </Text>
            {about.aboutText.map((line, i) => (
              <Text key={`about-p-${i}`} marginBlock={'15px'}>
                {line}
              </Text>
            ))}
          </ColorBox>
          <Heading as="h3" size="md">
            Questions and Answers
          </Heading>
          <Accordion allowToggle={true}>
            <Stack gap={2}>
              {about.faqs.map((faq, i) => (
                <AccordionSection key={`faq-${i}`} title={faq.Q}>
                  <Stack gap={2} alignItems={'center'}>
                    {i === 0 && <GetImage imgPath="WDYT.gif" altText="What do you think?" />}
                    <Text>
                      <div dangerouslySetInnerHTML={{ __html: faq.A }} />
                    </Text>
                    {i === 0 && (
                      <GetImage wide imgPath="fittingIn.jpg" altText="Can never fit in." />
                    )}
                  </Stack>
                </AccordionSection>
              ))}
            </Stack>
          </Accordion>

          <Heading as="h3" size="md">
            Disclaimer
          </Heading>
          {about.disclaimer.map((p, i) => (
            <Text fontSize={'15px'} key={`one-b-d-${i}`}>
              {p}
            </Text>
          ))}
        </Stack>
      </PageCard>
    </Stack>
  )
}
export default AboutRarr
