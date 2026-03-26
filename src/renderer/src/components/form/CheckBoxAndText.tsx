import { Box, Checkbox, Stack, useColorMode } from '@chakra-ui/react'
import StyledTextInput from '@renderer/components/form/styledTextInput/StyledTextInput'

const CheckBoxAndText = ({
  q,
  selected,
  setSelected
}: {
  q: string
  selected: Record<string, string | undefined>
  setSelected: (newval: Record<string, string | undefined>) => void
}): JSX.Element => {
  const { colorMode } = useColorMode()

  return (
    <Box paddingBlock={1}>
      <Stack gap={2}>
        <Checkbox
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
          checked={selected[q] !== undefined}
          onChange={() =>
            setSelected({
              ...selected,
              [q]: selected[q] === undefined ? '' : undefined
            })
          }
        >
          {q}
        </Checkbox>
        {selected[q] !== undefined && (
          <StyledTextInput
            value={selected[q] || ''}
            setter={(newVal: string) => setSelected({ ...selected, [q]: newVal })}
            placeholder="Write about it."
          />
        )}
      </Stack>
    </Box>
  )
}

export default CheckBoxAndText
