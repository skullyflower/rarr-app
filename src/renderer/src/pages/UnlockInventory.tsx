import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Card,
  CardBody,
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
import CollapsingText from '@renderer/components/layout/CollapsingText'

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
  const [success, setSuccess] = useState<string | null>(null)

  const [error, setError] = useState<string | null>(null)

  const handleUnlock = (): void => {
    if (user.length > 0 && password.length > 0) {
      window.api.unlockLog(user, password).then((res) => {
        setIsLocked(res)
        if (!res) {
          setSuccess('Your inventories were unlocked successfully!')
          setError(null)
        } else {
          setSuccess(null)
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
        setSuccess('Your inventories were reset successfully!')
        setError(null)
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
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      </Box>
    )
  }

  return (
    <Box width={'80%'} padding={2} marginInline={'auto'} borderRadius={4}>
      <Card bg="whiteAlpha.300" border={['none', '1px solid']}>
        <CardBody>
          <Stack gap={4}>
            {error && (
              <Alert status="error" colorScheme="red" textAlign="center">
                <AlertIcon />
                <AlertTitle>Oops</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {!isLocked ? (
              <Stack gap={3}>
                <Text fontSize={'lg'} fontWeight="bold">
                  Set up locking for your inventories.
                </Text>
                <CollapsingText>
                  <Stack gap={3}>
                    <Text>
                      This is an optional, &quot;diary strength&quot;, lock for privacy. It is not
                      very secure, but will keep out casual snoops.
                    </Text>
                    <Text>
                      When set, only you will be able to fill out, view or save your inventories.
                    </Text>
                    <Text>
                      If you set up locking and forget your password or change your mind about
                      keeping it locked, you can reset the app, and set up a new password or use it
                      unlocked, but <i>everything you saved before you reset will be deleted</i>.
                    </Text>
                    <Text>
                      If you set up locking after you&apos;ve saved entries, your entries will
                      persist and be protected.
                    </Text>
                  </Stack>
                </CollapsingText>

                <Text>Set a name and password below:</Text>
              </Stack>
            ) : (
              <Text fontSize={'lg'} fontWeight="bold">
                Unlock your inventories.
              </Text>
            )}
            <Card bg="pink.900" borderStyle={'solid'} borderWidth={1} borderColor="purple.300">
              <CardBody>
                <Stack gap={3}>
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
                    {isLocked && (
                      <Button size={'sm'} variant={'ghost'} aria-label="Lock" onClick={onOpen}>
                        Reset and delete log
                      </Button>
                    )}
                    <Button
                      size={'sm'}
                      aria-label="Unlock"
                      disabled={user.length < 1 || password.length < 1}
                      onClick={handleUnlock}
                    >
                      {isLocked ? 'Unlock' : 'Set Up Lock'}
                    </Button>
                  </HStack>
                </Stack>
              </CardBody>
            </Card>
          </Stack>
        </CardBody>
      </Card>
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
