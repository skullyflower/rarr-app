import { Box, Image, HStack, VStack } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import NavBar from '../NavBar'
import rarrLogo from '@renderer/assets/RarrLogo.svg'
import { ReactElement } from 'react'

interface LayoutProps {
  children: ReactElement
  setActivePath: (value: string) => void
}

function Layout({ children, setActivePath }: LayoutProps): JSX.Element {
  return (
    <VStack justifyContent="center" alignItems={'center'}>
      <Box w={['100%', '95%']} maxW={'900px'}>
        <header>
          <HStack w="90%" justifyContent="space-between">
            <Box
              width="100px"
              as={ReactRouterLink}
              onClick={() => setActivePath('home')}
              _hover={{ cursor: 'pointer' }}
              p={2}
            >
              <Image src={rarrLogo} alt="Ragers and Rampagers, Recovering" />
            </Box>
            <NavBar setActivePath={setActivePath} />
          </HStack>
        </header>
        <Box>{children}</Box>
        <footer id="pagefoot"></footer>
      </Box>
    </VStack>
  )
}
export default Layout
