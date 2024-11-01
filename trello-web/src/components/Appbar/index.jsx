import React from 'react'
import ModeSelect from '../ModeSelect'
import Box from '@mui/material/Box'
import AppIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '@/assets/trello.svg' 
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button  from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from '@/components/Appbar/Menus/Profiles'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';




function AppBar() {
  return (
    <div>
      <Box sx = {{
            display: 'flex',
            width: '100%',
            height: (theme) => theme.trelloCustom.appBarHeight,
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            overflowX: 'auto',
            paddingX: 2
          }}>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
              <AppIcon sx={{ color: 'primary.main'}} />
              <Box sx={{display: 'flex', alignItems: 'center', gap: 0.5}}>
                <SvgIcon component={TrelloIcon} sx={{ color: 'primary.main'}} />
                <Typography variant='span' sx={{fontSize: '1.2rem', fontWeight: 'bold', color:'primary.main'}}>Trello</Typography>
              </Box>
              
              <Box sx={{ display: {xs: 'none', md: 'flex'}, gap: 1}}>
                <Workspaces />
                <Recent />
                <Starred />
                <Templates />

                <Button variant='outlined' startIcon={<LibraryAddIcon />}>Create</Button>
              </Box>
            </Box>
            
            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
              <TextField id='outlined-search' label="Search filed" type='search' size='small' sx={{minWidth: 120}}/>
              <ModeSelect />
              <Tooltip title="Notifications">
                <Badge color='secondary' variant='dot' sx={{cursor: 'pointer'}}>
                  <NotificationsNoneIcon sx={{color: 'primary.main'}} />
                </Badge>
              </Tooltip>

              <Tooltip title="Help" sx={{cursor: 'pointer', color: 'primary.main'}}>
                <HelpOutlineIcon />
              </Tooltip>

              <Profiles />
            </Box>
          </Box>
    </div>
  )
}

export default AppBar
