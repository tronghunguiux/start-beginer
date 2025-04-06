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

export default function AppBar() {
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
        overflowX: 'auto'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <AppsIcon sx={{ color: 'primary.main' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5px' }}>
            <img src={trelloLogo} alt="Logo" />
            <Typography variant='span' sx={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'primary.main' }}>Trello</Typography>
          </Box>
          <Box sx={{
            display: () => ({ xs: 'none', md: 'flex' }),
            gap: 1
          }}>
            <WorkspacesBar />
            <RecentBar />
            <StartedBar />
            <TemplatesBar />
            <Button variant='outlined' startIcon={<LibraryAddIcon />}>Create</Button>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <TextField id="outlined-search" label="Search..." type="search" size='small' sx={{ minWidth: '120px' }} />
          <ModeTheme />
          <Tooltip title="Notication">
            <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
              <NotificationsNoneIcon sx={{ color: 'primary.main' }} />
            </Badge>
          </Tooltip>
          <Tooltip title="Help/Quote">
            <HelpOutlineIcon sx={{ color: 'primary.main' }} />
          </Tooltip>
          <Box>
            <ProfileBar />
          </Box>
        </Box>
      </Box>
    </>
  )
}