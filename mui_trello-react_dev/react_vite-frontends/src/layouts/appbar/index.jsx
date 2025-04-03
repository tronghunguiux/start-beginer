import ModeTheme from '~/layouts/mode-theme'
import { Badge, Box, Button, TextField, Tooltip, Typography } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps'
import trelloLogo from '~/assets/trello.svg'
import WorkspacesBar from '~/layouts/appbar/menus/workspaces'
import RecentBar from '~/layouts/appbar/menus/recent'
import StartedBar from '~/layouts/appbar/menus/started'
import ProfileBar from '~/layouts/appbar/menus/profiles'
import TemplatesBar from '~/layouts/appbar/menus/templates'
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
export default function AppBar() {
  return (
    <>
      {/* Top bar */}
      <Box sx={{
        backgroundColor: 'white',
        width: '100%',
        height: (theme) => theme.trello.topBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <AppsIcon sx={{ color: 'primary.main' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5px' }}>
            <img src={trelloLogo} alt="Logo" />
            <Typography variant='span' sx={{fontSize: '1.25rem', fontWeight: 'bold', color: 'primary.main'}}>Trello</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5px' }}>
            <WorkspacesBar/>
            <RecentBar/>
            <StartedBar/>
            <TemplatesBar/>
          </Box>
          <Box>
            <Button variant='outlined'>CREATE NEW</Button>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <TextField id="outlined-search" label="Search..." type="search" size='small' />
          <ModeTheme />
          <Tooltip title="Notication">
            <Badge color="secondary" variant="dot" sx={{cursor: 'pointer'}}>
              <NotificationsIcon />
            </Badge>
          </Tooltip>
          <Tooltip title="Help/Quote">
            <HelpOutlineIcon sx={{cursor: 'pointer'}}/>
          </Tooltip>
          <Box>
            <ProfileBar/>
          </Box>
        </Box>
      </Box>
    </>
  )
}