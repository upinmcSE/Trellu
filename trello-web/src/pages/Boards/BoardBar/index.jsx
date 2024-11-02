import React from 'react'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import { Tooltip } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FilterListIcon from '@mui/icons-material/FilterList';
const MENU_STYLES = {
  color: 'white',
  backgroundColor: 'transparent',
  border: 'none',
  paddingX: "5px",
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.100'
  }
}


function BoardBar() {
  return (
    <div>
        <Box sx={{
            display: 'flex',
            width: '100%',
            height: (theme) => theme.trelloCustom.boardBarHeight,
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            overflowX: 'auto',
            borderBottom: '1px solid white',
            paddingX: 2,
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
          }}>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
              <Chip 
                sx={MENU_STYLES}
                icon={<DashboardIcon />}
                label='upinmcSE'
                clickable
                onClick={() => {}}
              />
              <Chip 
                sx={MENU_STYLES}
                icon={<VpnLockIcon />}
                label='Public/Private Workspace'
                clickable
                onClick={() => {}}
              />
              <Chip 
                sx={MENU_STYLES}
                icon={<AddToDriveIcon />}
                label='Add to Google Drive'
                clickable
                onClick={() => {}}
              />
              <Chip 
                sx={MENU_STYLES}
                icon={<BoltIcon />}
                label='Automation'
                clickable
                onClick={() => {}}
              />
              <Chip 
                sx={MENU_STYLES}
                icon={<FilterListIcon />}
                label='Filters'
                clickable
                onClick={() => {}}
              />
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
              <Button 
                variant='outlined' 
                startIcon={<PersonAddIcon/>}
                sx={{
                  color: 'white',
                  border: '1px solid white',
                  '&:hover': {
                    borderColor: 'white'
                  }
                }}
              >
                Invite
              </Button>
            <AvatarGroup max={3} sx={{
              gap: '10px', 
              '& .MuiAvatar-root': {
                width: '30px',
                height: '30px',
                fontSize: '16px',
                borderColor: 'white',
              }
            }}>
              <Tooltip title="upinmcSE">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </Tooltip>
              <Tooltip title="upinmcSE">
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </Tooltip>
              <Tooltip title="upinmcSE">
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </Tooltip>
              <Tooltip title="upinmcSE">
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              </Tooltip>
            </AvatarGroup>
 
            </Box> 
        </Box>
    </div>
  )
}

export default BoardBar
