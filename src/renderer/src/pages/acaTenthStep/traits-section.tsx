import CheckboxGroupBox from '@renderer/components/form/CheckBoxGroupBox'
import { Stack, Text } from '@chakra-ui/react'
import { useMemo } from 'react'
import strings from '@renderer/data/aca-tenth.json'

const TraitsSection = ({
  traitQs,
  setTraitQs
}: {
  traitQs: string[]
  setTraitQs: (value: string[]) => void
}): JSX.Element => {
  const traitList = strings.traitList
  const allquestions = useMemo(() => traitList.map((trait) => trait.Q), [traitList])

  return (
    <Stack gap={4}>
      <Text>Select the ones that apply today.</Text>
      <CheckboxGroupBox
        columns={1}
        valuesList={traitQs}
        options={allquestions}
        setter={setTraitQs}
      />
    </Stack>
  )
}
export default TraitsSection
