import { Stack, Text } from '@chakra-ui/react'
import strings from '@renderer/data/privacy.json'

const Privacy = (): JSX.Element => {
  return (
    <Stack p={4} gap={4}>
      {strings.text.map((line, i) => (
        <Text fontSize={'15px'} key={`priv-${i}`} fontWeight={i === 0 ? 'bold' : 'normal'}>
          {line}
        </Text>
      ))}
      {Boolean(window.api) && (
        <>
          {strings.appOnlyText.map((line, i) => (
            <Text fontSize={'15px'} key={`app-${i}`}>
              {line}
            </Text>
          ))}
        </>
      )}
    </Stack>
  )
}
export default Privacy
