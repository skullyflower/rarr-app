import { Button, Stack, useColorMode } from '@chakra-ui/react'

function BeFree({
  isDisabled,
  onClick,
  otherButton
}: {
  isDisabled: boolean
  onClick: () => void
  otherButton?: JSX.Element
}): JSX.Element {
  const { colorMode } = useColorMode()

  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="center"
      position={'sticky'}
      bottom={0}
      background={colorMode === 'dark' ? 'whiteAlpha.200' : 'whiteAlpha.900'}
      paddingBlock={1}
      backdropBlur={4}
      gap={2}
    >
      <Button isDisabled={isDisabled} colorScheme="purple" name="letGo" onClick={onClick}>
        Be Free!
      </Button>
      {otherButton}
    </Stack>
  )
}
export default BeFree
