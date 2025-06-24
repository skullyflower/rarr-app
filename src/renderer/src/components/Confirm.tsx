import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'

interface ConfirmProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string | JSX.Element
  onConfirm: () => void
}

export default function Confirm({
  isOpen,
  onClose,
  title,
  message,
  onConfirm
}: ConfirmProps): JSX.Element {
  return (
    <>
      <Modal colorScheme="purple" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{message}</ModalBody>
          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="purple" onClick={onConfirm}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
