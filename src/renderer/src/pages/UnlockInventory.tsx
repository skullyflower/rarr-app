import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import Confirm from '../components/Confirm'
import { useState } from 'react'
import useKeyCapture from '@renderer/components/hooks/useKeyCapture'

const UnlockInventory = ({
  isLocked = true,
  setIsLocked
}: {
  isLocked?: boolean
  setIsLocked: (locked: boolean) => void
}): JSX.Element => {
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [success, setSuccess] = useState<boolean>(false)

  const [error, setError] = useState<string | null>(null)

  const handleUnlock = (): void => {
    if (user.length > 0 && password.length > 0) {
      window.api.unlockLog(user, password).then((res) => {
        setIsLocked(res)
        if (!res) {
          setSuccess(true)
          setError(null)
        } else {
          setError('Invalid username or password')
        }
      })
    }
  }
  const handleReset = (): void => {
    window.api
      .reset()
      .then((res) => {
        setIsLocked(res)
      })
      .then(() => {
        onClose()
      })
      .catch((err) => {
        setError(`Error resetting log: ${err}`)
      })
  }
  useKeyCapture('Enter', () => {
    handleUnlock()
  })
  if (!isLocked && success) {
    return (
      <Box width={'80%'} padding={2} marginInline={'auto'} borderRadius={4}>
        <Alert status="success" colorScheme="purple">
          <AlertIcon />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>Your inventories unlocked successfully!</AlertDescription>
        </Alert>
      </Box>
    )
  }

  return (
    <Box width={'80%'} padding={2} marginInline={'auto'} borderRadius={4}>
      <Stack gap={4}>
        {error && (
          <Alert status="error" colorScheme="red" textAlign="center">
            <AlertIcon />
            <AlertTitle>Oops</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {!isLocked ? (
          <Text fontSize={'lg'} fontWeight="bold">
            Set up a lock for your inventory log.
          </Text>
        ) : (
          <Text fontSize={'lg'} fontWeight="bold">
            Unlock your inventories.
          </Text>
        )}
        <FormControl width={'auto'} display="flex" alignItems="center">
          <FormLabel htmlFor="user" mb="0" width={'150px'}>
            Name
          </FormLabel>
          <Input
            value={user}
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setUser(e.target.value)
            }}
          />
        </FormControl>
        <FormControl width={'auto'} display="flex" alignItems="center">
          <FormLabel htmlFor="password" mb="0" width={'150px'}>
            Password
          </FormLabel>
          <Input
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </FormControl>
        <HStack gap={2} justifyContent="end">
          <Button size={'sm'} variant={'ghost'} aria-label="Lock" onClick={onOpen}>
            Reset and delete log
          </Button>
          <Button
            size={'sm'}
            aria-label="Unlock"
            disabled={user.length < 1 || password.length < 1}
            onClick={handleUnlock}
          >
            Unlock
          </Button>
        </HStack>
      </Stack>
      <Confirm
        isOpen={isOpen}
        onClose={onClose}
        title="Reset Log"
        message="Are you sure you want to reset your diary? All of your past entries will be deleted."
        onConfirm={handleReset}
      />
    </Box>
  )
}
export default UnlockInventory
