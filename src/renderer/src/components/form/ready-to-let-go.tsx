import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorMode
} from '@chakra-ui/react'

const ReadyToLetGo = ({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}): JSX.Element => {
  const { colorMode } = useColorMode()

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent
          color={colorMode === 'dark' ? 'blue.300' : 'green.900'}
          bgColor={colorMode === 'dark' ? 'green.900' : 'blue.300'}
          border="1px solid"
        >
          <ModalHeader fontSize="lg" fontWeight="bold">
            Congratulations! Nice work.
          </ModalHeader>
          <ModalBody>
            <Text>
              Now you might want to talk what you&apos;ve discovered over with a trusted friend. It
              might help you find a way to improve the situation.
            </Text>
          </ModalBody>
          <ModalFooter>
            <ModalCloseButton>Close</ModalCloseButton>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}
export default ReadyToLetGo
