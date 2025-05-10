import { CloseIcon, DeleteIcon } from '@chakra-ui/icons'
import { Box, Card, CardBody, HStack, IconButton, Stack, Text } from '@chakra-ui/react'
import SemiSafeContent from '@renderer/components/SemiSafeContent'
import { useEffect, useState } from 'react'

interface oneEntry {
  filename: string
  content: string
}
const InventoryJoural = (): JSX.Element => {
  const [entries, setEntries] = useState<string[]>([])
  const [selectedEntry, setSelectedEntry] = useState<oneEntry | null>(null)

  useEffect(() => {
    window.api.getLogList().then((res) => {
      setEntries(res)
    })
  }, [])

  const getContents = (filename): void => {
    window.api.readLog(filename).then((res) => {
      setSelectedEntry({ filename: filename, content: res })
    })
  }
  const formatTitle = (title: string): string => {
    const datePattern = /(\d{4})-(\d{1,2})-(\d{1,2})/
    if (datePattern.test(title)) {
      return new Date(title).toDateString()
    }
    return title
  }

  const LogHeader = (): JSX.Element => {
    return (
      <HStack width={'100%'} justifyContent="start">
        <Text>Inventory Journal</Text>
      </HStack>
    )
  }

  if (selectedEntry) {
    return (
      <Box>
        <Stack>
          <LogHeader />
          <HStack justifyContent="space-between">
            <Text>{formatTitle(selectedEntry.filename)}</Text>
            <IconButton
              variant={'ghost'}
              size={'sm'}
              aria-label="Go Back"
              icon={<CloseIcon />}
              onClick={() => setSelectedEntry(null)}
            />
          </HStack>
          <Card
            bg="whiteAlpha.300"
            border={['none', '1px solid']}
            maxHeight={'75vh'}
            overflowY={'auto'}
          >
            <CardBody>
              <Stack gap={4}>
                <SemiSafeContent
                  rawContent={selectedEntry.content}
                  fileName={selectedEntry.filename}
                />
              </Stack>
            </CardBody>
          </Card>
        </Stack>
      </Box>
    )
  }

  return (
    <Box>
      <Stack>
        <LogHeader />{' '}
        <Card bg="whiteAlpha.300" border={['none', '1px solid']}>
          <CardBody>
            <Stack gap={1}>
              {entries.map((entry, index) => (
                <HStack
                  key={index}
                  padding={2}
                  borderRadius={4}
                  justifyContent="space-between"
                  _hover={{ backgroundColor: 'whiteAlpha.400' }}
                >
                  <Text
                    flexGrow={1}
                    _hover={{ cursor: 'pointer', fontWeight: 'bold' }}
                    onClick={() => getContents(entry)}
                  >
                    {formatTitle(entry)}
                  </Text>
                  <IconButton
                    variant={'ghost'}
                    size={'sm'}
                    aria-label="Delete Entry"
                    icon={<DeleteIcon />}
                    onClick={() => {
                      window.api.deleteLog(entry).then(() => {
                        setEntries((prev) => prev.filter((e) => e !== entry))
                      })
                    }}
                  />
                </HStack>
              ))}
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </Box>
  )
}
export default InventoryJoural
