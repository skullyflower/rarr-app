import { CloseIcon } from '@chakra-ui/icons'
import { Box, HStack, IconButton, Stack, Text, useColorMode } from '@chakra-ui/react'
import PageCard from '@renderer/components/layout/page-card'
import SemiSafeContent from '@renderer/components/SemiSafeContent'
import { useEffect, useState } from 'react'
import { formatTitle } from '@renderer/scripts/copyText.mjs'
import DeleteButton from '@renderer/components/buttons/delete-button'
import { getLogList, readLog } from '@renderer/scripts/logsAPI.mjs'

export interface oneEntry {
  filename: string
  content: string
}
const InventoryJoural = (): JSX.Element => {
  const { colorMode } = useColorMode()

  const [entries, setEntries] = useState<string[]>([])
  const [selectedEntry, setSelectedEntry] = useState<oneEntry | null>(null)

  const afterDelete =
    (toDelete: string): (() => void) =>
    () => {
      setEntries((prev) => prev.filter((e) => e !== toDelete))
      setSelectedEntry(null)
    }

  useEffect(() => {
    getLogList().then((res) => {
      setEntries(res)
    })
  }, [])

  const getContents = (filename: string): void => {
    readLog(filename).then((res) => {
      setSelectedEntry({ filename: filename, content: res })
    })
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
          <HStack justifyContent="end">
            <IconButton
              variant={'ghost'}
              size={'sm'}
              aria-label="Go Back"
              icon={<CloseIcon />}
              onClick={() => setSelectedEntry(null)}
            />
          </HStack>
          <PageCard>
            <HStack justifyContent={'space-between'}>
              <Text fontSize={'lg'} fontWeight="bold">
                {formatTitle(selectedEntry.filename)}
              </Text>
            </HStack>
            <SemiSafeContent
              entry={selectedEntry}
              afterdelete={afterDelete(selectedEntry.filename)}
            />
          </PageCard>
        </Stack>
      </Box>
    )
  }

  return (
    <Box>
      <Stack>
        <LogHeader />
        <PageCard>
          <Stack gap={1}>
            {entries.length < 1 && (
              <Text>
                No entries found. Use the inventory forms under &quot;Daily Inventories&quot; to add
                entries to your log.
              </Text>
            )}
            {entries.map((entry, index) => (
              <HStack
                key={index}
                padding={2}
                borderRadius={4}
                justifyContent="space-between"
                _hover={{ backgroundColor: colorMode === 'dark' ? 'whiteAlpha.400' : 'gray.200' }}
              >
                <Text
                  flexGrow={1}
                  _hover={{ cursor: 'pointer', fontWeight: 'bold' }}
                  onClick={() => getContents(entry)}
                >
                  {formatTitle(entry)}
                </Text>
                <DeleteButton what={entry} callback={afterDelete(entry)} />
              </HStack>
            ))}
          </Stack>
        </PageCard>
      </Stack>
    </Box>
  )
}
export default InventoryJoural
