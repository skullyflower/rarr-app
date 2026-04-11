import { Stack, Text } from '@chakra-ui/react'
import CheckboxGroupBox from '@renderer/components/form/CheckBoxGroupBox'
import strings from '@renderer/data/alanon-tenth.json'

const CharacterAssetsSection = ({
  characterAssets,
  setCharacterAssets
}: {
  characterAssets: string[]
  setCharacterAssets: (value: string[]) => void
}): JSX.Element => {
  const assets = strings.CharacterAssets
  return (
    <Stack gap={4}>
      <Text>What positive traits did I exhibit today?</Text>
      <CheckboxGroupBox valuesList={characterAssets} options={assets} setter={setCharacterAssets} />
    </Stack>
  )
}
export default CharacterAssetsSection
