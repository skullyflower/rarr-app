import { Routes, Route } from 'react-router-dom'
import Layout from '@renderer/components/layout/Layout'
import HomePage from '@renderer/pages/home'
import ResentmentsForm from '@renderer/pages/resentments/resentmentForm'
import SpotCheckForm from '@renderer/pages/principles/principles-form'
//import Stories from '@renderer/pages/literature/stories'
import TheSteps from '@renderer/pages/steps/the-steps'
import AcaTenthStep from '@renderer/pages/acaTenthStep/aca-tenth-step-page'

export default function SiteRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/inventory" element={<ResentmentsForm />} />
        <Route path="/aca-tenth-step" element={<AcaTenthStep />} />
        <Route path="/principles" element={<SpotCheckForm />} />
        {/* <Route path="/Literature" element={<Stories />} /> */}
        <Route path="/steps" element={<TheSteps />} />
      </Route>
    </Routes>
  )
}
