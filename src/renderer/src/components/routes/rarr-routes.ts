import React from 'react'
import ResentmentsForm from '@renderer/pages/resentments/resentmentForm'
import Stories from '@renderer/pages/literature/stories'
import TheSteps from '@renderer/pages/steps/the-steps'
import AcaTenthStep from '@renderer/pages/spawn-of-trouble/aca-tenth-step-page'
import SerenityCheckIn from '@renderer/pages/serenityCheckIn/serenityCheckInPage'
import Fears from '@renderer/pages/fears/fears'
import InventoryJoural from '@renderer/pages/journal'
import AboutRarr from '@renderer/pages/about/about-rarr'
import UnlockInventory from '@renderer/pages/UnlockInventory'
import AlanonTenthStep from '@renderer/pages/bride-of-trouble/alanon-tenth-step-page'
import AaTenthStep from '@renderer/pages/trouble/aa-tenth-step-page'

export type RarrRoute = { path: string; element: React.ComponentType }

export const rarrRouteList: RarrRoute[] = [
  { path: 'trouble', element: AaTenthStep },
  { path: 'bride-of-trouble', element: AlanonTenthStep },
  { path: 'spawn-of-trouble', element: AcaTenthStep },
  { path: 'resentments', element: ResentmentsForm },
  { path: 'serenity', element: SerenityCheckIn },
  { path: 'fears', element: Fears },
  { path: 'literature', element: Stories },
  { path: 'steps', element: TheSteps },
  { path: 'log', element: InventoryJoural },
  { path: 'about', element: AboutRarr },
  { path: 'unlock', element: UnlockInventory }
]
