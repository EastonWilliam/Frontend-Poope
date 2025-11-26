import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Box from '@mui/material/Box'
import Header from '@/layout/Header'

import { Footer } from './Footer'

const LandingLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>

      {/* Main content */}
      <Box
        component='main'
        sx={theme => ({
          flexGrow: 1,
          // backgroundColor: alpha(theme.palette.background.default, 1),
          backgroundImage: 'url("../assets/icons/BGPattern.svg")',
          backgroundSize: 'contain',
          overflow: 'auto'
        })}
      >
        <Header />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Footer />
      </Box>
    </Box>
  )
}

export default LandingLayout
