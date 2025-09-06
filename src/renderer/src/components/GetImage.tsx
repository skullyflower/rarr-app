import { Image } from '@chakra-ui/react'
import theComics from '@renderer/scripts/comics.mjs'

const GetImage = ({
  imgPath,
  altText,
  wide
}: {
  imgPath: string
  altText: string
  wide?: boolean
}): JSX.Element => {
  return (
    <Image
      width={wide ? '1000px' : '500px'}
      src={theComics ? theComics[imgPath] : `/comics/${imgPath}`}
      alt={altText}
      //fallbackSrc="/images/rain.svg"
    />
  )
}

export default GetImage
