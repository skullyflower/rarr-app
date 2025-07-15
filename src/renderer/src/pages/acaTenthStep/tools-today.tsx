import { Stack, Text } from '@chakra-ui/react'
import ListerInput from '@renderer/components/form/ListerInput'

const ToolsUsedToday = ({
  listOfTools,
  setListOfTools
}: {
  listOfTools: string[]
  setListOfTools: (value: string[]) => void
}): JSX.Element => {
  return (
    <Stack gap={4}>
      <Text>What are the tools of recovery you are using to help you live life in the moment?</Text>
      <ListerInput
        list={listOfTools}
        setList={setListOfTools}
        placeholder="Describe a tool you used today..."
      />
    </Stack>
  )
}
export default ToolsUsedToday
