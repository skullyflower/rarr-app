import Layout from '@renderer/components/layout/Layout'
import HomePage from '@renderer/pages/home'
import ResentmentsForm from '@renderer/pages/resentments/resentmentForm'
import TheSteps from '@renderer/pages/steps/the-steps'
import AcaTenthStep from '@renderer/pages/acaTenthStep/aca-tenth-step-page'
import SerenityCheckIn from '@renderer/pages/serenityCheckIn/serenityCheckInPage'
import { useEffect, useState } from 'react'
import InventoryJoural from '@renderer/pages/journal'
import Fears from '@renderer/pages/fears/fears'
import UnlockInventory from '@renderer/pages/UnlockInventory'

export default function SiteRoutes(): JSX.Element {
  const [activePath, setActivePath] = useState<string>('home')
  const [isLocked, setIsLocked] = useState<boolean>(true)

  useEffect(() => {
    window.api.isLocked().then((res) => {
      setIsLocked(res)
    })
  }, [])

  const toggleLock = (): void => {
    if (!isLocked) {
      window.api.lockLog().then((res) => {
        if (!res) {
          setActivePath('unlock')
        }
        setIsLocked(res)
      })
    } else {
      setActivePath('unlock')
    }
  }

  return (
    <Layout
      activePath={activePath}
      setActivePath={setActivePath}
      isLocked={isLocked}
      toggleLock={toggleLock}
    >
      <>
        {activePath === 'home' && <HomePage />}
        {activePath === 'steps' && <TheSteps />}

        {activePath === 'resent' &&
          (isLocked ? <UnlockInventory setIsLocked={setIsLocked} /> : <ResentmentsForm />)}
        {activePath === 'aca10' &&
          (isLocked ? <UnlockInventory setIsLocked={setIsLocked} /> : <AcaTenthStep />)}
        {activePath === 'serenity' &&
          (isLocked ? <UnlockInventory setIsLocked={setIsLocked} /> : <SerenityCheckIn />)}
        {activePath === 'fear' &&
          (isLocked ? <UnlockInventory setIsLocked={setIsLocked} /> : <Fears />)}
        {activePath === 'log' &&
          (isLocked ? <UnlockInventory setIsLocked={setIsLocked} /> : <InventoryJoural />)}
        {activePath === 'unlock' && (
          <UnlockInventory setIsLocked={setIsLocked} isLocked={isLocked} />
        )}
      </>
    </Layout>
  )
}
