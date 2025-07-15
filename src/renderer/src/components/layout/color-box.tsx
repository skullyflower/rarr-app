import { Box, useColorMode } from '@chakra-ui/react'

const ColorBox = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { colorMode } = useColorMode()

  return (
    <Box
      border={['none', '1px solid']}
      p={6}
      borderRadius={6}
      bg={colorMode === 'dark' ? 'pink.900' : 'gray.100'}
    >
      {children}
    </Box>
  )
}
export default ColorBox
