import { Box, Text } from '@chakra-ui/react'

const Privacy = (): JSX.Element => {
  return (
    <Box p={4}>
      <Text>
        <b>Your answers can NOT be viewed by anyone but you</b>. When you hit submit, your answers
        will be formatted so that you can copy or print them, but they never leave your computer. If
        you like, and share them with whomever you choose.
      </Text>
      {Boolean(window.api) && (
        <Text>
          You can also save them to your inventory log, but they will not leave your computer.
        </Text>
      )}
    </Box>
  )
}
export default Privacy
