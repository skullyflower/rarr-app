import { Stack, Text } from '@chakra-ui/react'
import strings from '@renderer/data/alanon-tenth.json'
import CheckBoxAndText from '@renderer/components/form/CheckBoxAndText'

const QuestionsSection = ({
  selectedQuestions,
  setSelectedQuestions
}: {
  selectedQuestions: Record<string, string | undefined>
  setSelectedQuestions: (newval: Record<string, string | undefined>) => void
}): JSX.Element => {
  const allquestions = strings.questions

  return (
    <Stack gap={2}>
      <Text>Select the ones that apply today.</Text>
      {allquestions.map((q, i) => (
        <CheckBoxAndText
          key={`q-${i}`}
          q={q}
          selected={selectedQuestions}
          setSelected={setSelectedQuestions}
        />
      ))}
    </Stack>
  )
}
export default QuestionsSection
