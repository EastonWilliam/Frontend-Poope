import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'

import { StyledEngineProvider } from '@mui/material/styles'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
)
