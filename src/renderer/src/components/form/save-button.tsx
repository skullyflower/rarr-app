import { IconButton, Tooltip } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import SaveIcon from '../Icons/SaveIcon'

interface SaveButtonProps {
  text: string
  fileName?: string
  disabled?: boolean
}
const SaveButton = ({ text, fileName, disabled }: SaveButtonProps): JSX.Element => {
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setSaved(false)
  }, [text])

  return (
    <Tooltip hasArrow label={`Save to ${fileName ? fileName : "Today's Log"}`}>
      <IconButton
        aria-label="Save to Today's Log"
        icon={saved ? <CheckIcon /> : <SaveIcon />}
        disabled={disabled}
        size={'xs'}
        onClick={() => window.api.writeLog(text, fileName).then((res) => setSaved(res))}
      />
    </Tooltip>
  )
}
export default SaveButton
