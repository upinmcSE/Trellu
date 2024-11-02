import React, { useState } from 'react'
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
import theme from '@/theme'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import ColseIcon from '@mui/icons-material/Close'



function AppBar() {
  const [searchValue, setSearchValue] = useState('')

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
            paddingX: 2,
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'),
          }}>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
              <AppIcon sx={{ color: 'white'}} />
              <Box sx={{display: 'flex', alignItems: 'center', gap: 0.5}}>
                <SvgIcon component={TrelloIcon} sx={{ color: 'white'}} />
                <Typography variant='span' sx={{fontSize: '1.2rem', fontWeight: 'bold', color:'white'}}>Trello</Typography>
              </Box>
              
              <Box sx={{ display: {xs: 'none', md: 'flex'}, gap: 1}}>
                <Workspaces />
                <Recent />
                <Starred />
                <Templates />

                <Button 
                  sx={{color: 'white', border: 'none'}}
                  variant='outlined' 
                  startIcon={<LibraryAddIcon />}
                >Create</Button>
              </Box>
            </Box>
            
            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
              <TextField 
                id='outlined-search' 
                label="Search ..." 
                type='text' 
                size='small' 
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchIcon sx={{color: 'white'}} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <ColseIcon 
                      fontSize='small'
                      sx={{cursor: 'pointer', color: searchValue ? 'white' : 'transparent'}}
                      onClick={() => setSearchValue('')}
                    />
                  )
                }}
                sx={{
                  minWidth: 120,
                  maxWidth: 180,
                  '& label': { color: 'white'},
                  '& input': { color: 'white'},
                  '& label.Mui-focused': { color: 'white'},
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  }
                }}
              />
              <ModeSelect />
              <Tooltip title="Notifications">
                <Badge color='warning' variant='dot' sx={{cursor: 'pointer'}}>
                  <NotificationsNoneIcon sx={{color: 'white'}} />
                </Badge>
              </Tooltip>

              <Tooltip title="Help" sx={{cursor: 'pointer', color: 'white'}}>
                <HelpOutlineIcon />
              </Tooltip>

              <Profiles />
            </Box>
          </Box>
    </div>
  )
}

export default AppBar
