import { useState } from 'react'
import ModeTheme from '~/layouts/mode-theme'
import { Badge, Box, Button, TextField, Tooltip, Typography } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps'
import trelloLogo from '~/assets/trello.svg'
import WorkspacesBar from '~/layouts/appbar/menus/workspaces'
import RecentBar from '~/layouts/appbar/menus/recent'
import StartedBar from '~/layouts/appbar/menus/started'
import ProfileBar from '~/layouts/appbar/menus/profiles'
import TemplatesBar from '~/layouts/appbar/menus/templates'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function AppBar() {
  const [searchValue, setsearchValue] = useState('')
  return (
    <>
      {/* Top bar */}
      <Box sx={{
        width: '100%',
        height: (theme) => theme.trello.topBarHeight,
        paddingX: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2px',
        overflowX: 'auto',
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <AppsIcon sx={{ color: 'white' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5px' }}>
            <img src={trelloLogo} alt="Logo" />
            <Typography variant='span' sx={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>Trello</Typography>
          </Box>
          <Box sx={{
            display: () => ({ xs: 'none', md: 'flex' }),
            gap: 1
          }}>
            <WorkspacesBar />
            <RecentBar />
            <StartedBar />
            <TemplatesBar />
            <Button variant='outlined' startIcon={<LibraryAddIcon />}
              sx={{ color: 'white', border: 'none', '&:hover': { border: 'none' } }}>
              Create
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <TextField id="outlined-search" label="Search..." type="text" size='small' value={searchValue}
            onChange={(e) => setsearchValue(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'white' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <CloseIcon fontSize='small' sx={{ color: searchValue ? 'white' : 'transparent', cursor: 'pointer' }} onClick={() => { setsearchValue('') }} />
                </InputAdornment>
              ),
            }}
            sx={{
              minWidth: '120px',
              maxWidth: '180px',
              '& label': { color: 'white', },
              '& input': { color: 'white', },
              '& label.Mui-focused': { color: 'white', },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white', },
                '&:hover fieldset': { borderColor: 'white', },
                '&.Mui-focused fieldset': { borderColor: 'white', },
              }
            }} />
          <ModeTheme />
          <Tooltip title="Notication">
            <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
              <NotificationsNoneIcon sx={{ color: 'white' }} />
            </Badge>
          </Tooltip>
          <Tooltip title="Help/Quote">
            <HelpOutlineIcon sx={{ color: 'white' }} />
          </Tooltip>
          <Box>
            <ProfileBar />
          </Box>
        </Box>
      </Box>
    </>
  )
}