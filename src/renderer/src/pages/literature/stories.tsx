import { Heading, Stack } from '@chakra-ui/react'
import images from './list_file.json'
import PageCard from '@renderer/components/layout/page-card'
import ColorBox from '@renderer/components/layout/color-box'
import GetImage from '@renderer/components/GetImage'

const Stories = (): JSX.Element => {
  const stories = Object.entries(images)
  const seenTitles: string[] = []
  return (
    <Stack gap={4}>
      <Heading textAlign="center" as="h1" size="xl">
        RARR Stories
      </Heading>
      <PageCard>
        <Stack gap={4} align={'center'} p={4}>
          {stories.map(([key, story]) => {
            return (
              <ColorBox key={key}>
                {!seenTitles.includes(story.imgtitle) && seenTitles.push(story.imgtitle) && (
                  <Heading textAlign="center" as="h3" size="lg" marginBlock={4}>
                    {story.imgtitle}
                  </Heading>
                )}
                <GetImage
                  wide={story.wide}
                  imgPath={`/comics/${story.imgfile}`}
                  altText={story.imgtitle}
                />
              </ColorBox>
            )
          })}
        </Stack>
      </PageCard>
    </Stack>
  )
}
export default Stories
