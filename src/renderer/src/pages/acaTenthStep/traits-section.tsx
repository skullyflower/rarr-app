import CheckboxGroupBox from '@renderer/components/form/CheckBoxGroupBox'
import { HStack, Stack, Text } from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import { traitList } from './aca-tenth-constants.d'
import CopyButton from '@renderer/components/form/copy-button'
import SaveButton from '@renderer/components/form/save-button'

const TraitsSection = (): JSX.Element => {
  const [traitQs, setTraitQs] = useState<string[]>([])
  const allquestions = useMemo(() => traitList.map((trait) => trait.Q), [])
  const setAfromQ = (Qs: string[]): string => {
    const TraitAs: string[] = []
    Qs.forEach((Q) => {
      const trait = traitList.find((trait) => trait.Q === Q)
      const answer = trait ? trait.A : ''
      TraitAs.push(answer)
    })
    return TraitAs.join('\n- ')
  }

  const tocopy = `Traits I had today:\n - ${setAfromQ(traitQs)}`

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
