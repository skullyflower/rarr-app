import { IconButton, Tooltip } from '@chakra-ui/react'
import { AddIcon, CheckIcon } from '@chakra-ui/icons'
import { useState } from 'react'

interface CopyButtonProps {
  text: string
  disabled?: boolean
}
const SaveButton = ({ text, disabled }: CopyButtonProps): JSX.Element => {
  const [saved, setSaved] = useState(false)
  return (
    <Tooltip hasArrow label="Save to Today's Log">
      <IconButton
        aria-label="Save to Today's Log"
        icon={saved ? <CheckIcon /> : <AddIcon />}
        disabled={disabled}
        size={'xs'}
        onClick={() => window.api.writeLog(text).then((res) => setSaved(res))}
      />
    </Tooltip>
  )
}
export default SaveButton
