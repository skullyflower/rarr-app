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
import useKeyCapture from '@renderer/hooks/useKeyCapture'
import CollapsingText from '@renderer/components/layout/CollapsingText'
import PageCard from '@renderer/components/layout/page-card'
import ColorBox from '@renderer/components/layout/color-box'
import { resetLogs, unlockLog } from '@renderer/scripts/logsAPI.mjs'
import useToggleLock from '@renderer/hooks/useToggleLock'
import strings from '@renderer/data/unlock.json'

const UnlockInventory = (): JSX.Element => {
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const { isLocked, hasLock, setIsLocked } = useToggleLock()

  const handleUnlock = (): void => {
    if (user.length > 0 && password.length > 0) {
      unlockLog(user, password).then((res) => {
        setIsLocked(res)
        if (!res) {
          setSuccess(strings.unlock.success)
          setError(null)
        } else {
          setSuccess(null)
          setError(strings.unlock.fail)
        }
      })
    }
  }
  const handleReset = (): void => {
    if (isLocked) {
      resetLogs()
        .then((res) => {
          setIsLocked(res)
          setSuccess(strings.reset.success)
          setError(null)
        })
        .then(() => {
          onClose()
        })
        .catch((err) => {
          setError(`${strings.reset.fail}: ${err}`)
        })
    }
  }
  useKeyCapture({
    key: 'Enter',
    callback: () => {
      handleUnlock()
    }
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
      <PageCard>
        <Stack gap={4}>
          {error && (
            <Alert status="error" colorScheme="red" textAlign="center">
              <AlertIcon />
              <AlertTitle>Oops</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {!hasLock ? (
            <Stack gap={3}>
              <Text fontSize={'lg'} fontWeight="bold">
                {strings.setup.title}
              </Text>
              <CollapsingText>
                <Stack gap={3}>
                  {strings.setup.collapsedText.map((line, i) => (
                    <Text key={`c-${i}`}>
                      <div dangerouslySetInnerHTML={{ __html: line }} />
                    </Text>
                  ))}
                </Stack>
              </CollapsingText>

              <Text fontWeight={'bold'}>{strings.setup.text}</Text>
            </Stack>
          ) : (
            <Text fontSize={'lg'} fontWeight="bold">
              {strings.unlock.title}
            </Text>
          )}
          <ColorBox>
            <Stack gap={3}>
              <FormControl width={'auto'} display="flex" alignItems="center">
                <FormLabel htmlFor="user" mb="0" width={'150px'}>
                  Name
                </FormLabel>
                <Input
                  autoComplete="username"
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
                  autoComplete="current-password"
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
              </FormControl>
              <HStack gap={2} justifyContent="end">
                {isLocked ? (
                  <Button size={'sm'} variant={'ghost'} aria-label="Lock" onClick={onOpen}>
                    Reset and delete log
                  </Button>
                ) : (
                  <Button size={'sm'} variant={'ghost'} aria-label="Lock" onClick={handleReset}>
                    Cancel
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
          </ColorBox>
        </Stack>
      </PageCard>
      <Confirm
        isOpen={isOpen}
        onClose={onClose}
        title="Reset Log"
        message={strings.reset.confirm}
        onConfirm={handleReset}
      />
    </Box>
  )
}
export default UnlockInventory
