import { Image, Modal, ModalBody, ModalContent, ModalOverlay, useColorMode } from '@chakra-ui/react'
import Problem from '@renderer/assets/04052026IThinkIHaveAProblem_358X339.png'
import { useEffect, useState } from 'react'

const Splash = (isOpen): JSX.Element => {
  const { colorMode } = useColorMode()
  const [show, setShow] = useState(isOpen)
  function onClose(): void {
    setShow(false)
  }
  useEffect(() => {
    if (show) {
      setTimeout(onClose, 4000)
    }
  }, [])

  return (
    <Modal id="splashImage" isOpen={show} onClose={onClose} isCentered>
      <ModalOverlay>
        <ModalContent
          bg={colorMode === 'dark' ? 'pink.900' : 'gray.100'}
          shadow={'10px 10px 20px 10px #0009'}
          onClick={onClose}
        >
          <ModalBody>
            <Image src={Problem} alt="I think I have a problem." />
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}

export default Splash
