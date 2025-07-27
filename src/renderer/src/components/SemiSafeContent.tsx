import {
  Box,
  Editable,
  EditablePreview,
  EditableTextarea,
  HStack,
  IconButton,
  Tooltip,
  useEditableControls
} from '@chakra-ui/react'
import { useState } from 'react'
import SaveButton from './buttons/save-button'
import { EditIcon, CloseIcon } from '@chakra-ui/icons'
import PrintButton from './buttons/print-button'
import CopyButton from './buttons/copy-button'
import DeleteButton from './buttons/delete-button'
import { oneEntry } from '@renderer/pages/journal'

interface SemiSafeContentProps {
  entry: oneEntry
  afterdelete?: () => void
}
function SemiSafeContent({ entry, afterdelete }: SemiSafeContentProps): JSX.Element {
  const { content: rawContent, filename: fileName } = entry

  const [text, setText] = useState<string>(rawContent as string)
  function EditableControls(): JSX.Element {
    const { isEditing, getCancelButtonProps, getEditButtonProps } = useEditableControls()

    return isEditing ? (
      <Tooltip hasArrow label={`Cancel`}>
        <IconButton
          aria-label="Cancel"
          size={'sm'}
          icon={<CloseIcon />}
          {...getCancelButtonProps()}
        />
      </Tooltip>
    ) : (
      <Tooltip hasArrow label={`Edit`}>
        <IconButton aria-label="Edit" size={'sm'} icon={<EditIcon />} {...getEditButtonProps()} />
      </Tooltip>
    )
  }

  return (
    <Editable
      value={text}
      style={{ whiteSpace: 'pre-wrap' }}
      onChange={setText}
      isPreviewFocusable={false}
    >
      <Box textAlign={'right'}>
        <HStack gap={2} justifyContent={'end'}>
          <EditableControls />
          <SaveButton text={text} fileName={fileName} disabled={rawContent === text} />
          <CopyButton text={text} />
          <PrintButton fileName={fileName} />
          {fileName && afterdelete && <DeleteButton what={fileName} callback={afterdelete} />}
        </HStack>
      </Box>
      <EditablePreview />
      <EditableTextarea
        p={4}
        h={'65vh'}
        borderWidth={2}
        borderColor={'pink.400'}
        borderStyle={'solid'}
      />
    </Editable>
  )
}

export default SemiSafeContent
