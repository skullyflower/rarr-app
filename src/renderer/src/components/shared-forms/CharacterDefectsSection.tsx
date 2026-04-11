import { Stack, Text } from '@chakra-ui/react'
import CheckboxGroupBox from '@renderer/components/form/CheckBoxGroupBox'
import strings from '@renderer/data/alanon-tenth.json'
const CharacterDefectsSection = ({
  characterDefects,
  setCharacterDefects
}: {
  characterDefects: string[]
  setCharacterDefects: (value: string[]) => void
}): JSX.Element => {
  const defects = strings.characterDefects
  return (
    <Stack gap={4}>
      <Text>What negative traits did I exhibit today?</Text>
      <CheckboxGroupBox
        valuesList={characterDefects}
        options={defects}
        setter={setCharacterDefects}
      />
    </Stack>
  )
}
export default CharacterDefectsSection
