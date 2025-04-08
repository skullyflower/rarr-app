import { Box, Heading, Image, Stack } from '@chakra-ui/react'
import images from './list_file.json'
import fallBack from '@renderer/assets/rain.svg' // Fallback image in case of loading error
import PageCard from '@renderer/components/layout/page-card'

const Stories = (): JSX.Element => {
  const stories = Object.entries(images)
  const seenTitles: string[] = []
  return (
    <Stack gap={4}>
      <Heading textAlign="center" as="h1" size="xl">
        RARR Stories
      </Heading>
      <PageCard>
        <Stack gap={4} p={4}>
          {stories.map(([key, story]) => {
            return (
              <Box border={['none', '1px solid']} bg={'pink.900'} key={key} p={6} borderRadius={6}>
                {!seenTitles.includes(story.imgtitle) && seenTitles.push(story.imgtitle) && (
                  <Heading textAlign="center" as="h3" size="lg" marginBlock={4}>
                    {story.imgtitle}
                  </Heading>
                )}
                <Image
                  width="1000px"
                  src={`/comics/${story.imgfile}`}
                  alt={story.imgtitle}
                  fallbackSrc={fallBack}
                />
              </Box>
            )
          })}
        </Stack>
      </PageCard>
    </Stack>
  )
}
export default Stories
