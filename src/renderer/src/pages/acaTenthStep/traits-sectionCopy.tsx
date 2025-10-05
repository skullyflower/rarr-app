import { Checkbox, Stack, Text, useColorMode } from '@chakra-ui/react'
import { useMemo } from 'react'
import strings from '@renderer/data/aca-tenth.json'
import ColorBox from '@renderer/components/layout/color-box'
import StyledTextInput from '@renderer/components/form/styledTextInput/StyledTextInput'

const TraitsSection = ({
  selectedTraits,
  setSelectedTraits
}: {
  selectedTraits: Record<string, string | undefined>
  setSelectedTraits: (newval: Record<string, string | undefined>) => void
}): JSX.Element => {
  const { colorMode } = useColorMode()

  const traitList = strings.traitList
  const allquestions = useMemo(() => traitList.map((trait) => trait.Q), [traitList])

  return (
    <Stack gap={4}>
      <Text>Select the ones that apply today.</Text>

      {allquestions.map((q, i) => (
        <ColorBox key={`q-${i}`}>
          <Stack gap={2}>
            <Checkbox
              //alignItems="start"
              border="1px solid"
              borderColor="purple.700"
              color={colorMode === 'dark' ? 'gray.100' : 'purple:700'}
              gap={4}
              borderRadius={7}
              _checked={{ backgroundColor: colorMode === 'dark' ? 'pink.800' : 'gray.50' }}
              _hover={{
                backgroundColor: colorMode === 'dark' ? 'pink.800' : 'gray.50',
                borderColor: 'purple.300'
              }}
              p={2}
              value={q}
              checked={selectedTraits[q] !== undefined}
              onChange={() =>
                setSelectedTraits({
                  ...selectedTraits,
                  [q]: selectedTraits[q] === undefined ? '' : undefined
                })
              }
            >
              {q}
            </Checkbox>
            {selectedTraits && selectedTraits[q] !== undefined && (
              <StyledTextInput
                value={selectedTraits[q] || ''}
                setter={(newVal: string) => setSelectedTraits({ ...selectedTraits, [q]: newVal })}
                placeholder="Write about it."
              />
            )}
          </Stack>
        </ColorBox>
      ))}
    </Stack>
  )
}
export default TraitsSection
