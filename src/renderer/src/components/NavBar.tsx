import { Box, HStack } from '@chakra-ui/react'

const NavItem = ({ text, onClick }: { text: string; onClick: () => void }): JSX.Element => {
  return (
    <Box
      width={['100%', 'auto']}
      paddingBlock={1}
      paddingInline={4}
      borderRadius={5}
      border="2px solid"
      textTransform="uppercase"
      onClick={onClick}
      _hover={{ cursor: 'pointer', backgroundColor: 'whiteAlpha.400' }}
    >
      {text}
    </Box>
  )
}

const NavBar = ({ setActivePath }: { setActivePath: (value: string) => void }): JSX.Element => {
  return (
    <Box p={4}>
      <HStack wrap="wrap" gap={2} justifyContent={'center'}>
        <NavItem onClick={() => setActivePath('steps')} text="The Steps" />
        <NavItem onClick={() => setActivePath('resent')} text="resentments" />
        <NavItem onClick={() => setActivePath('aca10')} text="ACA 10th Step" />
      </HStack>
    </Box>
  )
}

export default NavBar
