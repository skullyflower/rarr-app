import CheckboxGroupBox from '@renderer/components/form/CheckBoxGroupBox'
import { Card, CardBody, HStack, Stack, Text } from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import { traitList } from './aca-tenth-constants'
import CopyButton from '@renderer/components/form/copy-button'

const TraitsSection = () => {
  const [traitQs, setTraitQs] = useState<string[]>([])
  const allquestions = useMemo(() => traitList.map((trait) => trait.Q), [])
  const setAfromQ = (Qs: string[]) => {
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
    <Card bg="pink.900" border={['none', '1px solid']}>
      <CardBody>
        <Stack gap={4}>
          <HStack justifyContent={'space-between'}>
            <Text>Select the ones that apply today.</Text>
            <CopyButton text={tocopy} disabled={traitQs.length === 0} />
          </HStack>
          <CheckboxGroupBox
            columns={1}
            valuesList={traitQs}
            options={allquestions}
            setter={setTraitQs}
          />
        </Stack>
      </CardBody>
    </Card>
  )
}
export default TraitsSection
