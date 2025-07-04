import CheckboxGroupBox from '@renderer/components/form/CheckBoxGroupBox'
import { HStack, Stack, Text } from '@chakra-ui/react'
import { useMemo } from 'react'
import { traitList } from './aca-tenth-constants.d'
import CopyButton from '@renderer/components/buttons/copy-button'
import SaveButton from '@renderer/components/buttons/save-button'

const TraitsSection = ({
  traitQs,
  setTraitQs
}: {
  traitQs: string[]
  setTraitQs: (value: string[]) => void
}): JSX.Element => {
  const allquestions = useMemo(() => traitList.map((trait) => trait.Q), [])
  const setAfromQ = (Qs: string[]): string => {
    const TraitAs: string[] = []
    Qs.forEach((Q) => {
      const trait = traitList.find((trait) => trait.Q === Q)
      const answer = trait ? trait.A : ''
      TraitAs.push(answer)
    })
    return TraitAs.join('\n\t• ')
  }

  const tocopy = `Traits I had today:\n\t• ${setAfromQ(traitQs)}`

  return (
    <Stack gap={4}>
      <HStack justifyContent={'space-between'}>
        <Text>Select the ones that apply today.</Text>
        <HStack gap={2}>
          <CopyButton text={tocopy} disabled={traitQs.length === 0} />
          <SaveButton text={tocopy} disabled={traitQs.length === 0} />
        </HStack>
      </HStack>
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
