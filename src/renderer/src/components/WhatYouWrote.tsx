import {
  Box,
  Button,
  CloseButton,
  Heading,
  HStack,
  ListItem,
  Stack,
  Text,
  UnorderedList
} from '@chakra-ui/react'
import SaveButton from '@renderer/components/buttons/save-button'
import CopyButton from '@renderer/components/buttons/copy-button'
import { doubleListItem } from './form/DoubleListerInput'
import PageCard from './layout/page-card'
import ColorBox from './layout/color-box'
import strings from '@renderer/data/aca-tenth.json'
import ReadyToLetGo from './form/ready-to-let-go'
import { useState } from 'react'

interface WhatYouWroteProps {
  reset: () => void
  praise?: string[]
  freedomText?: string
  feelingsSentence?: string
  listOfTools?: string[]
  traitQs?: string[]
  selectedTraits?: Record<string, string | undefined>
  canCannotControl?: doubleListItem[]
  fearsList?: doubleListItem[]
  gradteful?: string[]
  llTraits?: string[]
  selectedQuestions?: Record<string, string | undefined>
  characterAssets?: string[]
  characterDefects?: string[]
}

function WhatYouWrote({
  reset,
  praise,
  freedomText,
  feelingsSentence,
  listOfTools,
  traitQs,
  selectedTraits,
  canCannotControl,
  fearsList,
  gradteful,
  llTraits,
  selectedQuestions,
  characterAssets,
  characterDefects
}: WhatYouWroteProps): JSX.Element {
  const [isLettingGo, setIsLettingGo] = useState(true)
  const traitList = strings.traitList
  const traitAnswers = selectedTraits
    ? Object.entries(selectedTraits).filter((e) => e[1] !== undefined)
    : []
  const questionAnswers = selectedQuestions
    ? Object.entries(selectedQuestions).filter((e) => e[1] !== undefined)
    : []
  const setAfromQ = (Qs: string[]): string => {
    const TraitAs: string[] = []
    Qs.forEach((Q) => {
      const trait = traitList.find((trait) => trait.Q === Q)
      const answer = trait ? trait.A : ''
      TraitAs.push(answer)
    })
    return TraitAs.join('\n\t• ')
  }

  const toCopy = (): string => {
    const toCopyStrings: string[] = []
    if (traitQs && traitQs.length > 0) {
      toCopyStrings.push(`ACAD Traits I had today:\n\t• ${setAfromQ(traitQs)}`)
    }
    if (traitAnswers && traitAnswers.length > 0) {
      toCopyStrings.push(
        `Traits I had today:\n ${traitAnswers
          .map((trait) => `\t• ${trait[0]}\n\t ${trait[1]}`)
          .join('\n\n')}\n`
      )
    }
    if (llTraits && llTraits.length > 0) {
      toCopyStrings.push(`Laundry List / Other Laundry List:\n\t• ${llTraits.join(',\n\t• ')}`)
    }
    if (freedomText) {
      toCopyStrings.push(`Choice Level:\nToday I was capable of: ${freedomText}`)
    }
    if (feelingsSentence) {
      toCopyStrings.push(`Today's Feeling Statement:\n\t${feelingsSentence}`)
    }
    if (listOfTools && listOfTools.length > 0) {
      toCopyStrings.push(`Recovery Tools just for today:\n\t• ${listOfTools.join(', \n\t• ')}`)
    }
    if (praise && praise.length > 0) {
      toCopyStrings.push(`Praise Today: \n\t• I am ${praise.join(',\n\t• I am ')}`)
    }
    if (canCannotControl && canCannotControl.length > 0) {
      toCopyStrings.push(
        `Control:\n\t ${canCannotControl
          .map((pair) => {
            return ` Today I want to control, but cannot control:\n\t ${pair[0]}\n   While I could and probably should: \n\t ${pair[1]}`
          })
          .join('\n\n')}`
      )
    }
    if (fearsList && fearsList.length > 0) {
      toCopyStrings.push(
        `Today I fear:\n ${fearsList
          .map((pair) => {
            return `\t• Fear: ${pair[0]}\n\t\tBut grateful: ${pair[1]}`
          })
          .join('\n\n')}`
      )
    }
    if (gradteful && gradteful.length > 0) {
      toCopyStrings.push(
        `...and grateful:\n ${gradteful
          .map((grat) => {
            return `\t• ${grat}`
          })
          .join('\n')}`
      )
    }
    if (questionAnswers && questionAnswers.length > 0) {
      toCopyStrings.push(
        `Alanon Spot Check for today:\n ${questionAnswers.map((q) => `\t• ${q[0]}\n\t ${q[1]}`).join('\n\n ')}\n`
      )
    }
    if (characterDefects && characterDefects.length > 0) {
      toCopyStrings.push(`Character Defects for today:\n ${characterDefects.join('\n\t• ')}\n`)
    }
    if (characterAssets && characterAssets.length > 0) {
      toCopyStrings.push(`Character Assets for today:\n ${characterAssets.join('\n\t• ')}\n`)
    }
    return toCopyStrings.join('\n\n')
  }

  const stringToWrite = toCopy()

  return (
    <PageCard
      header={
        <HStack justifyContent="space-between" align="center" width="100%">
          <Heading fontSize={'h3'} fontWeight={700}>
            Here is what you wrote.
          </Heading>
          <HStack gap={4}>
            <CopyButton text={stringToWrite} />
            {Boolean(window.api) && <SaveButton text={stringToWrite} bigbutton={true} />}
            <CloseButton onClick={reset} />
          </HStack>
        </HStack>
      }
    >
      <ColorBox>
        <Stack gap={4}>
          <Stack gap={4} id="ToCopy">
            {llTraits && llTraits.length > 0 && (
              <Box>
                <Text fontWeight={700} paddingBottom={4}>
                  Laundry List and Other Laundry List traits I had today:
                </Text>
                <UnorderedList paddingInlineStart={4}>
                  {llTraits.flat().map((one, indx) => (
                    <ListItem key={`lltraits${indx}`}>{one.replaceAll('_', ' ')}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            )}
            {traitQs && traitQs.length > 0 && (
              <Box>
                <Text fontWeight={700} paddingBottom={4}>
                  Traits I had today:
                </Text>
                <UnorderedList paddingInlineStart={4}>
                  {traitQs.map((one, indx) => (
                    <ListItem key={`traits${indx}`}>{one.replaceAll('_', ' ')}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            )}
            {traitAnswers && traitAnswers.length && (
              <Box>
                <Text fontWeight={700} paddingBottom={4}>
                  Traits I had today:
                </Text>
                <UnorderedList paddingInlineStart={4}>
                  {traitAnswers.map((one, indx) => (
                    <ListItem key={`traits${indx}`}>
                      <Text>{one[0]}</Text>
                      <Text>{one[1]}</Text>
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
            )}
            {questionAnswers && questionAnswers.length > 0 && (
              <Box>
                <Text fontWeight={700} paddingBottom={4}>
                  Alanon Spot Check for today:
                </Text>
                <UnorderedList paddingInlineStart={4}>
                  {questionAnswers.map((one, indx) => (
                    <ListItem key={`question${indx}`}>
                      <Text>{one[0]}</Text>
                      <Text>{one[1]}</Text>
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
            )}
            {characterAssets && characterAssets.length > 0 && (
              <Box>
                <Text fontWeight={700} paddingBottom={4}>
                  Character Assets for today:
                </Text>
                <UnorderedList paddingInlineStart={4}>
                  {characterAssets.map((one, indx) => (
                    <ListItem key={`characterAsset${indx}`}>{one}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            )}
            {characterDefects && characterDefects.length > 0 && (
              <Box>
                <Text fontWeight={700} paddingBottom={4}>
                  Character Defects for today:
                </Text>
                <UnorderedList paddingInlineStart={4}>
                  {characterDefects.map((one, indx) => (
                    <ListItem key={`characterDefect${indx}`}>{one}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            )}
            {freedomText && (
              <Box>
                <Text fontWeight={700} paddingBottom={4}>
                  Today&apos;s Choice Level:
                </Text>
                <Text fontWeight={500} paddingBottom={4}>
                  {freedomText}
                </Text>
              </Box>
            )}
            {feelingsSentence && (
              <Box>
                <Text fontWeight={700} paddingBottom={4}>
                  Today&apos;s Feeling Statement:
                </Text>
                <Text fontWeight={500} paddingBottom={4}>
                  {feelingsSentence}
                </Text>
              </Box>
            )}
            {listOfTools && listOfTools.length > 0 && (
              <Box>
                <Text fontWeight={700} paddingBottom={4}>
                  Tools I used today:
                </Text>
                <UnorderedList paddingInlineStart={4}>
                  {listOfTools.map((one, indx) => (
                    <ListItem key={`tool${indx}`}>{one.replaceAll('_', ' ')}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            )}
            {praise && praise.length > 0 && (
              <Box>
                <Text fontWeight={700} paddingBottom={4}>
                  Today&apos;s Affirmations:
                </Text>
                <UnorderedList paddingInlineStart={4}>
                  {praise.map((one, indx) => (
                    <ListItem key={`praise${indx}`}>{`I am ${one.replaceAll('_', ' ')}`}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            )}
            {canCannotControl && canCannotControl.length > 0 && (
              <Box>
                <Text fontWeight={700} paddingBottom={4}>
                  My (lack of) Serentity today:
                </Text>
                {canCannotControl.map(
                  (value, index): JSX.Element => (
                    <HStack key={index} justifyContent={'space-between'} gap={2} wrap={'wrap'}>
                      <Text>I want to control but cannot: {value[0]}</Text>
                      <Text>What I could do: {value[1]}</Text>
                    </HStack>
                  )
                )}
              </Box>
            )}
            {fearsList && fearsList.length > 0 && (
              <Stack gap={2}>
                <Text fontWeight={700} paddingBottom={4}>
                  Today&apos;s fears:
                </Text>
                {fearsList.map(
                  (value, index): JSX.Element => (
                    <Stack key={`fear-${index}`} gap={2}>
                      <Text>I fear: {value[0]}</Text>
                      <Text>but am grateful: {value[1]}</Text>
                    </Stack>
                  )
                )}
              </Stack>
            )}
            {gradteful && gradteful.length > 0 && (
              <Box>
                {gradteful.map(
                  (value, index): JSX.Element => (
                    <HStack key={index} justifyContent={'space-between'} gap={2} wrap={'wrap'}>
                      <Text>and grateful: {value}</Text>
                    </HStack>
                  )
                )}
              </Box>
            )}
          </Stack>
          <Box textAlign="center">
            <Button onClick={reset}>Start Over</Button>
          </Box>
        </Stack>
      </ColorBox>
      <ReadyToLetGo isOpen={isLettingGo} onClose={() => setIsLettingGo(false)} />
    </PageCard>
  )
}
export default WhatYouWrote
