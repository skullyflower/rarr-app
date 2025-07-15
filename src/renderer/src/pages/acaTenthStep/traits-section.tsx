import CheckboxGroupBox from '@renderer/components/form/CheckBoxGroupBox'
import { Stack, Text } from '@chakra-ui/react'
import { useMemo } from 'react'
import { traitList } from './aca-tenth-constants.d'

const TraitsSection = ({
  traitQs,
  setTraitQs
}: {
  traitQs: string[]
  setTraitQs: (value: string[]) => void
}): JSX.Element => {
  const allquestions = useMemo(() => traitList.map((trait) => trait.Q), [])

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
