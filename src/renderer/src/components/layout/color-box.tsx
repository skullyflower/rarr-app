import { Box, useColorMode } from '@chakra-ui/react'

const ColorBox = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { colorMode } = useColorMode()

  return (
    <Box
      color={'inherit'}
      p={6}
      borderRadius={4}
      bg={colorMode === 'dark' ? 'pink.900' : 'gray.100'}
    >
      {children}
    </Box>
  )
}
export default ColorBox
