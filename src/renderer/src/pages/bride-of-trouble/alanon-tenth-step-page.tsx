import { Accordion, Button, Link, Stack, Text } from '@chakra-ui/react'
import AccordionSection from '@renderer/components/layout/accordion-section'
import PageCard from '@renderer/components/layout/page-card'
import { useState } from 'react'
import WhatYouWrote from '@renderer/components/WhatYouWrote'
import CollapsingText from '@renderer/components/layout/CollapsingText'
import Privacy from '@renderer/components/Privacy'
import strings from '@renderer/data/alanon-tenth.json'
import QuestionsSection from '@renderer/components/shared-forms/QuestionsSection'
import CharacterAssetsSection from '@renderer/components/shared-forms/CharacterAssetsSection'
import CharacterDefectsSection from '@renderer/components/shared-forms/CharacterDefectsSection'

function AlanonTenthStep(): JSX.Element {
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
        selectedQuestions={selectedQuestions}
        characterAssets={characterAssets}
        characterDefects={characterDefects}
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
              <Text fontSize={'lg'}>{strings.pageText.collapsedText[0]}</Text>
              <Text>{strings.pageText.collapsedText[1]}</Text>
              <Text>
                For more information visit:{' '}
                <Link href="https://al-anon.org" rel="no-follow" target="literature">
                  al-anon.org
                </Link>
              </Text>
            </Stack>
          </CollapsingText>
          <Accordion allowToggle={true}>
            <Stack gap={2}>
              <AccordionSection title="Exercise 1: Questions ">
                <QuestionsSection
                  selectedQuestions={selectedQuestions}
                  setSelectedQuestions={setSelectedQuestions}
                />
              </AccordionSection>
              <AccordionSection title="Exercise 2: Character Defects ">
                <CharacterDefectsSection
                  characterDefects={characterDefects}
                  setCharacterDefects={setCharacterDefects}
                />
              </AccordionSection>
              <AccordionSection title="Exercise 3: Character Assets ">
                <CharacterAssetsSection
                  characterAssets={characterAssets}
                  setCharacterAssets={setCharacterAssets}
                />
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
      <Privacy />
    </Stack>
  )
}
export default AlanonTenthStep
