import { IconButton, Tooltip } from '@chakra-ui/react'
import copyText from '../../scripts/copyText.mjs'
import { CopyIcon, CheckIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'

interface CopyButtonProps {
  text: string
  disabled?: boolean
}
const CopyButton = ({ text, disabled }: CopyButtonProps): JSX.Element => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setCopied(false)
  }, [text])

  return (
    <Tooltip hasArrow label="Copy and send to your fellow traveller">
      <IconButton
        aria-label="Copy and send to your fellow traveller"
        icon={copied ? <CheckIcon /> : <CopyIcon />}
        disabled={disabled}
        size={'sm'}
        onClick={() => {
          copyText(text)
          setCopied(true)
        }}
      />
    </Tooltip>
  )
}
export default CopyButton
