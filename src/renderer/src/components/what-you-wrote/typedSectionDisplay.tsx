import { Box, HStack, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react'
import { isTypedSectionEmpty, type TypedSection } from './typedSection'

function TypedSectionDisplay({ section: s }: { section: TypedSection }): JSX.Element | null {
  if (isTypedSectionEmpty(s)) return null

  switch (s.kind) {
    case 'plainBlock':
      return (
        <Box>
          <Text fontWeight={700} paddingBottom={4}>
            {s.displayHeading}
          </Text>
          <Box paddingInlineStart={4}>
            <Text style={s.preWrap ? { whiteSpace: 'pre-wrap' } : undefined}>{s.body}</Text>
          </Box>
        </Box>
      )
    case 'bulletList': {
      const items = s.normalizeUnderscores ? s.items.map((i) => i.replaceAll('_', ' ')) : s.items
      return (
        <Box>
          <Text fontWeight={700} paddingBottom={4}>
            {s.displayHeading}
          </Text>
          <UnorderedList paddingInlineStart={4}>
            {items.map((one, indx) => (
              <ListItem key={`${s.id}-${indx}`}>{one}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      )
    }
    case 'qaPairs':
      return (
        <Box>
          <Text fontWeight={700} paddingBottom={4}>
            {s.displayHeading}
          </Text>
          <UnorderedList paddingInlineStart={4}>
            {s.pairs.map((one, indx) => (
              <ListItem key={`${s.id}-${indx}`}>
                <Text>{one[0]}</Text>
                <Text>{one[1]}</Text>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      )
    case 'acaTraitQs':
      return (
        <Box>
          <Text fontWeight={700} paddingBottom={4}>
            Traits I had today:
          </Text>
          <UnorderedList paddingInlineStart={4}>
            {s.traitQs.map((one, indx) => (
              <ListItem key={`${s.id}-${indx}`}>{one.replaceAll('_', ' ')}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      )
    case 'choiceLevel':
      return (
        <Box>
          <Text fontWeight={700} paddingBottom={4}>
            Today&apos;s Choice Level:
          </Text>
          <Text fontWeight={500} paddingBottom={4}>
            {s.body}
          </Text>
        </Box>
      )
    case 'feelingStatement':
      return (
        <Box>
          <Text fontWeight={700} paddingBottom={4}>
            Today&apos;s Feeling Statement:
          </Text>
          <Text fontWeight={500} paddingBottom={4}>
            {s.body}
          </Text>
        </Box>
      )
    case 'affirmationBullets':
      return (
        <Box>
          <Text fontWeight={700} paddingBottom={4}>
            {s.displayHeading}
          </Text>
          <UnorderedList paddingInlineStart={4}>
            {s.items.map((one, indx) => (
              <ListItem key={`${s.id}-${indx}`}>{`I am ${one.replaceAll('_', ' ')}`}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      )
    case 'controlPairs':
      return (
        <Box>
          <Text fontWeight={700} paddingBottom={4}>
            {s.displayHeading}
          </Text>
          {s.pairs.map((value, index) => (
            <HStack key={`${s.id}-${index}`} justifyContent="space-between" gap={2} wrap="wrap">
              <Text>I want to control but cannot: {value[0]}</Text>
              <Text>What I could do: {value[1]}</Text>
            </HStack>
          ))}
        </Box>
      )
    case 'fearPairs':
      return (
        <Stack gap={2}>
          <Text fontWeight={700} paddingBottom={4}>
            {s.displayHeading}
          </Text>
          {s.pairs.map((value, index) => (
            <Stack key={`${s.id}-${index}`} gap={2}>
              <Text>I fear: {value[0]}</Text>
              <Text>but am grateful: {value[1]}</Text>
            </Stack>
          ))}
        </Stack>
      )
    case 'gratefulLines':
      return (
        <Box>
          {s.lines.map((value, index) => (
            <HStack key={`${s.id}-${index}`} justifyContent="space-between" gap={2} wrap="wrap">
              <Text>and grateful: {value}</Text>
            </HStack>
          ))}
        </Box>
      )
    case 'characterBullets':
      return (
        <Box>
          <Text fontWeight={700} paddingBottom={4}>
            {s.variant === 'defects'
              ? 'Character Defects for today:'
              : 'Character Assets for today:'}
          </Text>
          <UnorderedList paddingInlineStart={4}>
            {s.items.map((one, indx) => (
              <ListItem key={`${s.id}-${indx}`}>{one}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      )
    default: {
      const _x: never = s
      return _x
    }
  }
}

export function TypedSectionsDisplay({ sections }: { sections: TypedSection[] }): JSX.Element {
  return (
    <>
      {sections.map((s) => (
        <Box key={s.id}>
          <TypedSectionDisplay section={s} />
        </Box>
      ))}
    </>
  )
}

export { TypedSectionDisplay }
