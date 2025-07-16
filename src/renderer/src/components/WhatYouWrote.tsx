import {
  Box,
  Button,
  Heading,
  HStack,
  ListItem,
  Stack,
  Text,
  UnorderedList
} from '@chakra-ui/react'
import SaveButton from '@renderer/components/buttons/save-button'
import CopyButton from '@renderer/components/buttons/copy-button'
import { traitList } from '@renderer/pages/acaTenthStep/aca-tenth-constants.d'
import { doubleListItem } from './form/DoubleListerInput'
import PageCard from './layout/page-card'
import ColorBox from './layout/color-box'

interface WhatYouWroteProps {
  reset: () => void
  praise?: string[]
  freedomText?: string
  feelingsSentence?: string
  listOfTools?: string[]
  traitQs?: string[]
  canCannotControl?: doubleListItem[]
  fearsList?: doubleListItem[]
  llTraits?: string[]
}

function WhatYouWrote({
  reset,
  praise,
  freedomText,
  feelingsSentence,
  listOfTools,
  traitQs,
  canCannotControl,
  fearsList,
  llTraits
}: WhatYouWroteProps): JSX.Element {
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
      toCopyStrings.push(`Traits I had today:\n\t ${setAfromQ(traitQs)}`)
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
        `Today I want to control, but cannot control:\n\t• ${canCannotControl
          .map((pair) => {
            return `• Today I want to control, but cannot control:\n\t ${pair[0]}\n   While I could and probably should: \n\t ${pair[1]}`
          })
          .join('\n\n')}`
      )
    }
    if (fearsList && fearsList.length > 0) {
      toCopyStrings.push(
        `Today I fear, and am grateful for:\n\t• ${fearsList
          .map((pair) => {
            return `• Today I fear:\n\t ${pair[0]}\n   But am grateful that: \n\t ${pair[1]}`
          })
          .join('\n\n')}`
      )
    }

    return toCopyStrings.join('\n\n')
  }

  const stringToWrite = toCopy()

  return (
    <PageCard>
      <ColorBox>
        <Stack gap={4}>
          <HStack justifyContent="space-between">
            <Heading fontSize={'h3'} fontWeight={700}>
              Here is what you wrote.
            </Heading>
            <HStack gap={4}>
              <CopyButton text={stringToWrite} />
              {Boolean(window.api) && <SaveButton text={stringToWrite} bigbutton={true} />}
            </HStack>
          </HStack>
          <Stack gap={4} id="ToCopy">
            {llTraits && llTraits.length > 0 && (
              <Box>
                <Text fontWeight={700} paddingBottom={4}>
                  Laundry List and Other Laundry List traits I had today:
                </Text>
                <UnorderedList paddingInlineStart={4}>
                  {llTraits.map((one, indx) => (
                    <ListItem key={`lltraits${indx}`}>{one.replace('_', ' ')}</ListItem>
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
                    <ListItem key={`traits${indx}`}>{one.replace('_', ' ')}</ListItem>
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
                    <ListItem key={`tool${indx}`}>{one.replace('_', ' ')}</ListItem>
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
                    <ListItem key={`praise${indx}`}>{one.replace('_', ' ')}</ListItem>
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
              <Box>
                <Text fontWeight={700} paddingBottom={4}>
                  Today&apos;s fears:
                </Text>
                {fearsList.map(
                  (value, index): JSX.Element => (
                    <HStack key={index} justifyContent={'space-between'} gap={2} wrap={'wrap'}>
                      <Text>I fear: {value[0]}</Text>
                      <Text>but am grateful: {value[1]}</Text>
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
    </PageCard>
  )
}
export default WhatYouWrote
