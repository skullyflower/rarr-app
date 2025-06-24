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

const NeverLetGo = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
  const { colorMode } = useColorMode()

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent
          color={colorMode === 'dark' ? 'pink.300' : 'yellow.900'}
          bgColor={colorMode === 'dark' ? 'yellow.900' : 'pink.300'}
          border="1px solid"
        >
          <ModalHeader fontSize="lg" fontWeight="bold">
            {`Won't you reconsider?`}
          </ModalHeader>
          <ModalBody>
            <Text>This exercise is about learning to take better care of yourself.</Text>
          </ModalBody>
          <ModalFooter>
            <ModalCloseButton>Close</ModalCloseButton>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}
export default NeverLetGo
