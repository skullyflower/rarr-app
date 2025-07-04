import CopyButton from '@renderer/components/buttons/copy-button'
import { HStack, Stack, Text } from '@chakra-ui/react'
import ListerInput from '@renderer/components/form/ListerInput'
import SaveButton from '@renderer/components/buttons/save-button'

const ToolsUsedToday = ({
  listOfTools,
  setListOfTools
}: {
  listOfTools: string[]
  setListOfTools: (value: string[]) => void
}): JSX.Element => {
  const tocopy = `Recovery Tools just for today:\n\t• ${listOfTools.join(', \n\t• ')}`

  return (
    <Stack gap={4}>
      <HStack justifyContent={'space-between'}>
        <Text>
          What are the tools of recovery you are using to help you live life in the moment?
        </Text>
        <HStack gap={2}>
          <CopyButton text={tocopy} disabled={listOfTools.length === 0} />
          <SaveButton text={tocopy} disabled={listOfTools.length === 0} />
        </HStack>
      </HStack>
      <ListerInput
        list={listOfTools}
        setList={setListOfTools}
        placeholder="Describe a tool you used today..."
      />
    </Stack>
  )
}
export default ToolsUsedToday
