import Layout from '@renderer/components/layout/Layout'
import HomePage from '@renderer/pages/home'
import ResentmentsForm from '@renderer/pages/resentments/resentmentForm'
import SpotCheckForm from '@renderer/pages/principles/principles-form'
//import Stories from '@renderer/pages/literature/stories'
import TheSteps from '@renderer/pages/steps/the-steps'
import AcaTenthStep from '@renderer/pages/acaTenthStep/aca-tenth-step-page'
import { useState } from 'react'

export default function SiteRoutes(): JSX.Element {
  const [activePath, setActivePath] = useState<string>('home')

  return (
    <Layout setActivePath={setActivePath}>
      <>
        {activePath === 'home' && <HomePage />}
        {activePath === 'resent' && <ResentmentsForm />}
        {activePath === 'aca10' && <AcaTenthStep />}
        {activePath === 'Spot' && <SpotCheckForm />}
        {activePath === 'steps' && <TheSteps />}
      </>
    </Layout>
  )
}
