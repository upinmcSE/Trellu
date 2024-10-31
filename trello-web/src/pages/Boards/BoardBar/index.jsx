import React from 'react'
import Box from '@mui/material/Box'
function BoardBar() {
  return (
    <div>
        <Box sx={{
            backgroundColor: 'primary.dark',
            display: 'flex',
            width: '100%',
            height: (theme) => theme.trelloCustom.boardBarHeight,
            alignItems: 'center',
          }}>
            Board Bar
        </Box>
    </div>
  )
}

export default BoardBar
