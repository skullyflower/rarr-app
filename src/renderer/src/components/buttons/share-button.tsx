import { IconButton, Tooltip } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

interface ShareButtonProps {
  text: string
  disabled?: boolean
}
const ShareButton = ({ text, disabled }: ShareButtonProps): JSX.Element | null => {
  if (!window.api?.shareText) return null

  return (
    <Tooltip hasArrow label="Share with your fellow traveller">
      <IconButton
        aria-label="Share with your fellow traveller"
        icon={<ExternalLinkIcon />}
        disabled={disabled}
        size={'sm'}
        onClick={() => {
          window.api?.shareText(text)
        }}
      />
    </Tooltip>
  )
}
export default ShareButton
