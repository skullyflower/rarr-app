import { Route } from 'react-router-dom'
import Layout from '@renderer/components/layout/Layout'
import HomePage from '@renderer/pages/home'
import ResentmentsForm from '@renderer/pages/resentments/resentmentForm'
import Stories from '@renderer/pages/literature/stories'
import TheSteps from '@renderer/pages/steps/the-steps'
import AcaTenthStep from '@renderer/pages/acaTenthStep/aca-tenth-step-page'
import SerenityCheckIn from '@renderer/pages/serenityCheckIn/serenityCheckInPage'
import Fears from '@renderer/pages/fears/fears'
import InventoryJoural from '@renderer/pages/journal'
import { Router } from '@renderer/../../lib/electron-router-dom'
import UnlockInventory from '@renderer/pages/UnlockInventory'
import AboutRarr from '@renderer/pages/about/about-rarr'

export default function SiteRoutes(): JSX.Element {
  return (
    <Router
      main={
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/inventory" element={<ResentmentsForm />} />
          <Route path="/aca-tenth-step" element={<AcaTenthStep />} />
          <Route path="/serenity" element={<SerenityCheckIn />} />
          <Route path="/fears" element={<Fears />} />
          <Route path="/literature" element={<Stories />} />
          <Route path="/steps" element={<TheSteps />} />
          <Route path="/log" element={<InventoryJoural />} />
          <Route path="/unlock" element={<UnlockInventory />} />
          <Route path="/about" element={<AboutRarr />} />
        </Route>
      }
    />
  )
}
