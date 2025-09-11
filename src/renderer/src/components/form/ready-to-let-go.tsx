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
import GetImage from '../GetImage'

const members = [
  'Congrats.png',
  'NiceWork.png',
  'WellDone.png',
  'GoodJob.png',
  'WayToGo.png',
  'Congrats.png',
  'NiceWork.png',
  'WellDone.png',
  'GoodJob.png',
  'WayToGo.png'
]

const ReadyToLetGo = ({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}): JSX.Element => {
  const member = Number(Math.random().toFixed(1)) * 10
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
            <GetImage imgPath={members[member] ?? 'GoodJob.png'} altText="Good Work" />
            <Text>
              Now you might want to talk about what you&apos;ve discovered with a trusted friend or
              mentor.
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
