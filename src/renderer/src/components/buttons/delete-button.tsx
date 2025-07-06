import { IconButton, Tooltip, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { formatTitle } from '@renderer/scripts/copyText.mjs'
import Confirm from '../Confirm'
import { DeleteIcon } from '@chakra-ui/icons'
import { deleteLog } from '@renderer/scripts/logsAPI.mjs'

interface DeleteButtonProps {
  what: string
  callback: (what: string) => void
}
const DeleteButton = ({ what, callback }: DeleteButtonProps): JSX.Element => {
  const [toDelete, setToDelete] = useState<string | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const triggerDelete = (entry: string): void => {
    setToDelete(entry)
    onOpen()
  }

  const handleDelete = (): void => {
    if (!toDelete) return
    deleteLog(toDelete).then(() => {
      callback(toDelete)
      setToDelete(null)
      onClose()
    })
  }
  return (
    <>
      <Tooltip hasArrow label={`Delete ${formatTitle(what)}`}>
        <IconButton
          variant={'ghost'}
          size={'sm'}
          aria-label="Delete Entry"
          icon={<DeleteIcon />}
          onClick={() => triggerDelete(what)}
        />
      </Tooltip>
      <Confirm
        isOpen={isOpen}
        onClose={onClose}
        title="Delete Entry"
        message="Are you sure you want to delete this entry?"
        onConfirm={handleDelete}
      />
    </>
  )
}
export default DeleteButton
