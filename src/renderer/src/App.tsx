import { ColorModeScript } from '@chakra-ui/react'
import SiteRoutes from './components/Routes'
import theme from './theme.mjs'

function App(): JSX.Element {
  //const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  ;<ColorModeScript initialColorMode={theme.config.initialColorMode} />

  return <SiteRoutes />
}

export default App
