import { createElectronRouter } from 'electron-router-dom'

export const { Router, registerRoute } = createElectronRouter({
  port: 5173, // the port of your React server is running on (optional, default port is 3000)

  types: {
    ids: ['main']
  }
})
