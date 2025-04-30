import Layout from '@renderer/components/layout/Layout'
import HomePage from '@renderer/pages/home'
import ResentmentsForm from '@renderer/pages/resentments/resentmentForm'
import TheSteps from '@renderer/pages/steps/the-steps'
import AcaTenthStep from '@renderer/pages/acaTenthStep/aca-tenth-step-page'
import SerenityCheckIn from '@renderer/pages/serenityCheckIn/serenityCheckInPage'
import { useState } from 'react'
import InventoryJoural from '@renderer/pages/journal'

export default function SiteRoutes(): JSX.Element {
  const [activePath, setActivePath] = useState<string>('home')

  return (
    <Layout setActivePath={setActivePath}>
      <>
        {activePath === 'home' && <HomePage />}
        {activePath === 'resent' && <ResentmentsForm />}
        {activePath === 'aca10' && <AcaTenthStep />}
        {activePath === 'steps' && <TheSteps />}
        {activePath === 'serenity' && <SerenityCheckIn />}
        {activePath === 'log' && <InventoryJoural />}
      </>
    </Layout>
  )
}
