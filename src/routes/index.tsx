import { ROUTES } from '@/constants/routes'
import LandingLayout from '@/layout'
import { createBrowserRouter } from 'react-router-dom'

import { Landing } from '@/pages/Landing'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      { index: true, element: <Landing /> },
    ],
  }
])

export default router
