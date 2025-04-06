import { Outlet } from 'react-router-dom'
import { Box, Center, Image, HStack, VStack, LinkBox } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import NavBar from '../NavBar'
import rarrLogo from '@renderer/assets/RarrLogo.svg'

function Layout(): JSX.Element {
  return (
    <VStack justifyContent="center" alignItems={'center'}>
      <Box w={['100%', '95%']} maxW={'900px'}>
        <header>
          <HStack w="90%" justifyContent="space-between">
            <LinkBox width="100px" as={ReactRouterLink} to="/" p={2}>
              <Image src={rarrLogo} alt="Ragers and Rampagers, Recovering" />
            </LinkBox>
            <NavBar />
          </HStack>
        </header>
        <Center>
          <Outlet />
        </Center>
        <footer id="pagefoot"></footer>
      </Box>
    </VStack>
  )
}
export default Layout
