import { Image } from '@chakra-ui/react'
import theComics from '@renderer/scripts/comics.mjs'

const GetImage = ({
  imgPath,
  altText,
  wide,
  maxWidth
}: {
  imgPath: string
  altText: string
  wide?: boolean
  maxWidth?: string
}): JSX.Element => {
  const source = theComics ? theComics[imgPath] : `/comics/${imgPath}`
  const fallback = theComics ? theComics['Fallback'] : '/images/rain.svg'
  return (
    <Image
      width={wide ? '1000px' : '500px'}
      maxWidth={maxWidth}
      src={source}
      alt={altText}
      fallbackSrc={fallback}
    />
  )
}

export default GetImage
