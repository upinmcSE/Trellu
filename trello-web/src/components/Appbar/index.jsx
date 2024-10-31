import React from 'react'
import ModeSelect from '../ModeSelect'
import Box from '@mui/material/Box'

function AppBar() {
  return (
    <div>
      <Box sx = {{
            backgroundColor: 'primary.light',
            display: 'flex',
            width: '100%',
            height: (theme) => theme.trelloCustom.appBarHeight,
            alignItems: 'center',
          }}>
            <ModeSelect />
          </Box>
    </div>
  )
}

export default AppBar
