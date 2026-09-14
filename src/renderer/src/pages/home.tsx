import { Box, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import RarrSplash from '@renderer/assets/RARR_Splash.png'
import ColorBox from '@renderer/components/layout/color-box'
import strings from '@renderer/data/home.json'
import theComics from '@renderer/scripts/comics.mjs'
import { NavItem } from '@renderer/components/NavBar'

function HomePage(): JSX.Element {
  return (
    <Stack gap={2}>
      <ColorBox>
        <Heading as="h2" size="lg" textAlign="center" marginBottom={8}>
          {strings.title}
        </Heading>
        <Box position={'relative'}>
          <Stack spacing={4} align="center">
            <Stack
              position={'relative'}
              direction={{ base: 'column', md: 'row' }}
              justifyContent="end"
              width="100%"
              maxW={'1000px'}
            >
              <Box
                backgroundColor="purple.300"
                color={'purple.900'}
                borderRadius="md"
                padding={8}
                width={{ base: '100%', md: '43%' }}
                maxH="fit-content"
                textAlign="left"
                position={{ base: 'static', md: 'absolute' }}
                left="50px"
                bottom="30px"
                fontSize={'1.2em'}
              >
                {strings.boxText.map((line, i) => (
                  <Text fontWeight={'bold'} key={`line-${i}`}>
                    {line}
                  </Text>
                ))}
              </Box>
              <Image
                width={{ base: '100%', md: '65%' }}
                src={RarrSplash}
                fallbackSrc={theComics ? theComics['Fallback'] : '/images/rain.svg'}
                alt="Welcome Home"
              />
            </Stack>

            <Text fontWeight={'bold'}>{strings.footHeader}</Text>
            <Heading>The Guided Inventories:</Heading>
            <HStack gap={4} wrap="wrap" justifyContent="center">
              <NavItem to="trouble" text="Trouble" />
              <NavItem to="drawn-to-trouble" text="Drawn to Trouble" />
              <NavItem to="spawn-of-trouble" text="Spawn of Trouble" />
              <NavItem to="resentments" text="Resentments" />
              <NavItem to="serenity" text="Control Issues" />
              <NavItem to="fears" text="Fear and Gratitude" />
            </HStack>

            <Text>{strings.footerText}</Text>
            <Text>
              <Link to="/about">About RARR</Link>
            </Text>
          </Stack>
        </Box>
      </ColorBox>
    </Stack>
  )
}

export default HomePage
