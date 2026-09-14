import { Accordion, Button, Link, Stack, Text } from '@chakra-ui/react'
import AccordionSection from '@renderer/components/layout/accordion-section'
import PageCard from '@renderer/components/layout/page-card'
import { useState } from 'react'
import WhatYouWrote from '@renderer/components/WhatYouWrote'
import { createWhatYouWroteSections } from '@renderer/components/what-you-wrote/typedSectionFactories'
import { tenthStepFieldsToTypedSections } from '@renderer/components/what-you-wrote/tenthStepTypedSections'
import CollapsingText from '@renderer/components/layout/CollapsingText'
import strings from '@renderer/data/aa-tenth.json'
import CheckBoxAndText from '@renderer/components/form/CheckBoxAndText'
import CheckboxGroupBox from '@renderer/components/form/CheckBoxGroupBox'

function AaTenthStep(): JSX.Element {
  const [letGo, setLetGo] = useState(false)
  const [selectedQuestions, setSelectedQuestions] = useState<Record<string, string | undefined>>({})
  const [characterAssets, setCharacterAssets] = useState<string[]>([])
  const [characterDefects, setCharacterDefects] = useState<string[]>([])
  const incomplete =
    !Object.values(selectedQuestions).filter((v) => v !== undefined).length &&
    !characterAssets.length &&
    !characterDefects.length

  const reset = (): void => {
    setLetGo(false)
    setSelectedQuestions({})
    setCharacterAssets([])
    setCharacterDefects([])
  }

  if (letGo) {
    return (
      <WhatYouWrote
        reset={reset}
        sections={createWhatYouWroteSections(
          tenthStepFieldsToTypedSections('aa-spot-check', {
            selectedQuestions,
            characterAssets,
            characterDefects
          })
        )}
      />
    )
  }

  return (
    <Stack gap={4} width="100%">
      <PageCard header={strings.pageText.title}>
        <Stack gap={4} width={'100%'}>
          <Text textAlign={'center'} fontWeight={'bold'}>
            {strings.pageText.subTitle}
          </Text>
          <CollapsingText>
            <Stack gap={4}>
              {strings.pageText.collapsedText.map((line, index) => (
                <Text key={index}>{line}</Text>
              ))}
              <Text>
                For more information visit:{' '}
                <Link href="https://www.aa.org" rel="no-follow" target="literature">
                  aa.org
                </Link>
              </Text>
            </Stack>
          </CollapsingText>
          <Accordion allowToggle={true} defaultIndex={0}>
            <Stack gap={2}>
              <AccordionSection title="Exercise 1: Questions ">
                <Stack gap={2}>
                  <Text>Select the ones that apply today.</Text>
                  {strings.questions.map((q, i) => (
                    <CheckBoxAndText
                      key={`q-${i}`}
                      q={q}
                      selected={selectedQuestions}
                      setSelected={setSelectedQuestions}
                    />
                  ))}
                </Stack>
              </AccordionSection>
              <AccordionSection title="Exercise 2: Character Defects ">
                <Stack gap={4}>
                  <Text>What negative traits did I exhibit today?</Text>
                  <CheckboxGroupBox
                    valuesList={characterDefects}
                    options={strings.characterDefects}
                    setter={setCharacterDefects}
                  />
                </Stack>
              </AccordionSection>
              <AccordionSection title="Exercise 3: Character Assets ">
                <Stack gap={4}>
                  <Text>What positive traits did I exhibit today?</Text>
                  <CheckboxGroupBox
                    valuesList={characterAssets}
                    options={strings.CharacterAssets}
                    setter={setCharacterAssets}
                  />
                </Stack>
              </AccordionSection>
            </Stack>
          </Accordion>
          <Stack
            width="100%"
            direction="row"
            justifyContent="center"
            position={'sticky'}
            bottom={-2}
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
export default AaTenthStep
