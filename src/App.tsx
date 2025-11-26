import { RouterProvider } from 'react-router-dom'

import AppTheme from '@/theme/AppTheme'

import router from './routes'
import { AppContextProvider } from './contexts/AppContext'

export default function App(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme >
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </AppTheme>
  )
}
