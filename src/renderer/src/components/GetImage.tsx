import { Image } from '@chakra-ui/react'
import { useState } from 'react'

const GetImage = ({
  imgPath,
  altText,
  wide
}: {
  imgPath: string
  altText: string
  wide?: boolean
}): JSX.Element => {
  const [imageSrc, setImageSrc] = useState('')
  import(`@renderer/src/assets${imgPath}`)
    .then((data) => setImageSrc(data))
    .catch(() => setImageSrc(imgPath))
  return (
    <Image
      width={wide ? '1000px' : '500px'}
      src={imageSrc}
      alt={altText}
      fallbackSrc="/images/rain.svg"
    />
  )
}
export default GetImage
