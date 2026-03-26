import { Stack, Text } from '@chakra-ui/react'
import { useMemo } from 'react'
import strings from '@renderer/data/aca-tenth.json'
import CheckBoxAndText from '@renderer/components/form/CheckBoxAndText'

const TraitsSection = ({
  selectedTraits,
  setSelectedTraits
}: {
  selectedTraits: Record<string, string | undefined>
  setSelectedTraits: (newval: Record<string, string | undefined>) => void
}): JSX.Element => {
  const traitList = strings.traitList
  const allquestions = useMemo(() => traitList.map((trait) => trait.Q), [traitList])

  return (
    <Stack gap={2}>
      <Text>Select the ones that apply today.</Text>
      {allquestions.map((q, i) => (
        <CheckBoxAndText
          key={`q-${i}`}
          q={q}
          selected={selectedTraits}
          setSelected={setSelectedTraits}
        />
      ))}
    </Stack>
  )
}
export default TraitsSection
