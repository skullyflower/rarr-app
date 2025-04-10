import { Box, Image, VStack, Stack } from '@chakra-ui/react'
import NavBar from '../NavBar'
import rarrLogo from '@renderer/assets/RarrLogo.svg'
import { ReactElement } from 'react'

interface LayoutProps {
  children: ReactElement
  setActivePath: (value: string) => void
}

function Layout({ children, setActivePath }: LayoutProps): JSX.Element {
  return (
    <VStack
      justifyContent="center"
      alignItems={'center'}
      w={{ base: '100%', md: '95%' }}
      marginInline={['0', 'auto']}
      maxW={'900px'}
    >
      <header>
        <Stack
          direction={['column', 'row']}
          paddingInline={4}
          justifyContent="space-between"
          alignItems={['center', 'flex-start']}
        >
          <Box
            width="120px"
            onClick={() => setActivePath('home')}
            _hover={{ cursor: 'pointer' }}
            p={2}
          >
            <Image src={rarrLogo} alt="Ragers and Rampagers, Recovering" />
          </Box>
          <NavBar setActivePath={setActivePath} />
        </Stack>
      </header>
      <Box>{children}</Box>
      <footer id="pagefoot"></footer>
    </VStack>
  )
}
export default Layout
