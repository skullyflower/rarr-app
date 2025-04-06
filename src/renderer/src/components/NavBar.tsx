import { Box, HStack, LinkBox } from '@chakra-ui/react'
import { Link, useMatch } from 'react-router-dom'

const NavItem = ({ text, to }: { text: string; to: string }): JSX.Element => {
  return (
    <LinkBox
      as={Link}
      marginTop={2}
      paddingBlock={1}
      paddingInline={4}
      borderRadius={5}
      border="2px solid"
      backgroundColor={useMatch(to) ? 'purple.800' : ''}
      textTransform="uppercase"
      to={to}
    >
      {text}
    </LinkBox>
  )
}

const NavBar = (): JSX.Element => {
  return (
    <Box p={4}>
      <HStack wrap="wrap" gap={4} justifyContent={'center'}>
        <NavItem to="steps" text="The Steps" />
        <NavItem to="/inventory" text="resentments" />
        <NavItem to="/aca-tenth-step" text="ACA 10th Step" />
        {/* <NavItem to="literature" text="literature" /> */}
      </HStack>
    </Box>
  )
}

export default NavBar
