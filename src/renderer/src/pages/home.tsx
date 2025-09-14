import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import RarrSplash from '@renderer/assets/RARR_Splash.png'
import ColorBox from '@renderer/components/layout/color-box'
import strings from '@renderer/data/home.json'
import theComics from '@renderer/scripts/comics.mjs'

function HomePage(): JSX.Element {
  return (
    <Stack gap={2}>
      <Heading as="h2" size="lg" textAlign="center">
        {strings.title}
      </Heading>
      <ColorBox>
        <Box position={'relative'}>
          <Stack spacing={4} align="center">
            <Stack
              position={'relative'}
              direction={{ base: 'column', md: 'row' }}
              justifyContent="end"
              width="100%"
            >
              <Box
                backgroundColor="purple.300"
                color={'pink.900'}
                borderRadius="md"
                padding={8}
                width={{ base: '100%', md: '43%' }}
                maxH="fit-content"
                textAlign="left"
                position={{ base: 'static', md: 'absolute' }}
                left="50px"
                bottom="30px"
                fontSize={['lg', 'xl']}
              >
                {strings.boxText.map((line, i) => (
                  <Text key={`line-${i}`}>{line}</Text>
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
            <Text>{strings.footerText}</Text>
          </Stack>
        </Box>
      </ColorBox>
    </Stack>
  )
}

export default HomePage
