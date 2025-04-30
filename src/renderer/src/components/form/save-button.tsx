import { IconButton, Tooltip } from '@chakra-ui/react'
import { AddIcon, CheckIcon } from '@chakra-ui/icons'
import { useState } from 'react'

interface SaveButtonProps {
  text: string
  fileName?: string
  disabled?: boolean
}
const SaveButton = ({ text, fileName, disabled }: SaveButtonProps): JSX.Element => {
  const [saved, setSaved] = useState(false)
  return (
    <Tooltip hasArrow label={`Save to ${fileName ? fileName : "Today's Log"}`}>
      <IconButton
        aria-label="Save to Today's Log"
        icon={saved ? <CheckIcon /> : <AddIcon />}
        disabled={disabled}
        size={'xs'}
        onClick={() => window.api.writeLog(text, fileName).then((res) => setSaved(res))}
      />
    </Tooltip>
  )
}
export default SaveButton
